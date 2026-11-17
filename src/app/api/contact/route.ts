import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  inquiryType: z.enum(['candidate', 'employer', 'referral', 'general']),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = contactSchema.parse(body);

    const ticketId = `INF-TCK-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      message: 'Inquiry received. An Infidell recruitment representative will reach out to you within 24 hours.',
      ticketId,
      timestamp: new Date().toISOString()
    });
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.issues.map(e => ({ field: e.path.join('.'), message: e.message })) },
        { status: 400 }
      );
    }
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

