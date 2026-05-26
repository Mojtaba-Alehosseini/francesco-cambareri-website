'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import type { Locale } from '../i18n';
import LanguageSwitcher from './LanguageSwitcher';

const NAV = [
  { href: '', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/services', key: 'services' },
  { href: '/gallery', key: 'gallery' },
  { href: '/contact', key: 'contact' },
] as const;

export default function SiteHeader({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const base = `/${locale}`;

  return (
    <header className="border-b border-sepia-200/60 bg-cream-50/85 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-4 flex items-center justify-between gap-6">
        <Link
          href={base}
          className="flex items-center gap-3 group"
          aria-label="Francesco Cambareri — home"
        >
          <Image
            src="/brand/logo-mark.png"
            alt=""
            width={44}
            height={44}
            className="vintage-tone transition-transform group-hover:rotate-[-3deg]"
            priority
          />
          <div className="leading-tight hidden sm:block">
            <div className="font-serif text-lg text-sepia-800 tracking-wide">
              Francesco Cambareri
            </div>
            <div className="text-[0.65rem] uppercase tracking-widest2 text-sepia-500">
              Calisthenics Personal Trainer
            </div>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 text-sm"
        >
          {NAV.map(({ href, key }) => {
            const full = `${base}${href}`;
            const active =
              pathname === full || (href === '' && pathname === base);
            return (
              <Link
                key={key}
                href={full}
                className={`relative font-sans tracking-wide transition-colors ${
                  active ? 'text-burgundy-500' : 'text-sepia-700 hover:text-sepia-900'
                }`}
              >
                {t(key)}
                {active && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-burgundy-500" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} />
          <Link
            href={`${base}/contact`}
            className="hidden sm:inline-flex items-center px-4 py-2 border border-sepia-700 text-sepia-800 text-xs tracking-widest2 uppercase hover:bg-sepia-700 hover:text-cream-50 transition-colors font-sans"
          >
            {t('bookCta')}
          </Link>
        </div>
      </div>

      {/* Mobile nav — horizontally scrollable so long Italian labels never wrap */}
      <nav
        aria-label="Mobile"
        className="md:hidden border-t border-sepia-200/60"
      >
        <div className="flex items-center gap-5 px-5 py-2 overflow-x-auto whitespace-nowrap text-[0.7rem] uppercase tracking-widest2 text-sepia-700 scrollbar-thin">
          {NAV.map(({ href, key }) => {
            const full = `${base}${href}`;
            const active =
              pathname === full || (href === '' && pathname === base);
            return (
              <Link
                key={key}
                href={full}
                className={`shrink-0 ${
                  active ? 'text-burgundy-500' : 'hover:text-sepia-900'
                }`}
              >
                {t(key)}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
