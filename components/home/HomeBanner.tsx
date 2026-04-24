'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomeBanner() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-neutral-950 to-neutral-900">
      {/* Atmospheric glow — static CSS gradients, no animation */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 600px at 50% 40%, rgba(30,127,255,0.18), transparent 65%), radial-gradient(700px 500px at 80% 90%, rgba(122,92,255,0.14), transparent 60%)',
        }}
      />
      <div aria-hidden className="absolute inset-0 grid-bg opacity-20" />

      {/* Image stack — layered with z-index, no motion */}
      <div className="absolute inset-0">
        {/* bg1 — left, behind */}
        <div className="absolute inset-0 z-10 flex items-end justify-start pointer-events-none">
          <div className="relative w-[62vw] max-w-[520px] aspect-[3/4] -translate-x-[8%] md:-translate-x-[6%] translate-y-[4%] opacity-80 md:opacity-90 animate-fade-up">
            <Image
              src="/images/bg2.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 62vw, 520px"
              className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

        {/* bg2 — center, main focus */}
        <div className="absolute inset-0 z-20 flex items-end justify-center pointer-events-none">
          <div className="relative w-[75vw] max-w-[620px] aspect-[3/4] translate-y-[2%] animate-fade-up animate-delay-100">
            <Image
              src="/images/bg1.png"
              alt="KRYON model with styled rings"
              fill
              priority
              sizes="(max-width: 768px) 75vw, 620px"
              className="object-contain drop-shadow-[0_40px_80px_rgba(30,127,255,0.25)]"
            />
          </div>
        </div>

        {/* bg3 — right, foreground */}
        <div className="absolute inset-0 z-30 flex items-end justify-end pointer-events-none">
          <div className="relative w-[62vw] max-w-[520px] aspect-[3/4] translate-x-[8%] md:translate-x-[6%] translate-y-[3%] animate-fade-up animate-delay-200">
            <Image
              src="/images/bg3.png"
              alt="KRYON model in leather with shades"
              fill
              priority
              sizes="(max-width: 768px) 62vw, 520px"
              className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade so overlay text reads */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 z-30"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* Overlay text */}
      <div className="relative z-40 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="chip animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-kryon-electric" />
          SS26 · Neon Core
        </div>

        <h1 className="mt-5 font-display font-bold leading-[0.95] tracking-tight text-[14vw] sm:text-7xl md:text-8xl lg:text-[8.5rem] animate-fade-up animate-delay-100">
          <span className="block text-white/95">Redefine</span>
          <span className="block text-gradient">Your Style</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-white/75 max-w-xl animate-fade-up animate-delay-200">
          Modern. Bold. Unstoppable.
        </p>

        <div className="mt-10 animate-fade-up animate-delay-300">
          <Link
            href="/shop"
            className="btn-neon text-base md:text-lg !px-7 !py-3.5"
          >
            Explore Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
