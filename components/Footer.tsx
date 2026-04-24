'use client';
import Link from 'next/link';
import { Instagram, Send, Youtube } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative mt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 h-40 bg-gradient-to-b from-transparent to-kryon-black"
      />
      <div className="relative border-t border-white/10 bg-kryon-black/70 backdrop-blur-xl">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              'radial-gradient(600px 300px at 10% 0%, rgba(30,127,255,0.18), transparent 60%), radial-gradient(500px 260px at 90% 0%, rgba(122,92,255,0.14), transparent 60%)',
          }}
        />
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo size={100} />
            <p className="mt-5 max-w-sm text-white/65 leading-relaxed">
              Futuristic luxury accessories forged for the bold. Rings, chains, shades,
              bracelets — upgrade every detail of your drip.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                data-cursor="hover"
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:shadow-neon transition-shadow"
              >
                <Instagram size={16} />
              </a>
              <a
                data-cursor="hover"
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:shadow-neon transition-shadow"
              >
                <Youtube size={16} />
              </a>
              <a
                data-cursor="hover"
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:shadow-neon transition-shadow"
              >
                <Send size={16} />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4">
              Explore
            </div>
            <ul className="space-y-3 text-sm">
              {[
                ['/', 'Home'],
                ['/reels', 'Reels'],
                ['/shop', 'Shop'],
                ['/about', 'About'],
                ['/contact', 'Contact'],
              ].map(([h, l]) => (
                <li key={h}>
                  <Link
                    href={h}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50 mb-4">
              Join the drop
            </div>
            <form className="flex items-center gap-2 glass rounded-full pl-4 pr-1 py-1">
              <input
                type="email"
                placeholder="you@drip.com"
                className="bg-transparent flex-1 outline-none text-sm placeholder:text-white/40 py-2"
              />
              <button
                type="submit"
                className="btn-neon !px-4 !py-2 text-xs"
                data-cursor="hover"
              >
                Notify Me
              </button>
            </form>
            <p className="mt-3 text-xs text-white/50">
              Get early access to new drops, reels, and collab announcements.
            </p>
          </div>
        </div>

        <div className="border-t border-white/5 py-6">
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/45">
            <div>© {new Date().getFullYear()} KRYON. All rights reserved.</div>
            <div className="font-display tracking-[0.3em] uppercase">
              Upgrade Your Drip
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
