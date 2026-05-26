import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sepia & cream vintage palette
        cream: {
          50:  '#FBF7EE',
          100: '#F6EFDF',
          200: '#EDE2C8',
          300: '#E0D0AC',
        },
        sepia: {
          50:  '#F1E6D0',
          100: '#E2CDA3',
          200: '#C9A973',
          300: '#A98551',
          400: '#8B6939',
          500: '#6E5028',
          600: '#553C1F',
          700: '#3E2B16',
          800: '#2A1D0E',
          900: '#1A1208',
        },
        burgundy: {
          500: '#7A1F2C',
          600: '#5E1722',
        },
        ink: '#1A1208',
      },
      fontFamily: {
        // Loaded via next/font in app/layout.tsx
        serif: ['var(--font-display)', 'Playfair Display', 'Georgia', 'serif'],
        body:  ['var(--font-body)', 'Lora', 'Georgia', 'serif'],
        sans:  ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'paper-grain': "url('/textures/paper.svg')",
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      maxWidth: {
        prose: '70ch',
      },
    },
  },
  plugins: [],
};

export default config;
