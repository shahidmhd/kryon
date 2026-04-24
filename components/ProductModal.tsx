'use client';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Heart, Sparkles, Minus, Plus, MessageCircle } from 'lucide-react';
import type { Product } from '@/lib/products';
import { WHATSAPP_NUMBER } from '@/lib/assets';
import { useEffect, useState } from 'react';

function buildWhatsAppHref(product: Product, qty: number) {
  const total = product.price * qty;
  const lines = [
    'Hi KRYON 👋',
    "I'd like to order:",
    '',
    `• ${product.name} (${product.category})`,
    `  Qty: ${qty}`,
    `  Price: ₹${product.price} each`,
    `  Total: ₹${total}`,
    '',
    `SKU: KRY-${product.id.toUpperCase()}`,
  ];
  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [qty, setQty] = useState(1);

  useEffect(() => {
    // Reset quantity whenever a new product is opened.
    if (product) setQty(1);
  }, [product?.id]);

  useEffect(() => {
    if (!product) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKey);
    };
  }, [product, onClose]);

  const total = product ? product.price * qty : 0;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
        >
          <motion.div
            className="absolute inset-0 bg-black/70"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl overflow-x-hidden glass-strong"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 border border-white/15 flex items-center justify-center hover:bg-white/10"
            >
              <X size={16} />
            </button>
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden bg-black">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(500px 300px at 20% 0%, ${product.tone}55, transparent 60%), linear-gradient(180deg, transparent 70%, rgba(0,0,0,0.6))`,
                  }}
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 chip !bg-black/50">
                    <Sparkles size={12} />
                    {product.badge}
                  </div>
                )}
              </div>

              <div className="p-8 md:p-10 flex flex-col">
                <div className="chip mb-4">{product.category}</div>
                <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                  {product.name}
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  {product.description}
                </p>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.3em] text-white/50 mb-1">
                      Price
                    </div>
                    <div className="font-display text-3xl font-semibold text-electric">
                      ₹{product.price}
                    </div>
                  </div>
                  <div className="text-right text-sm text-white/60">
                    <div>Free worldwide</div>
                    <div>Ships in 48h</div>
                  </div>
                </div>

                {/* Quantity picker */}
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/55">
                    Quantity
                  </div>
                  <div className="inline-flex items-center gap-1 glass rounded-full p-1">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      disabled={qty <= 1}
                      aria-label="Decrease quantity"
                      className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="min-w-[2.5rem] text-center font-display text-lg font-semibold">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.min(99, q + 1))}
                      aria-label="Increase quantity"
                      className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-sm border-t border-white/10 pt-4">
                  <span className="text-white/60">Total</span>
                  <span className="font-display text-xl font-semibold text-electric">
                    ₹{total}
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={buildWhatsAppHref(product, qty)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-neon w-full justify-center"
                  >
                    <MessageCircle size={16} />
                    Order on WhatsApp
                  </a>
                  <button className="btn-ghost w-full justify-center">
                    <Heart size={16} />
                    Save for later
                  </button>
                </div>

                <div className="mt-auto pt-8 text-xs text-white/50 flex items-center justify-between">
                  <span>SKU · KRY-{product.id.toUpperCase()}</span>
                  <span>Lifetime warranty</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
