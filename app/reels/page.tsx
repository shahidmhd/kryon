import type { Metadata } from 'next';
import ReelsFeed from './ReelsFeed';

export const metadata: Metadata = {
  title: 'Reels — Upgrade Your Drip',
  description:
    'Scroll the KRYON reels feed. Real crew, real drip, real drops. Tap any product tag to shop the look.',
  openGraph: {
    title: 'KRYON Reels',
    description:
      'Vertical reels feed from the KRYON crew. Tap a tag — shop the look.',
  },
};

export default function ReelsPage() {
  return <ReelsFeed />;
}
