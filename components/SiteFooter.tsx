'use client';

import { useTranslations } from 'next-intl';

export default function SiteFooter() {
  const t = useTranslations('footer');
  const tc = useTranslations('contact');
  return (
    <footer className="border-t border-sepia-300/50 mt-24 bg-cream-100/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 grid gap-6 md:grid-cols-3 text-sm text-sepia-700">
        <div>
          <div className="font-serif text-lg text-sepia-800">
            Francesco Cambareri
          </div>
          <p className="mt-2 text-sepia-600 leading-relaxed">
            {tc('placeholderValues.location')}
          </p>
        </div>
        <div>
          <a
            href={`https://instagram.com/${tc('placeholderValues.instagram').replace(
              '@',
              ''
            )}`}
            className="underline underline-offset-4 hover:text-burgundy-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('instagram')} — {tc('placeholderValues.instagram')}
          </a>
        </div>
        <div className="text-[0.7rem] leading-relaxed text-sepia-500 md:text-right">
          <p>{t('credits')}</p>
          <p className="mt-2">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
