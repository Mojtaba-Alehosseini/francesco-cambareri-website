import Image from 'next/image';
import Link from 'next/link';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { featuredItems } from '../../lib/gallery';
import VintageGallery from '../../components/VintageGallery';
import { asset } from '../../lib/asset';

export default async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('home');
  const base = `/${locale}`;

  // Pick a single hero image: first featured item
  const hero = featuredItems[0];

  return (
    <>
      {/* ----- HERO ----- */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-10 pb-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 fade-up">
            <p className="font-sans text-[0.72rem] uppercase tracking-widest2 text-sepia-500">
              {t('hero.kicker')}
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-7xl text-sepia-900 leading-[1.05] tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="mt-3 font-serif italic text-xl sm:text-2xl text-burgundy-500">
              {t('hero.subtitle')}
            </p>
            <p className="mt-6 max-w-prose text-base sm:text-lg text-sepia-700 leading-relaxed">
              {t('hero.lead')}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3">
              <Link
                href={`${base}/contact`}
                className="inline-flex items-center justify-center px-5 py-3 bg-sepia-800 text-cream-50 text-xs tracking-widest2 uppercase font-sans hover:bg-burgundy-500 transition-colors"
              >
                {t('hero.ctaPrimary')}
              </Link>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center px-5 py-3 border border-sepia-700 text-sepia-800 text-xs tracking-widest2 uppercase font-sans hover:bg-sepia-700 hover:text-cream-50 transition-colors"
              >
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </div>

          {hero && (
            <div className="lg:col-span-5 fade-up">
              <figure className="relative aspect-[4/5] w-full border border-sepia-300 shadow-[0_20px_60px_-30px_rgba(85,60,31,0.6)]">
                <Image
                  src={asset(hero.src)}
                  alt={hero.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover vintage-tone"
                />
                {hero.era && (
                  <figcaption className="absolute bottom-3 left-3 era-stamp bg-cream-50/90">
                    {hero.title} · {hero.era}
                  </figcaption>
                )}
              </figure>
            </div>
          )}
        </div>
      </section>

      {/* ----- MANIFESTO ----- */}
      <section className="border-y border-sepia-300/50 bg-cream-100/60">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 text-center">
          <div className="rule-double mx-auto text-sepia-500" />
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl text-sepia-900">
            {t('manifesto.title')}
          </h2>
          <p className="mt-6 text-lg text-sepia-700 leading-relaxed drop-cap text-left">
            {t('manifesto.p1')}
          </p>
          <p className="mt-5 text-lg text-sepia-700 leading-relaxed text-left">
            {t('manifesto.p2')}
          </p>
          <div className="rule-double mx-auto text-sepia-500 mt-10" />
        </div>
      </section>

      {/* ----- FEATURED STRIP ----- */}
      <section
        aria-label="Featured archive"
        className="mx-auto max-w-6xl px-5 sm:px-8 py-16"
      >
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {featuredItems.slice(0, 6).map((it) => (
            <li key={it.src} className="group">
              <div className="relative aspect-square overflow-hidden border border-sepia-200">
                <Image
                  src={asset(it.src)}
                  alt={it.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover vintage-tone transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest2 text-sepia-600 text-center">
                {it.era ?? it.title}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ----- GALLERY ----- */}
      <section id="gallery" aria-labelledby="gallery-heading">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 pt-8 text-center">
          <h2
            id="gallery-heading"
            className="font-serif text-4xl text-sepia-900"
          >
            {t('gallerySection.title')}
          </h2>
          <p className="mt-4 text-sepia-700 leading-relaxed">
            {t('gallerySection.subtitle')}
          </p>
        </div>
        <VintageGallery />
      </section>
    </>
  );
}
