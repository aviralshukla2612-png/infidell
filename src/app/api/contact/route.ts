import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import {
  containsMaliciousPayload,
  validatePhoneNumber,
  sanitizeHtml,
  sanitizeText
} from '@/lib/security';

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(70, 'Full name cannot exceed 70 characters')
    .refine((val) => !containsMaliciousPayload(val), {
      message: 'Name contains invalid characters or disallowed scripts'
    }),
  email: z
    .string()
    .email('Valid email address is required')
    .max(100, 'Email address cannot exceed 100 characters')
    .refine((val) => !containsMaliciousPayload(val), {
      message: 'Email address contains invalid characters'
    }),
  phone: z
    .string()
    .min(7, 'Phone number must have at least 7 digits')
    .max(25, 'Phone number cannot exceed 25 characters')
    .refine((val) => validatePhoneNumber(val).valid, {
      message: 'Please provide a valid phone number (between 7 and 15 digits)'
    }),
  inquiryType: z.enum(['candidate', 'employer', 'referral', 'general']),
  message: z
    .string()
    .min(5, 'Message must be at least 5 characters')
    .max(1000, 'Message cannot exceed 1,000 characters')
    .refine((val) => !containsMaliciousPayload(val), {
      message: 'Security Notice: Script tags, HTML markup, and executable code snippets are strictly prohibited.'
    })
});

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();

    // Defensive check on raw strings
    if (
      typeof rawBody.fullName === 'string' && containsMaliciousPayload(rawBody.fullName) ||
      typeof rawBody.message === 'string' && containsMaliciousPayload(rawBody.message) ||
      typeof rawBody.email === 'string' && containsMaliciousPayload(rawBody.email)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Security Alert: HTML tags, scripts, and executable database keywords are strictly prohibited.'
        },
        { status: 400 }
      );
    }

    const validatedData = contactSchema.parse(rawBody);

    // Sanitize all inputs before any potential persistence/logging
    const sanitizedRecord = {
      fullName: sanitizeHtml(sanitizeText(validatedData.fullName, 70)),
      email: validatedData.email.trim().toLowerCase(),
      phone: sanitizeHtml(validatedData.phone.trim()),
      inquiryType: validatedData.inquiryType,
      message: sanitizeHtml(sanitizeText(validatedData.message, 1000)),
      receivedAt: new Date().toISOString()
    };

    const ticketId = `INF-TCK-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      message: 'Inquiry received. An Infidell recruitment representative will reach out to you promptly.',
      ticketId,
      timestamp: sanitizedRecord.receivedAt
    });
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: err.issues.map((e) => ({
            field: e.path.join('.'),
            message: e.message
          }))
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
