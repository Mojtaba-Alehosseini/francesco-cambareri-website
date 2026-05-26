'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '../i18n';
import { useTransition } from 'react';

const LANG_LABEL: Record<Locale, string> = {
  it: 'IT',
  en: 'EN',
  de: 'DE',
  fr: 'FR',
};

export default function LanguageSwitcher({
  currentLocale,
}: {
  currentLocale: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const onChange = (nextLocale: Locale) => {
    // pathname includes the current locale prefix — swap it.
    const segments = pathname.split('/');
    if (locales.includes(segments[1] as Locale)) {
      segments[1] = nextLocale;
    } else {
      segments.unshift('', nextLocale);
    }
    const next = segments.join('/') || `/${nextLocale}`;
    startTransition(() => router.push(next));
  };

  return (
    <div
      className="flex items-center gap-1 font-sans text-[0.65rem] tracking-widest2 uppercase"
      role="group"
      aria-label="Language switcher"
    >
      {locales.map((l) => {
        const active = l === currentLocale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => !active && onChange(l)}
            aria-pressed={active}
            className={`px-1.5 py-1 transition-colors ${
              active
                ? 'text-burgundy-500 underline underline-offset-4'
                : 'text-sepia-500 hover:text-sepia-800'
            }`}
          >
            {LANG_LABEL[l]}
          </button>
        );
      })}
    </div>
  );
}
