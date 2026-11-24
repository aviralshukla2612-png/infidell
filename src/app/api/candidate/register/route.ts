import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  containsMaliciousPayload,
  validatePhoneNumber,
  sanitizeHtml,
  sanitizeText
} from '@/lib/security';

const candidateSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(70, 'Full name cannot exceed 70 characters')
    .refine((val) => !containsMaliciousPayload(val), 'Invalid characters in full name'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(100, 'Email cannot exceed 100 characters')
    .refine((val) => !containsMaliciousPayload(val), 'Invalid characters in email'),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .max(25, 'Phone number cannot exceed 25 characters')
    .refine((val) => validatePhoneNumber(val).valid, 'Invalid phone number format'),
  education: z
    .string()
    .min(2, 'Education qualification is required')
    .max(100, 'Education qualification cannot exceed 100 characters'),
  experience: z
    .string()
    .min(1, 'Please specify your experience level')
    .max(50, 'Experience level cannot exceed 50 characters'),
  skills: z
    .string()
    .min(2, 'Please list at least one primary skill')
    .max(300, 'Skills cannot exceed 300 characters')
    .refine((val) => !containsMaliciousPayload(val), 'Invalid script patterns in skills'),
  preferredIndustry: z
    .string()
    .min(2, 'Preferred industry is required')
    .max(80, 'Preferred industry cannot exceed 80 characters'),
  preferredLocation: z
    .string()
    .min(2, 'Preferred location is required')
    .max(100, 'Preferred location cannot exceed 100 characters'),
  resumeFileName: z.string().max(255).optional(),
  termsAccepted: z.boolean().refine((val) => val === true, 'You must accept the terms')
});

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();

    if (
      (typeof rawBody.fullName === 'string' && containsMaliciousPayload(rawBody.fullName)) ||
      (typeof rawBody.skills === 'string' && containsMaliciousPayload(rawBody.skills))
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Security Alert: HTML tags, scripts, and executable database keywords are strictly prohibited.'
        },
        { status: 400 }
      );
    }

    const validatedData = candidateSchema.parse(rawBody);

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
