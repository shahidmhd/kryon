import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kryon.style'),
  title: {
    default: 'KRYON — Upgrade Your Drip',
    template: '%s · KRYON',
  },
  description:
    'KRYON is a luxury, futuristic streetwear accessories brand — rings, chains, shades, and bracelets engineered for the next generation. Upgrade Your Drip.',
  keywords: [
    'KRYON',
    'fashion accessories',
    'luxury rings',
    'neon chains',
    'streetwear shades',
    'Gen-Z jewelry',
    'bracelets',
    'upgrade your drip',
  ],
  authors: [{ name: 'KRYON' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kryon.style',
    siteName: 'KRYON',
    title: 'KRYON — Upgrade Your Drip',
    description:
      'Futuristic luxury accessories. Rings. Chains. Shades. Bracelets. Built for the bold.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'KRYON — Upgrade Your Drip',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KRYON — Upgrade Your Drip',
    description: 'Futuristic luxury accessories for the bold.',
    images: ['/og.png'],
    creator: '@kryon',
  },
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${BASE_PATH}/favicon/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
      { url: `${BASE_PATH}/favicon.svg`, type: 'image/svg+xml' },
    ],
    shortcut: `${BASE_PATH}/favicon/favicon.ico`,
    apple: `${BASE_PATH}/favicon/apple-touch-icon.png`,
    other: [
      { rel: 'mask-icon', url: `${BASE_PATH}/favicon.svg`, color: '#1e7fff' },
      { rel: 'manifest', url: `${BASE_PATH}/favicon/site.webmanifest` },
    ],
  },
  manifest: `${BASE_PATH}/favicon/site.webmanifest`,
};

export const viewport: Viewport = {
  themeColor: '#05060a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} dark`}>
      <body className="min-h-screen bg-kryon-black text-white font-sans antialiased selection:bg-kryon-electric/40">
        <div
          aria-hidden
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(1200px 800px at 80% -10%, rgba(30,127,255,0.18), transparent 60%), radial-gradient(900px 600px at -10% 30%, rgba(122,92,255,0.14), transparent 60%)',
          }}
        />
        <Navbar />
        <main className="relative pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
