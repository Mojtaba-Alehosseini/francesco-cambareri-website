import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export default async function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <article className="mx-auto max-w-5xl px-5 sm:px-8 py-16">
      <header className="text-center">
        <p className="font-sans text-[0.72rem] uppercase tracking-widest2 text-sepia-500">
          {t('kicker')}
        </p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-sepia-900">
          {t('title')}
        </h1>
        <p className="mt-5 font-serif italic text-xl text-burgundy-500 max-w-prose mx-auto">
          {t('lead')}
        </p>
      </header>

      <div className="mt-14 grid lg:grid-cols-2 gap-12 items-start">
        <figure className="relative aspect-[4/5] border border-sepia-300 shadow-[0_20px_60px_-30px_rgba(85,60,31,0.6)] bg-sepia-100">
          {/* Placeholder portrait — Francesco will swap with his own photo */}
          <Image
            src="/images/francesco-ig/one-arm-pullup-late60s-early70s-1.png"
            alt="Portrait placeholder — replace with Francesco's photo"
            fill
            className="object-cover vintage-tone"
            sizes="(max-width: 1024px) 100vw, 480px"
          />
          <figcaption className="absolute bottom-3 left-3 era-stamp bg-cream-50/90">
            Portrait — TODO
          </figcaption>
        </figure>

        <div className="space-y-10">
          <section>
            <div className="rule-double text-sepia-500" />
            <h2 className="mt-4 font-serif text-3xl text-sepia-900">
              {t('section1.title')}
            </h2>
            <p className="mt-3 text-sepia-700 leading-relaxed">
              {t('section1.body')}
            </p>
          </section>
          <section>
            <div className="rule-double text-sepia-500" />
            <h2 className="mt-4 font-serif text-3xl text-sepia-900">
              {t('section2.title')}
            </h2>
            <p className="mt-3 text-sepia-700 leading-relaxed">
              {t('section2.body')}
            </p>
          </section>
          <section>
            <div className="rule-double text-sepia-500" />
            <h2 className="mt-4 font-serif text-3xl text-sepia-900">
              {t('section3.title')}
            </h2>
            <p className="mt-3 text-sepia-700 leading-relaxed">
              {t('section3.body')}
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
