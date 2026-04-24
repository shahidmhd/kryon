import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kryon: {
          black: '#05060a',
          ink: '#0a0c14',
          surface: '#0f1220',
          electric: '#1e7fff',
          neon: '#3d8bff',
          glow: '#5ea8ff',
          violet: '#7a5cff',
          pink: '#ff3bd4',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #1e7fff 0%, #7a5cff 50%, #ff3bd4 100%)',
        'blue-glow': 'radial-gradient(ellipse at center, rgba(30,127,255,0.35) 0%, rgba(10,12,20,0) 70%)',
        'grid-fade': 'linear-gradient(180deg, rgba(5,6,10,0) 0%, rgba(5,6,10,1) 100%)',
      },
      boxShadow: {
        'neon-sm': '0 0 10px rgba(30,127,255,0.5)',
        'neon': '0 0 24px rgba(30,127,255,0.55), 0 0 48px rgba(122,92,255,0.35)',
        'neon-lg': '0 0 48px rgba(30,127,255,0.65), 0 0 96px rgba(122,92,255,0.4)',
        'glass': 'inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 40px rgba(0,0,0,0.45)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.8s ease-in-out infinite',
        'float': 'floatY 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'marquee': 'marquee 28s linear infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 12px rgba(30,127,255,0.55))' },
          '50%': { filter: 'drop-shadow(0 0 32px rgba(122,92,255,0.85))' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};

export default config;
