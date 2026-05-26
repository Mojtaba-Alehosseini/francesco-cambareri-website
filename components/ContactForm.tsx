'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact.form');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle'
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // Placeholder: Francesco can wire this up to Formspree, Resend, or an API route.
    // For now we simulate a successful send.
    await new Promise((r) => setTimeout(r, 700));
    setStatus('sent');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
      aria-label="Contact form"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <label className="block">
          <span className="text-[0.7rem] uppercase tracking-widest2 text-sepia-600 font-sans">
            {t('name')}
          </span>
          <input
            type="text"
            name="name"
            required
            placeholder={t('placeholders.name')}
            className="mt-1 w-full bg-cream-50 border border-sepia-300 px-3 py-2 font-serif text-sepia-800 focus:border-sepia-700 outline-none"
          />
        </label>
        <label className="block">
          <span className="text-[0.7rem] uppercase tracking-widest2 text-sepia-600 font-sans">
            {t('email')}
          </span>
          <input
            type="email"
            name="email"
            required
            placeholder={t('placeholders.email')}
            className="mt-1 w-full bg-cream-50 border border-sepia-300 px-3 py-2 font-serif text-sepia-800 focus:border-sepia-700 outline-none"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-[0.7rem] uppercase tracking-widest2 text-sepia-600 font-sans">
          {t('subject')}
        </span>
        <input
          type="text"
          name="subject"
          placeholder={t('placeholders.subject')}
          className="mt-1 w-full bg-cream-50 border border-sepia-300 px-3 py-2 font-serif text-sepia-800 focus:border-sepia-700 outline-none"
        />
      </label>

      <label className="block">
        <span className="text-[0.7rem] uppercase tracking-widest2 text-sepia-600 font-sans">
          {t('message')}
        </span>
        <textarea
          name="message"
          rows={6}
          required
          placeholder={t('placeholders.message')}
          className="mt-1 w-full bg-cream-50 border border-sepia-300 px-3 py-2 font-serif text-sepia-800 focus:border-sepia-700 outline-none resize-y"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center px-6 py-3 bg-sepia-800 text-cream-50 text-xs tracking-widest2 uppercase font-sans hover:bg-burgundy-500 transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? t('sending') : t('send')}
      </button>

      {status === 'sent' && (
        <p
          role="status"
          className="text-sm text-burgundy-500 italic font-serif"
        >
          ✓
        </p>
      )}
    </form>
  );
}
