import { getTranslations } from 'next-intl/server';
import ContactForm from '../../../components/ContactForm';

export default async function ContactPage() {
  const t = await getTranslations('contact');

  return (
    <article className="mx-auto max-w-5xl px-5 sm:px-8 py-16">
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

      <div className="mt-12 grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <aside className="lg:col-span-2 bg-cream-100/60 border border-sepia-300 p-6">
          <h2 className="font-serif text-2xl text-sepia-900">
            {t('directContact')}
          </h2>
          <div className="rule-double text-sepia-500 mt-3" />
          <dl className="mt-6 space-y-5 text-sepia-700">
            <div>
              <dt className="text-[0.7rem] uppercase tracking-widest2 text-sepia-500 font-sans">
                {t('emailLabel')}
              </dt>
              <dd className="mt-1 font-serif text-lg">
                <a
                  href={`mailto:${t('placeholderValues.email')}`}
                  className="hover:text-burgundy-500 underline underline-offset-4"
                >
                  {t('placeholderValues.email')}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-widest2 text-sepia-500 font-sans">
                {t('instagramLabel')}
              </dt>
              <dd className="mt-1 font-serif text-lg">
                <a
                  href={`https://instagram.com/${t(
                    'placeholderValues.instagram'
                  ).replace('@', '')}`}
                  className="hover:text-burgundy-500 underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('placeholderValues.instagram')}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-widest2 text-sepia-500 font-sans">
                {t('locationLabel')}
              </dt>
              <dd className="mt-1 font-serif text-lg">
                {t('placeholderValues.location')}
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </article>
  );
}
