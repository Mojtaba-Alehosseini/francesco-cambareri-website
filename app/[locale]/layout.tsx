import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '../../i18n';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Locale-scoped layout. Wraps the locale page tree with the i18n provider,
 * the sticky header, and the footer. Does NOT render <html>/<body> — those
 * live in the root layout (app/layout.tsx) so the static-export root
 * redirect can share them.
 */
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-cream-50 focus:px-3 focus:py-2 focus:border focus:border-sepia-400"
      >
        {(messages as { common?: { skipToContent?: string } })?.common?.skipToContent ??
          'Vai al contenuto'}
      </a>
      <SiteHeader locale={locale as Locale} />
      <main id="main" className="min-h-screen">
        {children}
      </main>
      <SiteFooter />
    </NextIntlClientProvider>
  );
}
