'use client';
import Image from 'next/image';
import {
  ChevronUp,
  Heart,
  MessageCircle,
  Send,
  MoreHorizontal,
  Music2,
  Play,
  Volume2,
  VolumeX,
  ShoppingBag,
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { IMG } from '@/lib/assets';

type Reel = {
  id: string;
  handle: string;
  avatar: string;
  caption: string;
  song: string;
  likes: string;
  comments: string;
  shares: string;
  image: string;
  tint: string;
  tags: { name: string; price: number }[];
};

const reels: Reel[] = [
  {
    id: 'r1',
    handle: '@driptura',
    avatar: 'D',
    caption: 'the neon core unboxing hit different 💙 link in bio · #kryon',
    song: 'original · driptura',
    likes: '182K',
    comments: '1,204',
    shares: '3,850',
    image: IMG.ringsStudio,
    tint: '#1e7fff',
    tags: [
      { name: 'Iron Cross Signet', price: 129 },
      { name: 'Snake Coil Ring', price: 119 },
    ],
  },
  {
    id: 'r2',
    handle: '@yukibloom',
    avatar: 'Y',
    caption: 'how i style one chain three ways ✨',
    song: 'slowed & reverb · azure',
    likes: '72K',
    comments: '812',
    shares: '1,290',
    image: IMG.chainsPortrait,
    tint: '#3d8bff',
    tags: [{ name: 'Ice Link 4mm', price: 189 }],
  },
  {
    id: 'r3',
    handle: '@nxvaa',
    avatar: 'N',
    caption: 'main character mode: unlocked 🔓',
    song: 'neon nights · prod. kai',
    likes: '96K',
    comments: '2,041',
    shares: '4,120',
    image: IMG.shadesWave,
    tint: '#7a5cff',
    tags: [
      { name: 'Wave Visor Shades', price: 219 },
      { name: 'Cross Pendant Chain', price: 149 },
    ],
  },
  {
    id: 'r4',
    handle: '@pxleon',
    avatar: 'P',
    caption: 'stack check at 2am — this is the one 👀',
    song: 'pixel love · loop',
    likes: '41K',
    comments: '430',
    shares: '880',
    image: IMG.ringsLeather,
    tint: '#0b3d91',
    tags: [{ name: 'Skull Grip Ring', price: 159 }],
  },
  {
    id: 'r5',
    handle: '@velora',
    avatar: 'V',
    caption: 'drip before the drop — Friday 7pm ⚡',
    song: 'glow up · velora',
    likes: '140K',
    comments: '3,120',
    shares: '6,400',
    image: IMG.braceletsCross,
    tint: '#ff3bd4',
    tags: [
      { name: 'Ice Cuff', price: 139 },
      { name: 'Ball Link Bracelet', price: 119 },
    ],
  },
];

function ReelCard({ reel, index }: { reel: Reel; index: number }) {
  const [liked, setLiked] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  return (
    <section
      data-reel-id={reel.id}
      className="relative h-[calc(100vh-5rem)] w-full flex items-center justify-center px-3"
    >
      <div className="relative w-full max-w-[430px] h-full max-h-[85vh] rounded-[36px] overflow-hidden glass-strong">
        <Image
          src={reel.image}
          alt={reel.caption}
          fill
          sizes="(max-width: 640px) 100vw, 430px"
          priority={index < 2}
          loading={index < 2 ? 'eager' : 'lazy'}
          className="object-cover"
        />

        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${reel.tint}30 0%, transparent 25%, rgba(0,0,0,0.75) 100%)`,
          }}
        />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10">
          <div className="text-xs uppercase tracking-[0.3em] text-white/85">
            Reels · {index + 1}/{reels.length}
          </div>
          <button
            aria-label="More"
            className="w-9 h-9 rounded-full bg-black/50 flex items-center justify-center"
          >
            <MoreHorizontal size={16} />
          </button>
        </div>

        {/* Center play toggle */}
        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? 'Pause' : 'Play'}
          className="absolute inset-0 z-10 flex items-center justify-center focus:outline-none"
        >
          {!playing && (
            <span className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center border border-white/25">
              <Play size={28} />
            </span>
          )}
        </button>

        {/* Mute toggle */}
        <button
          type="button"
          onClick={() => setMuted((v) => !v)}
          aria-label={muted ? 'Unmute' : 'Mute'}
          className="absolute top-16 right-4 z-20 w-9 h-9 rounded-full bg-black/50 flex items-center justify-center"
        >
          {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>

        {/* Right rail */}
        <div className="absolute right-3 bottom-28 z-20 flex flex-col items-center gap-5 text-xs text-white">
          <button
            onClick={() => setLiked((v) => !v)}
            className="flex flex-col items-center gap-1"
          >
            <span
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200 ${
                liked
                  ? 'bg-kryon-pink text-white'
                  : 'bg-black/55 border border-white/10'
              }`}
            >
              <Heart size={18} fill={liked ? '#fff' : 'none'} />
            </span>
            <span>{reel.likes}</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <span className="w-11 h-11 rounded-full bg-black/55 border border-white/10 flex items-center justify-center">
              <MessageCircle size={18} />
            </span>
            <span>{reel.comments}</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <span className="w-11 h-11 rounded-full bg-black/55 border border-white/10 flex items-center justify-center">
              <Send size={18} />
            </span>
            <span>{reel.shares}</span>
          </button>
          <Link href="/shop" className="flex flex-col items-center gap-1">
            <span className="w-11 h-11 rounded-full bg-neon-gradient flex items-center justify-center">
              <ShoppingBag size={18} />
            </span>
            <span>Shop</span>
          </Link>
        </div>

        {/* Bottom info */}
        <div className="absolute left-0 right-0 bottom-0 z-20 p-4 pr-20 space-y-3">
          <div className="flex flex-wrap gap-2">
            {reel.tags.map((t) => (
              <Link
                href="/shop"
                key={t.name}
                className="chip !bg-black/60 hover:bg-white/10 transition-colors"
              >
                <ShoppingBag size={10} />
                {t.name}
                <span className="text-kryon-glow">₹{t.price}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-neon-gradient flex items-center justify-center font-display font-bold">
              {reel.avatar}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <div className="font-semibold">{reel.handle}</div>
                <button className="text-xs px-2.5 py-0.5 rounded-full border border-white/30 hover:bg-white/10">
                  Follow
                </button>
              </div>
              <div className="text-[11px] text-white/80 inline-flex items-center gap-1.5 mt-0.5">
                <Music2 size={10} />
                {reel.song}
              </div>
            </div>
          </div>

          <p className="text-sm text-white/95 leading-snug max-w-[90%]">
            {reel.caption}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ReelsFeed() {
  return (
    <div className="relative -mt-20">
      <div className="pt-20">
        <div className="reel-snap h-[calc(100vh)] overflow-y-auto">
          {reels.map((r, i) => (
            <ReelCard key={r.id} reel={r} index={i} />
          ))}
          <section className="h-[calc(100vh-5rem)] flex items-center justify-center">
            <div className="text-center max-w-md px-6">
              <div className="chip mx-auto mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-kryon-electric" />
                End of reel
              </div>
              <h3 className="font-display text-3xl font-bold">More drip incoming.</h3>
              <p className="mt-3 text-white/65">
                New reels drop every Friday. Follow us for first access.
              </p>
              <Link href="/shop" className="btn-neon mt-6">
                Shop the reels
              </Link>
            </div>
          </section>
        </div>

        <div className="pointer-events-none fixed bottom-6 left-1/2 -translate-x-1/2 z-40 glass px-3 py-2 rounded-full text-xs text-white/75 flex items-center gap-2">
          <ChevronUp size={14} />
          Swipe up for next
        </div>
      </div>
    </div>
  );
}
