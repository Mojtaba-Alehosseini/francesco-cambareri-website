import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['it', 'en', 'de', 'fr'] as const;
export const defaultLocale = 'it' as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  // When deployed statically (no middleware), locale is provided by
  // unstable_setRequestLocale() in each page/layout under app/[locale]/.
  if (!locales.includes(locale as Locale)) notFound();

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
