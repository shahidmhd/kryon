'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag } from 'lucide-react';
import clsx from 'clsx';
import Logo from './Logo';

const links = [
  { href: '/', label: 'Home' },
  { href: '/reels', label: 'Reels' },
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-[padding] duration-300',
        scrolled ? 'py-2.5' : 'py-4'
      )}
    >
      <div
        className={clsx(
          'mx-auto flex items-center justify-between max-w-7xl px-4 sm:px-6 rounded-full transition-colors duration-300',
          scrolled
            ? 'mt-2 backdrop-blur-md bg-kryon-black/80 border border-white/10'
            : 'bg-transparent border border-transparent'
        )}
      >
        <Link href="/" className="flex items-center py-2 pl-2">
          <Logo size={scrolled ? 60 : 100} />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  'relative px-4 py-2 text-sm tracking-wide uppercase transition-colors duration-200',
                  active ? 'text-white' : 'text-white/70 hover:text-white'
                )}
              >
                {l.label}
                {active && (
                  <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-neon-gradient rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 pr-2">
          <Link
            href="/shop"
            className="hidden md:inline-flex btn-neon !py-2 !px-4 text-sm"
          >
            <ShoppingBag size={16} />
            <span>Shop</span>
          </Link>
          <button
            type="button"
            className="md:hidden p-2 rounded-full border border-white/10 bg-white/[0.04] text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-4 mt-2 rounded-3xl glass-strong p-4">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  'px-4 py-3 rounded-2xl text-sm uppercase tracking-wide transition-colors',
                  pathname === l.href
                    ? 'text-white bg-white/10'
                    : 'text-white/75 hover:bg-white/5'
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/shop" className="btn-neon mt-2 justify-center">
              <ShoppingBag size={16} />
              Shop Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
