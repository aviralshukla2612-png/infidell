import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  containsMaliciousPayload,
  validatePhoneNumber,
  sanitizeHtml,
  sanitizeText
} from '@/lib/security';

const referralSchema = z.object({
  referrerName: z
    .string()
    .min(2, 'Referrer name is required')
    .max(70, 'Referrer name cannot exceed 70 characters')
    .refine((val) => !containsMaliciousPayload(val), 'Invalid characters in name'),
  referrerPhone: z
    .string()
    .min(7, 'Referrer phone must have at least 7 digits')
    .max(25, 'Referrer phone cannot exceed 25 characters')
    .refine((val) => validatePhoneNumber(val).valid, 'Invalid phone number format'),
  referralType: z.enum(['candidate', 'employer']),
  refereeName: z
    .string()
    .min(2, 'Referee name is required')
    .max(70, 'Referee name cannot exceed 70 characters')
    .refine((val) => !containsMaliciousPayload(val), 'Invalid characters in referee name'),
  refereePhone: z
    .string()
    .min(7, 'Referee phone must have at least 7 digits')
    .max(25, 'Referee phone cannot exceed 25 characters')
    .refine((val) => validatePhoneNumber(val).valid, 'Invalid referee phone number format'),
  refereeEmail: z
    .string()
    .email('Valid referee email is required')
    .max(100, 'Referee email cannot exceed 100 characters'),
  notes: z
    .string()
    .max(500, 'Notes cannot exceed 500 characters')
    .optional()
    .refine((val) => !val || !containsMaliciousPayload(val), 'Executable scripts or markup are prohibited')
});

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();

    if (
      (typeof rawBody.referrerName === 'string' && containsMaliciousPayload(rawBody.referrerName)) ||
      (typeof rawBody.refereeName === 'string' && containsMaliciousPayload(rawBody.refereeName)) ||
      (typeof rawBody.notes === 'string' && containsMaliciousPayload(rawBody.notes))
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Security Alert: HTML tags, scripts, and executable database keywords are strictly prohibited.'
        },
        { status: 400 }
      );
    }

    const data = referralSchema.parse(rawBody);

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
