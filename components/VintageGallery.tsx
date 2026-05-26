'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { galleryItems, type GalleryCategory } from '../lib/gallery';

const ALL_CATS: (GalleryCategory | 'all')[] = [
  'all',
  'francesco',
  'strongmen',
  'gymnastics',
  'indian-clubs',
  'outdoor',
  'drawings',
  'magazines',
];

export default function VintageGallery() {
  const t = useTranslations('home.filters');
  const [filter, setFilter] = useState<(typeof ALL_CATS)[number]>('all');
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () =>
      filter === 'all'
        ? galleryItems
        : galleryItems.filter((g) => g.category === filter),
    [filter]
  );

  return (
    <section
      aria-labelledby="gallery-heading"
      className="mx-auto max-w-6xl px-5 sm:px-8 py-16"
    >
      {/* Filter bar */}
      <div
        role="toolbar"
        aria-label="Gallery filters"
        className="mb-10 flex flex-wrap gap-2 justify-center"
      >
        {ALL_CATS.map((c) => {
          const isActive = filter === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`px-3 py-1.5 text-[0.7rem] tracking-widest2 uppercase font-sans transition-colors border ${
                isActive
                  ? 'bg-sepia-700 text-cream-50 border-sepia-700'
                  : 'border-sepia-300 text-sepia-700 hover:border-sepia-700'
              }`}
              aria-pressed={isActive}
            >
              {/* fallback to key if translation missing */}
              {(() => {
                try {
                  return t(c);
                } catch {
                  return c;
                }
              })()}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        role="list"
      >
        {items.map((item, i) => (
          <li
            key={`${item.src}-${i}`}
            className="group fade-up"
            style={{ animationDelay: `${(i % 6) * 60}ms` }}
          >
            <button
              type="button"
              onClick={() => setActive(galleryItems.indexOf(item))}
              className="block w-full text-left"
              aria-label={`${item.title} — ${item.era ?? ''}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-sepia-100 border border-sepia-200">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover vintage-tone transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {item.era && (
                  <span className="absolute top-3 left-3 era-stamp">
                    {item.era}
                  </span>
                )}
              </div>
              <div className="mt-3">
                <h3 className="font-serif text-lg text-sepia-800 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-sepia-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {active !== null && (
        <Modal item={galleryItems[active]} onClose={() => setActive(null)} />
      )}
    </section>
  );
}

function Modal({
  item,
  onClose,
}: {
  item: (typeof galleryItems)[number];
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full bg-cream-50 border border-sepia-300 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-2 right-3 text-2xl text-sepia-600 hover:text-burgundy-500 z-10"
        >
          ×
        </button>
        <div className="relative w-full aspect-[4/3] bg-sepia-100">
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-contain vintage-tone"
          />
        </div>
        <div className="p-6">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="font-serif text-2xl text-sepia-800">{item.title}</h3>
            {item.era && <span className="era-stamp">{item.era}</span>}
          </div>
          <p className="mt-3 text-sepia-700 leading-relaxed">
            {item.description}
          </p>
          {item.source && (
            <p className="mt-4 text-xs uppercase tracking-widest2 text-sepia-500">
              {item.source}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
