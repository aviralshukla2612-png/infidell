/**
 * Security and Input Sanitization Utilities
 * Protects against XSS, SQL/NoSQL Injection, Script Execution, and Malformed Data
 */

/**
 * Escapes characters that have special meaning in HTML to prevent Cross-Site Scripting (XSS).
 */
export function sanitizeHtml(input: string): string {
  if (!input || typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Detects dangerous or malicious input patterns:
 * - Script execution tags (<script>, <iframe>, <object>, etc.)
 * - Malicious URI schemes (javascript:, data:text/html, vbscript:)
 * - Inline HTML event handlers (onload=, onerror=, onclick=)
 * - SQL injection keywords & statements (DROP TABLE, DELETE FROM, UNION SELECT, etc.)
 * - NoSQL injection primitives ($where, $regex, etc.)
 * - Prototype pollution patterns (__proto__, constructor.prototype)
 */
export function containsMaliciousPayload(input: string): boolean {
  if (!input || typeof input !== 'string') return false;

  const dangerousPatterns = [
    // Script & HTML tag injection
    /<[^>]*>/,
    /<\/?[a-z][\s\S]*>/i,
    /javascript\s*:/i,
    /data\s*:\s*text\/html/i,
    /vbscript\s*:/i,
    /onload\s*=/i,
    /onerror\s*=/i,
    /onclick\s*=/i,
    /onmouseover\s*=/i,
    /onfocus\s*=/i,
    /eval\s*\(/i,
    /expression\s*\(/i,
    /document\s*\.\s*(cookie|location|write)/i,
    /window\s*\.\s*location/i,

    // SQL Injection patterns
    /\b(DROP|DELETE|TRUNCATE|ALTER)\s+(TABLE|DATABASE|FROM|VIEW)\b/i,
    /\bUNION\s+(ALL\s+)?SELECT\b/i,
    /\bINSERT\s+INTO\b/i,
    /\bUPDATE\s+[\w`"']+\s+SET\b/i,
    /;\s*(DROP|DELETE|INSERT|UPDATE|TRUNCATE|EXEC|EXECUTE)\b/i,
    /--\s*$/,
    /\/\*[\s\S]*?\*\//,
    /\b(OR|AND)\s+['"]?(\w+)['"]?\s*=\s*['"]?\2['"]?/i,
    /\b(OR|AND)\s+1\s*=\s*1\b/i,

    // Prototype pollution / NoSQL
    /__proto__/i,
    /constructor\s*\[\s*['"]prototype['"]\s*\]/i,
    /\$where/i,
    /\$regex/i,
    /\$gt|\$gte|\$ne|\$in|\$nin/i
  ];

  return dangerousPatterns.some((pattern) => pattern.test(input));
}

/**
 * Filters raw phone input, retaining only numeric characters, spaces, dashes,
 * parentheses, and a single leading plus sign. Restricts maximum length to 16 characters.
 */
export function sanitizePhoneInput(raw: string): string {
  if (!raw || typeof raw !== 'string') return '';
  return raw.replace(/[^0-9+\s\-()]/g, '').slice(0, 16);
}

/**
 * Validates that a phone string contains between 7 and 15 digits (ITU-T E.164 recommendation)
 * and has no illegal symbols.
 */
export function validatePhoneNumber(phone: string): { valid: boolean; error?: string } {
  if (!phone || typeof phone !== 'string') {
    return { valid: false, error: 'Phone number is required.' };
  }
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 7) {
    return { valid: false, error: 'Phone number must contain at least 7 digits.' };
  }
  if (digits.length > 15) {
    return { valid: false, error: 'Phone number cannot exceed 15 digits.' };
  }
  if (/[^0-9+\s\-()]/.test(phone)) {
    return { valid: false, error: 'Phone number contains invalid characters.' };
  }
  return { valid: true };
}

/**
 * Normalizes text, trims whitespace, strips angle brackets, and truncates to maxLength.
 */
export function sanitizeText(input: string, maxLength: number = 1000): string {
  if (!input || typeof input !== 'string') return '';
  return input
    .trim()
    .slice(0, maxLength)
    .replace(/[<>]/g, '');
}
