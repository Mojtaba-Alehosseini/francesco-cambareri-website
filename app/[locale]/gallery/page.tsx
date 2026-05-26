import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { galleryItems } from '../../../lib/gallery';

export default async function GalleryPage() {
  const t = await getTranslations('gallery');

  // For the Gallery page, show the FULL archive (Francesco's own posts at top)
  const francesco = galleryItems.filter((g) => g.category === 'francesco');
  const archive = galleryItems.filter((g) => g.category !== 'francesco');

  return (
    <article className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
      <header className="text-center">
        <p className="font-sans text-[0.72rem] uppercase tracking-widest2 text-sepia-500">
          {t('kicker')}
        </p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-sepia-900">
          {t('title')}
        </h1>
        <p className="mt-5 max-w-prose mx-auto text-sepia-700 leading-relaxed">
          {t('lead')}
        </p>
        <div className="rule-double mx-auto text-sepia-500 mt-8" />
      </header>

      {/* Coming soon callout — Francesco's own training photos placeholder */}
      <section className="mt-14 bg-cream-100/60 border border-sepia-300 p-8 text-center">
        <p className="font-sans text-[0.65rem] uppercase tracking-widest2 text-burgundy-500">
          TODO
        </p>
        <h2 className="mt-2 font-serif text-2xl text-sepia-900">
          {t('comingSoonTitle')}
        </h2>
        <p className="mt-3 max-w-prose mx-auto text-sepia-700">
          {t('comingSoonText')}
        </p>
      </section>

      {/* Francesco's archive (his IG content) */}
      <section className="mt-16">
        <h2 className="font-serif text-3xl text-sepia-900">
          Archivio Cambareri
        </h2>
        <p className="text-sepia-600 text-sm mt-1">
          Pubblicazioni in stile @vintage_calisthenics
        </p>
        <div className="rule-double text-sepia-500 mt-3" />
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {francesco.map((it, i) => (
            <li key={it.src} className="fade-up" style={{ animationDelay: `${(i % 8) * 50}ms` }}>
              <div className="relative aspect-[4/5] overflow-hidden border border-sepia-200 bg-sepia-100">
                <Image
                  src={it.src}
                  alt={it.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover vintage-tone"
                />
                {it.era && (
                  <span className="absolute top-2 left-2 era-stamp">
                    {it.era}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm font-serif text-sepia-800">{it.title}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Public-domain historical archive */}
      <section className="mt-16">
        <h2 className="font-serif text-3xl text-sepia-900">
          Archivio Storico
        </h2>
        <p className="text-sepia-600 text-sm mt-1">
          Wikimedia Commons · Wellcome Collection · Library of Congress
        </p>
        <div className="rule-double text-sepia-500 mt-3" />
        <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {archive.map((it, i) => (
            <li key={it.src} className="fade-up" style={{ animationDelay: `${(i % 8) * 50}ms` }}>
              <div className="relative aspect-[4/5] overflow-hidden border border-sepia-200 bg-sepia-100">
                <Image
                  src={it.src}
                  alt={it.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover vintage-tone"
                />
                {it.era && (
                  <span className="absolute top-2 left-2 era-stamp">
                    {it.era}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm font-serif text-sepia-800">{it.title}</p>
              {it.source && (
                <p className="text-[0.65rem] uppercase tracking-widest2 text-sepia-500 mt-1">
                  {it.source}
                </p>
              )}
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
