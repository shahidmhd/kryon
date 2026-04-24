'use client';
import { useState } from 'react';
import Link from 'next/link';
import HomeBanner from '@/components/home/HomeBanner';
import Section from '@/components/Section';
import ReelsStrip from '@/components/ReelsStrip';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { products, type Product } from '@/lib/products';
import { ArrowRight, Gem, Headphones, ShieldCheck, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote:
      '"Honestly the only chain I wear now. It actually looks like it costs 3x what I paid."',
    handle: '@yukibloom · 420K',
    color: '#1e7fff',
  },
  {
    quote:
      '"The Pulse Visor shades are stupid good. Got 14 DMs asking where I got them the first day."',
    handle: '@nxvaa · 1.1M',
    color: '#7a5cff',
  },
  {
    quote:
      '"Finally a brand that ships on time AND looks fire. KRYON is the move."',
    handle: '@pxleon · 210K',
    color: '#ff3bd4',
  },
];

const features = [
  {
    icon: Gem,
    title: 'Lifetime Glow',
    desc: 'PVD-bonded finish that refuses to fade.',
  },
  {
    icon: ShieldCheck,
    title: 'Forever Warranty',
    desc: 'If it breaks, we fix it. No questions.',
  },
  {
    icon: Sparkles,
    title: 'Hand Finished',
    desc: 'Every piece is polished & QC’d by humans.',
  },
  {
    icon: Headphones,
    title: 'DM Concierge',
    desc: '24/7 styling support on Instagram.',
  },
];

export default function HomePage() {
  const [active, setActive] = useState<Product | null>(null);
  const featured = products.slice(0, 4);

  return (
    <>
      <HomeBanner />

      <ReelsStrip />

      <Section
        eyebrow="Signature Drops"
        title="Accessories engineered like art."
        subtitle="Four categories. One obsession: the details. Tap any piece to preview — every KRYON product is numbered, finished by hand, and ready for its close-up."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={setActive} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/shop" className="btn-ghost">
            See all {products.length} pieces
            <ArrowRight size={16} />
          </Link>
        </div>
      </Section>

      <Section containerClassName="!max-w-none !px-0" className="!py-0 md:!py-0">
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-10 opacity-60 -z-10"
                style={{
                  background:
                    'radial-gradient(circle at 30% 30%, rgba(30,127,255,0.35), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,59,212,0.2), transparent 60%)',
                }}
              />
              <div className="glass-strong rounded-[32px] p-6 md:p-10">
                <div className="chip mb-6">
                  <Sparkles size={12} className="text-kryon-glow" />
                  Neon Core Collection
                </div>
                <div className="font-display text-[18vw] sm:text-[9rem] leading-[0.9] font-bold tracking-tight">
                  <span className="text-gradient">DRIP</span>
                  <br />
                  <span className="text-white">REDEFINED</span>
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm text-white/60">
                  <div className="w-10 h-px bg-white/20" />
                  <span>500 limited units · SS26</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight">
                Forged in the glow of <span className="text-electric">2 AM</span>,
                worn in the flash of every feed.
              </h3>
              <p className="mt-5 text-white/70 leading-relaxed">
                KRYON isn&apos;t jewelry. It&apos;s hardware for your main-character
                arc. We obsess over the millimeter — the chamfer, the glow, the way
                the light lands on your collarbone at a 45-degree angle.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f.title} className="glass rounded-2xl p-5">
                    <div className="w-10 h-10 rounded-full bg-neon-gradient flex items-center justify-center">
                      <f.icon size={16} />
                    </div>
                    <div className="mt-3 font-display font-semibold">{f.title}</div>
                    <div className="text-sm text-white/60 mt-1">{f.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn-neon">
                  The KRYON story
                  <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Talk to us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Drip Crew"
        title="Tagged. Worn. Loved."
        subtitle="Influencers, creators, and the quiet kids in the back row — see what the drip crew is saying."
      >
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative glass rounded-3xl p-6 overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-24 -right-24 w-52 h-52 rounded-full opacity-30"
                style={{ background: t.color }}
              />
              <div className="text-4xl leading-none text-white/30 font-display">“</div>
              <p className="mt-2 text-white/85 leading-relaxed">{t.quote}</p>
              <div className="mt-6 text-sm text-white/55">{t.handle}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!pb-32">
        <div className="relative overflow-hidden rounded-[32px] glass-strong p-10 md:p-16">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(600px 400px at 10% 20%, rgba(30,127,255,0.3), transparent 60%), radial-gradient(500px 300px at 90% 90%, rgba(255,59,212,0.2), transparent 60%)',
            }}
          />
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="chip mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-kryon-pink" />
                Next drop · Friday 7pm
              </div>
              <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight">
                Be first on the <span className="text-gradient">Neon Core</span> drop.
              </h3>
              <p className="mt-3 text-white/65 max-w-lg">
                Drop alerts by SMS or email. No spam — just the link, 12 hours before it
                goes public.
              </p>
            </div>
            <form className="flex items-center gap-2 glass rounded-full pl-5 pr-1 py-1 w-full md:w-[420px]">
              <input
                type="email"
                placeholder="you@drip.com"
                className="bg-transparent flex-1 outline-none text-sm placeholder:text-white/40 py-3"
              />
              <button className="btn-neon !py-2.5 !px-5">
                Get alerts
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </Section>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}
