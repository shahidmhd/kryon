'use client';
import Image from 'next/image';
import type { Product } from '@/lib/products';
import { Sparkles } from 'lucide-react';

export default function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen?: (p: Product) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(product)}
      className="group relative flex h-full w-full flex-col text-left overflow-hidden rounded-3xl glass p-4 focus:outline-none focus:ring-2 focus:ring-kryon-electric/60 transition-transform duration-300 hover:-translate-y-1.5"
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-black/40">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 768px) 45vw, (max-width: 1200px) 30vw, 22vw"
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"
        />
        {product.badge && (
          <div className="absolute top-3 left-3 chip !bg-black/60 !text-white">
            <Sparkles size={12} />
            {product.badge}
          </div>
        )}
        <div className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.3em] text-white/75">
          {product.category}
        </div>
      </div>

      <div className="relative mt-4 flex h-14 items-center justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="font-display text-base md:text-lg font-semibold truncate">
            {product.name}
          </div>
          <div className="text-xs text-white/55 mt-0.5 truncate">
            Tap for preview
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="font-display text-lg font-semibold text-electric">
            ₹{product.price}
          </div>
        </div>
      </div>
    </button>
  );
}
