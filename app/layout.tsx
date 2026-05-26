import type { Metadata } from 'next';
import { Playfair_Display, Lora, Inter } from 'next/font/google';
import './globals.css';

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-display',
});

const body = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const metadata: Metadata = {
  title: 'Francesco Cambareri — Calisthenics Personal Trainer',
  description:
    'Francesco Cambareri, Personal Trainer di Calistenia. Allenamento a corpo libero nella tradizione della cultura fisica, dal 1880 a oggi.',
  icons: { icon: `${basePath}/brand/favicon-source.png` },
};

/**
 * Root layout — provides <html>/<body> shell + global fonts.
 * The locale-aware visual chrome (header, footer, provider) lives in
 * app/[locale]/layout.tsx as a nested layout.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${display.variable} ${body.variable} ${sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
