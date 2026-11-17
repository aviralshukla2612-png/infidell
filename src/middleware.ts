import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames, ignore api, static files, and _next
  matcher: ['/', '/(en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
