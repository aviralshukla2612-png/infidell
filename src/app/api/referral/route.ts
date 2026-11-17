import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const referralSchema = z.object({
  referrerName: z.string().min(2, 'Referrer name is required'),
  referrerPhone: z.string().min(10, 'Referrer phone must be at least 10 digits'),
  referralType: z.enum(['candidate', 'employer']),
  refereeName: z.string().min(2, 'Referee name is required'),
  refereePhone: z.string().min(10, 'Referee phone must be at least 10 digits'),
  refereeEmail: z.string().email('Valid referee email is required'),
  notes: z.string().optional()
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = referralSchema.parse(body);

    const referralCode = `INF-REF-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      message: 'Referral submitted successfully! You will receive confirmation via SMS and Email.',
      referralCode,
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

