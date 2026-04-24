import type { Metadata } from 'next';
import ShopContent from './ShopContent';

export const metadata: Metadata = {
  title: 'Shop — Rings, Chains, Shades, Bracelets',
  description:
    'Shop the full KRYON collection. Rings, chains, shades and bracelets — hand-finished, lifetime warranty, worldwide shipping.',
};

export default function ShopPage() {
  return <ShopContent />;
}
