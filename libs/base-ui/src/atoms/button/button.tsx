import clsx from 'clsx';
import { forwardRef } from 'react';
import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components';
import styles from './button.theme';

export interface ButtonProps extends AriaButtonProps {
  /** A URL to link to if elementType="a". */
  href?: string;
  /** The target window for the link. */
  target?: string;
  /** The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel). */
  rel?: string;
  /** The predefined color palette to use. (default: neutral) */
  color?: 'neutral' | 'white' | 'accent';
  /** A predefined appearance type (default: solid) */
  variant?: 'solid' | 'outline' | 'link';
}

export const Button = forwardRef<HTMLButtonElement>(
  (
    { className, variant = 'solid', color = 'neutral', children, href, ...props }: ButtonProps,
    ref
  ) => {
    return (
      <AriaButton
        className={clsx(styles.button, styles[variant], styles[color], className)}
        ref={ref}
        {...props}
      >
        {children}
      </AriaButton>
    );
  }
);

export default Button;
