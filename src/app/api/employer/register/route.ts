import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  containsMaliciousPayload,
  validatePhoneNumber,
  sanitizeHtml,
  sanitizeText
} from '@/lib/security';

const employerSchema = z.object({
  companyName: z
    .string()
    .min(2, 'Company name is required')
    .max(100, 'Company name cannot exceed 100 characters')
    .refine((val) => !containsMaliciousPayload(val), 'Invalid company name'),
  contactPerson: z
    .string()
    .min(2, 'Contact person name is required')
    .max(70, 'Contact person name cannot exceed 70 characters')
    .refine((val) => !containsMaliciousPayload(val), 'Invalid contact person name'),
  workEmail: z
    .string()
    .email('Valid official email address is required')
    .max(100, 'Email address cannot exceed 100 characters')
    .refine((val) => !containsMaliciousPayload(val), 'Invalid email address'),
  phone: z
    .string()
    .min(7, 'Contact phone number must have at least 7 digits')
    .max(25, 'Contact phone number cannot exceed 25 characters')
    .refine((val) => validatePhoneNumber(val).valid, 'Invalid contact phone number format'),
  industry: z
    .string()
    .min(2, 'Industry vertical is required')
    .max(80, 'Industry vertical cannot exceed 80 characters'),
  hiringRole: z
    .string()
    .min(2, 'Role description is required')
    .max(120, 'Role description cannot exceed 120 characters'),
  openPositions: z.coerce.number().min(1, 'Minimum 1 position required').max(10000, 'Invalid number of positions'),
  jobLocation: z
    .string()
    .min(2, 'Location is required')
    .max(100, 'Location cannot exceed 100 characters'),
  jobDescription: z
    .string()
    .min(10, 'Job description must be at least 10 characters')
    .max(2000, 'Job description cannot exceed 2,000 characters')
    .refine((val) => !containsMaliciousPayload(val), 'Executable scripts or database queries are strictly prohibited')
});

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();

    if (
      (typeof rawBody.jobDescription === 'string' && containsMaliciousPayload(rawBody.jobDescription)) ||
      (typeof rawBody.companyName === 'string' && containsMaliciousPayload(rawBody.companyName)) ||
      (typeof rawBody.contactPerson === 'string' && containsMaliciousPayload(rawBody.contactPerson))
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Security Alert: HTML tags, scripts, and executable database keywords are strictly prohibited.'
        },
        { status: 400 }
      );
    }

    const validatedData = employerSchema.parse(rawBody);

    const mandateId = `INF-EMP-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      message: 'Hiring requirement mandate registered successfully. An Infidell account manager will contact you promptly.',
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
