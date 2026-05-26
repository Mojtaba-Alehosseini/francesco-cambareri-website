/**
 * Prepend the deploy-time basePath to a static asset URL.
 *
 * Next.js automatically applies basePath to `_next/*` files (JS, CSS, fonts)
 * and to `<Link>` href values — but NOT to `<Image>` src when
 * `images.unoptimized` is true. For static export to GitHub Pages (where the
 * site lives at `/francesco-cambareri-website/`), we need to prepend the
 * basePath manually for every `/images/...` reference.
 *
 * Usage:
 *   import { asset } from '@/lib/asset';
 *   <Image src={asset('/images/foo.png')} ... />
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  if (!path.startsWith('/')) return path; // pass-through for absolute http(s)
  if (basePath && path.startsWith(basePath)) return path; // already prefixed
  return `${basePath}${path}`;
}
