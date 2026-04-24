'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, PlayCircle, Star } from 'lucide-react';
import { useEffect } from 'react';
import { IMG } from '@/lib/assets';

export default function Hero() {
  // Lightweight mouse parallax (CPU-only, no WebGL)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  const heroTx = useTransform(sx, (v) => `${v * -8}px`);
  const heroTy = useTransform(sy, (v) => `${v * -8}px`);
  const accentTx = useTransform(sx, (v) => `${v * 14}px`);
  const accentTy = useTransform(sy, (v) => `${v * 14}px`);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mx, my]);

  return (
    <section className="relative overflow-hidden">
      {/* Grid background */}
      <div aria-hidden className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8 pt-4 md:pt-8 pb-0">
        {/* Editorial split layout */}
        <div className="relative grid lg:grid-cols-[1.05fr_1fr] gap-6 lg:gap-8 min-h-[calc(100vh-6rem)]">
          {/* LEFT — large campaign image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-[28px] overflow-hidden glass-strong aspect-[4/5] lg:aspect-auto lg:min-h-[640px]"
          >
            <motion.div
              style={{ x: heroTx, y: heroTy }}
              className="absolute inset-0 scale-[1.06]"
            >
              <Image
                src={IMG.trio}
                alt="KRYON campaign — three models wearing the Neon Core drop"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                className="object-cover"
              />
            </motion.div>

            {/* overlays */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/70"
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-40 mix-blend-overlay"
              style={{
                background:
                  'radial-gradient(900px 600px at 20% 0%, rgba(30,127,255,0.4), transparent 60%)',
              }}
            />

            {/* top meta */}
            <div className="absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 flex items-center justify-between">
              <div className="chip !bg-black/50 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-kryon-electric animate-pulse shadow-neon-sm" />
                SS26 · Neon Core
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/80">
                <span>Issue</span>
                <span className="font-display text-white">01</span>
              </div>
            </div>

            {/* bottom — campaign label + stat row */}
            <div className="absolute left-0 right-0 bottom-0 p-5 md:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.35em] text-white/65">
                    Campaign · Vol.01
                  </div>
                  <div className="mt-2 font-display text-xl md:text-2xl font-semibold">
                    Three looks. One drop.
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-white/80">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-kryon-glow" fill="currentColor" />
                    <span>4.9 · 2.1K</span>
                  </div>
                  <div className="hidden sm:block h-4 w-px bg-white/20" />
                  <div>120K+ drip crew</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — giant wordmark + CTAs */}
          <div className="relative flex flex-col justify-between py-8 md:py-10">
            {/* Halo */}
            <motion.div
              aria-hidden
              style={{ x: accentTx, y: accentTy }}
              className="absolute -top-10 -left-10 w-[420px] h-[420px] rounded-full blur-3xl opacity-60 pointer-events-none"
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    'radial-gradient(circle, rgba(30,127,255,0.5), rgba(122,92,255,0.25) 40%, transparent 70%)',
                }}
              />
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                className="chip"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-kryon-pink animate-pulse shadow-neon-sm" />
                Drop Friday · 7pm
              </motion.div>

              <div className="mt-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="relative max-w-lg"
                >
                  <Image
                    src={IMG.logo}
                    alt="KRYON"
                    width={900}
                    height={360}
                    priority
                    className="w-full h-auto object-contain drop-shadow-[0_0_32px_rgba(30,127,255,0.55)]"
                  />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.32, duration: 0.8 }}
                  className="mt-4 font-display font-bold text-[13vw] sm:text-6xl md:text-7xl leading-[0.95] tracking-tight"
                >
                  <span className="block text-white/95">Upgrade</span>
                  <span className="block text-gradient">your drip.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.44, duration: 0.8 }}
                  className="mt-6 max-w-lg text-base md:text-lg text-white/70 leading-relaxed"
                >
                  Luxury accessories, engineered like art. Silver rings, iced chains,
                  sculpted shades, cuff bracelets — built for a generation that
                  doesn&apos;t blend in.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.8 }}
                  className="mt-8 flex flex-wrap items-center gap-3"
                >
                  <Link href="/shop" className="btn-neon" data-cursor="hover">
                    Shop the drop
                    <ArrowRight size={18} />
                  </Link>
                  <Link href="/reels" className="btn-ghost" data-cursor="hover">
                    <PlayCircle size={18} />
                    View reels
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Thumbnail rail */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="relative mt-10 lg:mt-6"
            >
              <div className="text-[10px] uppercase tracking-[0.35em] text-white/45 mb-3">
                Inside the drop
              </div>
              <div className="flex gap-3">
                {[
                  { src: IMG.ringsStudio, label: 'Rings' },
                  { src: IMG.chainsPortrait, label: 'Chains' },
                  { src: IMG.shadesWave, label: 'Shades' },
                  { src: IMG.braceletsCross, label: 'Bracelets' },
                ].map((t, i) => (
                  <Link
                    key={t.label}
                    href="/shop"
                    data-cursor="hover"
                    className="group relative flex-1 aspect-[3/4] rounded-2xl overflow-hidden glass"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <Image
                      src={t.src}
                      alt={t.label}
                      fill
                      sizes="(max-width: 640px) 25vw, 12vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0"
                    />
                    <div className="absolute bottom-2 left-2 right-2 font-display text-[11px] uppercase tracking-[0.25em] text-white">
                      {t.label}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 mt-12 border-y border-white/10 bg-black/30 backdrop-blur-md overflow-hidden">
        <div className="marquee-track py-4 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-10 pr-10">
              {[
                'NEON CORE · SS26',
                '★',
                'FREE WORLDWIDE SHIPPING',
                '★',
                'LIMITED · 500 UNITS',
                '★',
                'FORGED FOR THE BOLD',
                '★',
                'UPGRADE YOUR DRIP',
                '★',
              ].map((t, i) => (
                <span
                  key={i}
                  className="font-display text-lg tracking-[0.3em] text-white/80"
                >
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
