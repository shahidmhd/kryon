'use client';
import { useMemo, useState } from 'react';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';
import { products, categories, type Product } from '@/lib/products';
import clsx from 'clsx';

type Filter = 'All' | Product['category'];

export default function ShopContent() {
  const [filter, setFilter] = useState<Filter>('All');
  const [active, setActive] = useState<Product | null>(null);

  const visible = useMemo(
    () => (filter === 'All' ? products : products.filter((p) => p.category === filter)),
    [filter]
  );

  const chips: Filter[] = ['All', ...categories];

  return (
    <>
      <Section
        className="!pt-12 md:!pt-20 !pb-10"
        eyebrow="The Collection"
        title="Shop every piece."
        subtitle="Twelve signature drops, four categories, one obsession. Filter and tap to preview."
      >
        <div className="flex flex-wrap items-center gap-2">
          {chips.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={clsx(
                'px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200',
                filter === c
                  ? 'bg-neon-gradient text-white'
                  : 'glass text-white/70 hover:text-white hover:bg-white/10'
              )}
            >
              {c}
              {c !== 'All' && (
                <span className="ml-2 text-[10px] opacity-70">
                  {products.filter((p) => p.category === c).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} onOpen={setActive} />
          ))}
        </div>

        {visible.length === 0 && (
          <div className="text-center text-white/60 py-20">
            Nothing here yet. Come back Friday 7pm.
          </div>
        )}
      </section>

      <ProductModal product={active} onClose={() => setActive(null)} />
    </>
  );
}
