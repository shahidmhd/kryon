import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/Section';
import { ArrowRight, Award, Globe2, Recycle, Sparkles } from 'lucide-react';
import { IMG } from '@/lib/assets';

const timeline = [
  {
    year: '2023',
    title: 'A late night, a torch, a sketchbook',
    desc: 'KRYON starts as a one-off chain forged for a friend. It hits the feed. It goes viral overnight.',
  },
  {
    year: '2024',
    title: 'The first 500 units',
    desc: 'We partner with a boutique atelier in Lisbon. Every piece is hand-finished. We sell out in 48 hours.',
  },
  {
    year: '2025',
    title: 'The Neon Core',
    desc: 'Our signature glow-in-light finish launches. Editorial features in Hypebeast, Highsnobiety, i-D.',
  },
  {
    year: '2026',
    title: 'Global drip crew',
    desc: '120K+ KRYON customers worldwide. Our reels feed becomes its own community.',
  },
];

const values = [
  {
    icon: Sparkles,
    title: 'Obsession with detail',
    desc: 'Every chamfer, every polish line, every link — engineered to catch light at the right angle.',
  },
  {
    icon: Award,
    title: 'Made, not manufactured',
    desc: 'Small-batch runs, hand-finished by humans who actually care. No factory shortcuts.',
  },
  {
    icon: Recycle,
    title: 'Forever pieces',
    desc: 'Lifetime warranty. If it breaks, we fix it. Landfills are not our vibe.',
  },
  {
    icon: Globe2,
    title: 'For the global drip crew',
    desc: 'Shipped to 60+ countries. Priced for the feed, designed for the main character.',
  },
];

export default function AboutContent() {
  return (
    <>
      <Section className="!pt-16 md:!pt-24 !pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="chip mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-kryon-electric" />
              About KRYON
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
              Built in the <span className="text-gradient">glow</span>, worn in the
              flash.
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
              KRYON is a luxury accessories brand for a generation that doesn&apos;t ask
              for permission. We make rings, chains, shades and bracelets the way they
              should be made — obsessively, in small runs, finished by hand.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/shop" className="btn-neon">
                Shop the collection
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Talk to us
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden glass-strong animate-fade-up animate-delay-100">
            <Image
              src={IMG.lifestyleDuo}
              alt="KRYON studio campaign — two models in leather and trench"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'linear-gradient(180deg, rgba(5,6,10,0) 40%, rgba(5,6,10,0.75) 100%), radial-gradient(600px 400px at 90% 0%, rgba(30,127,255,0.35), transparent 60%)',
              }}
            />
            <div className="absolute left-6 right-6 bottom-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/80">
              <span>EST · 2023</span>
              <span>Lisbon · NYC · Seoul</span>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Manifesto"
        title="We're not jewelry. We're hardware for your main-character arc."
        subtitle="A short list of things we actually believe."
      >
        <div className="grid md:grid-cols-2 gap-5">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-3xl p-7">
              <div className="w-12 h-12 rounded-full bg-neon-gradient flex items-center justify-center">
                <v.icon size={18} />
              </div>
              <div className="mt-4 font-display text-xl font-semibold">{v.title}</div>
              <p className="mt-2 text-white/65 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="The road so far" title="Three years. Zero shortcuts.">
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-kryon-electric via-kryon-violet to-kryon-pink opacity-50"
          />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <div
                key={t.year}
                className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                  i % 2 === 0 ? '' : 'md:[&>*:first-child]:col-start-2'
                }`}
              >
                <div className={i % 2 === 0 ? 'md:text-right' : ''}>
                  <div className="pl-12 md:pl-0">
                    <div className="font-display text-5xl font-bold text-gradient">
                      {t.year}
                    </div>
                    <div className="mt-2 font-display text-xl font-semibold">
                      {t.title}
                    </div>
                    <p className="mt-2 text-white/65 max-w-md md:inline-block">
                      {t.desc}
                    </p>
                  </div>
                </div>
                <div
                  aria-hidden
                  className="absolute left-4 md:left-1/2 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-white"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-[32px] glass-strong p-10 md:p-16 text-center">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(600px 400px at 50% 20%, rgba(30,127,255,0.35), transparent 60%), radial-gradient(500px 300px at 50% 100%, rgba(255,59,212,0.2), transparent 60%)',
            }}
          />
          <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Ready to <span className="text-gradient">upgrade your drip</span>?
          </h3>
          <p className="mt-4 text-white/65 max-w-xl mx-auto">
            Pick your first piece — every KRYON order ships with a lifetime warranty
            card and a handwritten note.
          </p>
          <Link href="/shop" className="btn-neon mt-8 inline-flex">
            Shop the drop
            <ArrowRight size={16} />
          </Link>
        </div>
      </Section>
    </>
  );
}
