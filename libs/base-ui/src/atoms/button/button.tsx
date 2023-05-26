import clsx from 'clsx';
// import Link from 'next/link';
import { HtmlHTMLAttributes, forwardRef } from 'react';
import styles from './button.module.css';

export interface ButtonProps
  extends HtmlHTMLAttributes<HTMLButtonElement> /* AriaButtonProps */ {
  /** A URL to link to if elementType="a". */
  href?: string;
  /** The target window for the link. */
  target?: string;
  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  rel?: string;
  /** The predefined color palette to use. (default: neutral) */
  color?: 'neutral' | 'white' | 'accent';
  /** A predefined appearance type (default: solid) */
  variant?: 'solid' | 'outline';
}

// const baseStyles = {
//   solid:
//     'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
//   outline:
//     'inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
// };

// const variantStyles = {
//   solid: {
//     accent:
//       'relative overflow-hidden bg-accent-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-accent-600 active:text-white/80 before:transition-colors',
//     white:
//       'bg-white text-accent-900 hover:bg-white/90 active:bg-white/90 active:text-accent-900/70',
//     neutral:
//       'bg-neutral-800 text-white hover:bg-neutral-900 active:bg-neutral-800 active:text-white/80',
//   },
//   outline: {
//     neutral:
//       'border-neutral-300 text-neutral-700 hover:border-neutral-400 active:bg-neutral-100 active:text-neutral-700/80',
//   },
// };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { href, rel, target, className, ...rest } = props;
  const buttonClasses = clsx(styles['button'], className);

  return href ? (
    <a href={href} rel={rel} target={target}>
      <button ref={ref} className={buttonClasses} {...rest} />
    </a>
  ) : (
    <button ref={ref} className={buttonClasses} {...rest} />
  );
});

// export const Button = forwardRef<HTMLButtonElement>(
//   (
//     { className, variant = 'solid', color = 'neutral', children, href, ...props }: ButtonProps,
//     ref
//   ) => {
//     return (
//       <AriaButton
//         className={clsx(styles.button, styles[variant], styles[color], className)}
//         ref={ref}
//         {...props}
//       >
//         {children}
//       </AriaButton>
//     );
//   }
// );

export default Button;
