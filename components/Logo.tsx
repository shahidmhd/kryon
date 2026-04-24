'use client';
import Image from 'next/image';
import clsx from 'clsx';
import { IMG } from '@/lib/assets';

export default function Logo({
  size = 36,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={clsx('relative flex items-center', className)}
      style={{ height: size }}
      aria-label="KRYON"
    >
      <Image
        src={IMG.logo}
        alt="KRYON"
        width={size * 3}
        height={size}
        priority
        style={{ height: size, width: 'auto' }}
        className="relative object-contain"
      />
    </div>
  );
}
