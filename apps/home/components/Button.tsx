import clsx from 'clsx';
import Link from 'next/link';
import { forwardRef } from 'react';

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
};

const variantStyles = {
  solid: {
    accent:
      'relative overflow-hidden bg-accent-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-accent-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-accent-900 hover:bg-white/90 active:bg-white/90 active:text-accent-900/70',
    neutral:
      'bg-neutral-800 text-white hover:bg-neutral-900 active:bg-neutral-800 active:text-white/80',
  },
  outline: {
    neutral:
      'border-neutral-300 text-neutral-700 hover:border-neutral-400 active:bg-neutral-100 active:text-neutral-700/80',
  },
};

export const Button = forwardRef(function Button(
  { variant = 'solid', color = 'neutral', className, href, ...props }: any,
  ref
) {
  className = clsx(baseStyles[variant], variantStyles[variant][color], className);

  return href ? (
    <Link ref={ref} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  );
});
