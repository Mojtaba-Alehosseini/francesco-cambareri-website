import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export const config = {
  // Match all paths except API, _next, static assets
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
