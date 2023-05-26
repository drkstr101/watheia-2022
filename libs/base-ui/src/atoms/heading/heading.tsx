import clsx from 'clsx';
import { HtmlHTMLAttributes } from 'react';
import styles from './heading.module.css';

/* eslint-disable-next-line */
export interface HeadingProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

export function Heading({ className, children, variant: C = 'h1', ...props }: HeadingProps) {
  return (
    <C className={clsx('wa-heading', styles['heading'], className)} {...props}>
      {children}
    </C>
  );
}

export default Heading;
