// Middleware is intentionally disabled for static export to GitHub Pages.
// next-intl routing is handled at build time via generateStaticParams in
// app/[locale]/layout.tsx. Locale-prefixed URLs (/it/, /en/, ...) are
// generated as static pages, and the root / redirects to /it/ via
// app/page.tsx.
//
// If you switch to Vercel or another Node server, you can restore the
// dynamic middleware here:
//
//   import createMiddleware from 'next-intl/middleware';
//   import { locales, defaultLocale } from './i18n';
//   export default createMiddleware({ locales, defaultLocale, localePrefix: 'always' });
//   export const config = { matcher: ['/((?!api|_next|.*\\..*).*)'] };
//
export {};
