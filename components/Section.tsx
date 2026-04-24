import clsx from 'clsx';
import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  containerClassName?: string;
  children?: ReactNode;
  id?: string;
};

export default function Section({
  eyebrow,
  title,
  subtitle,
  className,
  containerClassName,
  children,
  id,
}: Props) {
  return (
    <section
      className={clsx('relative py-20 md:py-28', className)}
      id={id}
    >
      <div className={clsx('mx-auto max-w-7xl px-6', containerClassName)}>
        {(eyebrow || title || subtitle) && (
          <div className="mb-12 md:mb-16 max-w-3xl">
            {eyebrow && (
              <div className="chip mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-kryon-electric" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-5 text-lg text-white/65 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
