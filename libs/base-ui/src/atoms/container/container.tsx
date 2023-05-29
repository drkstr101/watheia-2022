import clsx from 'clsx';
import { HtmlHTMLAttributes } from 'react';
import styles from './container.module.css';

/* eslint-disable-next-line */
export interface ContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={clsx(styles['container'], className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
