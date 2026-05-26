import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

// GitHub Pages serves from /<repo-name>/ subpath.
const repo = 'francesco-cambareri-website';
const isPages = process.env.GITHUB_PAGES === 'true';
const basePath = isPages ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — works on GitHub Pages, no server required.
  output: 'export',
  // GitHub Pages can't optimize images at request time.
  images: { unoptimized: true },
  // basePath/assetPrefix apply to _next/* assets and Link href automatically.
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  // Static export prefers trailing slashes so /it/ resolves to /it/index.html.
  trailingSlash: true,
  // Bake basePath into the client bundle so our asset() helper can use it.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default withNextIntl(nextConfig);
