'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, MessageCircle, Play } from 'lucide-react';
import { IMG } from '@/lib/assets';

const reels = [
  {
    id: 'r1',
    title: 'Neon Core unboxing',
    handle: '@driptura',
    views: '2.4M',
    likes: '180K',
    image: IMG.ringsStudio,
    tint: '#1e7fff',
    tags: ['Iron Cross Signet', 'Snake Coil'],
  },
  {
    id: 'r2',
    title: 'How I style KRYON',
    handle: '@yukibloom',
    views: '890K',
    likes: '72K',
    image: IMG.chainsPortrait,
    tint: '#3d8bff',
    tags: ['Ice Link 4mm'],
  },
  {
    id: 'r3',
    title: 'Main character mode',
    handle: '@nxvaa',
    views: '1.1M',
    likes: '96K',
    image: IMG.shadesWave,
    tint: '#7a5cff',
    tags: ['Wave Visor', 'Cross Pendant'],
  },
  {
    id: 'r4',
    title: 'Stack check · 2am',
    handle: '@pxleon',
    views: '540K',
    likes: '41K',
    image: IMG.ringsLeather,
    tint: '#0b3d91',
    tags: ['Skull Grip Ring'],
  },
  {
    id: 'r5',
    title: 'Drip before the drop',
    handle: '@velora',
    views: '1.7M',
    likes: '140K',
    image: IMG.braceletsCross,
    tint: '#ff3bd4',
    tags: ['Ice Cuff', 'Ball Link'],
  },
  {
    id: 'r6',
    title: 'On-body review',
    handle: '@kairo',
    views: '670K',
    likes: '58K',
    image: IMG.ringsBW,
    tint: '#5ea8ff',
    tags: ['Twist Bangle'],
  },
];

export default function ReelsStrip() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div className="max-w-xl">
            <div className="chip mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-kryon-pink" />
              As seen in reels
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              The feed is <span className="text-gradient">dripping</span>.
            </h2>
            <p className="mt-4 text-white/65">
              Tap in to how the KRYON crew is styling the drop. Real reels, real drip —
              no filters required.
            </p>
          </div>
          <Link href="/reels" className="btn-ghost">
            <Play size={16} />
            Open reels feed
            <ArrowRight size={16} />
          </Link>
        </div>

        <div
          className="h-scroll relative flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory -mx-6 px-6"
          style={{ scrollbarWidth: 'thin' }}
        >
          {reels.map((r) => (
            <div
              key={r.id}
              className="group relative shrink-0 w-[260px] sm:w-[280px] aspect-[9/16] rounded-[26px] overflow-hidden glass snap-start transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={r.image}
                alt={r.title}
                fill
                sizes="(max-width: 640px) 80vw, 280px"
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, ${r.tint}33 0%, transparent 30%, rgba(0,0,0,0.75) 100%)`,
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <div className="flex items-center justify-between">
                  <div className="chip !bg-black/50 !border-white/15">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    LIVE REEL
                  </div>
                  <span
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"
                    aria-hidden
                  >
                    <Play size={14} />
                  </span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex flex-wrap gap-1.5">
                    {r.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-black/50 border border-white/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="font-display text-lg font-semibold leading-tight">
                    {r.title}
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/85">
                    <div>{r.handle}</div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1">
                        <Heart size={12} /> {r.likes}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MessageCircle size={12} /> {r.views}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[26px] pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
