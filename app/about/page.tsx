import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About — The KRYON Story',
  description:
    'KRYON is a futuristic luxury accessories brand forged for a generation that refuses to blend in. Learn who we are, what we believe, and how every piece is made.',
};

export default function AboutPage() {
  return <AboutContent />;
}
