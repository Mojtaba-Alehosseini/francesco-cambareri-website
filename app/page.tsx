import { defaultLocale } from '../i18n';

/**
 * Root page — sends visitors to the default locale.
 *
 * For static export we can't use Next.js's server-side `redirect()` (no
 * server at request time), so we emit a meta-refresh + a JS fallback +
 * a visible link. All three trigger within ~0 ms in practice.
 */
export default function RootPage() {
  const repo = 'francesco-cambareri-website';
  const isPages = process.env.GITHUB_PAGES === 'true';
  const target = `${isPages ? `/${repo}` : ''}/${defaultLocale}/`;

  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(target)});`,
        }}
      />
      <div
        style={{
          fontFamily: 'Georgia, serif',
          background: '#FBF7EE',
          color: '#2A1D0E',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.1rem',
        }}
      >
        <a
          href={target}
          style={{ color: '#7A1F2C', textDecoration: 'underline' }}
        >
          Francesco Cambareri — entra
        </a>
      </div>
    </>
  );
}
