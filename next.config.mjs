import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

// GitHub Pages serves from /<repo-name>/ subpath.
const repo = 'francesco-cambareri-website';
const isPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — works on GitHub Pages, no server required.
  output: 'export',
  // GitHub Pages can't optimize images at request time.
  images: { unoptimized: true },
  // When deployed to <user>.github.io/<repo>/, all assets need the prefix.
  basePath: isPages ? `/${repo}` : undefined,
  assetPrefix: isPages ? `/${repo}/` : undefined,
  // Static export prefers trailing slashes so /it/ resolves to /it/index.html.
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
