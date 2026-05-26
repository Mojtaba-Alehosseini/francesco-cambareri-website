import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

const TIER_KEYS = ['online', 'inPerson', 'hybrid'] as const;

export default async function ServicesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations('services');
  const base = `/${locale}`;

  return (
    <article className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
      <header className="text-center">
        <p className="font-sans text-[0.72rem] uppercase tracking-widest2 text-sepia-500">
          {t('kicker')}
        </p>
        <h1 className="mt-3 font-serif text-5xl sm:text-6xl text-sepia-900">
          {t('title')}
        </h1>
        <p className="mt-5 font-serif italic text-xl text-burgundy-500">
          {t('lead')}
        </p>
        <div className="rule-double mx-auto text-sepia-500 mt-8" />
      </header>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {TIER_KEYS.map((tier) => {
          const features = t.raw(`tiers.${tier}.features`) as string[];
          return (
            <section
              key={tier}
              className="bg-cream-100/60 border border-sepia-300 p-6 flex flex-col"
            >
              <p className="font-sans text-[0.65rem] uppercase tracking-widest2 text-burgundy-500">
                {t(`tiers.${tier}.tag`)}
              </p>
              <h2 className="mt-2 font-serif text-3xl text-sepia-900">
                {t(`tiers.${tier}.name`)}
              </h2>
              <p className="mt-3 text-sepia-700 leading-relaxed">
                {t(`tiers.${tier}.desc`)}
              </p>

              <ul className="mt-5 space-y-2 text-sepia-700">
                {features.map((f, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span aria-hidden className="text-burgundy-500 mt-1">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex-1" />
              <p className="mt-6 font-serif text-xl text-sepia-800">
                {t(`tiers.${tier}.price`)}
              </p>
            </section>
          );
        })}
      </div>

      <div className="mt-14 text-center">
        <Link
          href={`${base}/contact`}
          className="inline-flex items-center px-6 py-3 bg-sepia-800 text-cream-50 text-xs tracking-widest2 uppercase font-sans hover:bg-burgundy-500 transition-colors"
        >
          {t('cta')}
        </Link>
      </div>
    </article>
  );
}
