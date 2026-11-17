import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const candidateSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid 10-digit mobile number'),
  education: z.string().min(2, 'Education qualification is required'),
  experience: z.string().min(1, 'Please specify your experience level'),
  skills: z.string().min(2, 'Please list at least one primary skill'),
  preferredIndustry: z.string().min(2, 'Preferred industry is required'),
  preferredLocation: z.string().min(2, 'Preferred location is required'),
  resumeFileName: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, 'You must accept the terms')
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = candidateSchema.parse(body);

    // Generate candidate reference ID
    const candidateId = `INF-CAN-${Date.now().toString().slice(-6)}`;

    // In production, save to database securely. Candidate data is never exposed publicly.
    return NextResponse.json({
      success: true,
      message: 'Candidate registration submitted successfully! Your profile is queued for review.',
      candidateId,
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

