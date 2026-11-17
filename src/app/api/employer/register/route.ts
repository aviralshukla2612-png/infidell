import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const employerSchema = z.object({
  companyName: z.string().min(2, 'Company name is required'),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  workEmail: z.string().email('Valid official email address is required'),
  phone: z.string().min(10, 'Contact phone number must be at least 10 digits'),
  industry: z.string().min(2, 'Industry vertical is required'),
  hiringRole: z.string().min(2, 'Role description is required'),
  openPositions: z.coerce.number().min(1, 'Minimum 1 position required'),
  jobLocation: z.string().min(2, 'Location is required'),
  jobDescription: z.string().min(10, 'Job description must be at least 10 characters')
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = employerSchema.parse(body);

    const mandateId = `INF-EMP-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      message: 'Hiring requirement mandate registered successfully. An Infidell account manager will contact you within 24 hours.',
      mandateId,
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

