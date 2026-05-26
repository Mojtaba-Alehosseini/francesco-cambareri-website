import type { Metadata } from 'next';
import { Playfair_Display, Lora, Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '../../i18n';
import '../globals.css';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-display',
});

const body = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Francesco Cambareri — Calisthenics Personal Trainer',
  description:
    'Francesco Cambareri, Personal Trainer di Calistenia. Allenamento a corpo libero nella tradizione della cultura fisica, dal 1880 a oggi.',
  icons: { icon: '/brand/favicon-source.png' },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${display.variable} ${body.variable} ${sans.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-cream-50 focus:px-3 focus:py-2 focus:border focus:border-sepia-400"
          >
            {messages?.common?.skipToContent ?? 'Skip to content'}
          </a>
          <SiteHeader locale={locale as Locale} />
          <main id="main" className="min-h-screen">
            {children}
          </main>
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
