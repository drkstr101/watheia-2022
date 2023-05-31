import clsx from 'clsx';
import { ElementType, ForwardedRef, HTMLAttributes, createContext, forwardRef } from 'react';
import styles from '../../theme/styles/typography';
import { ContextValue, useContextProps } from '../../utils/theme-provider';

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  level?: number;
}

export const HeadingContext = createContext<ContextValue<HeadingProps, HTMLHeadingElement>>({});

export const Heading = forwardRef(
  (props: HeadingProps, ref: ForwardedRef<HTMLHeadingElement>) => {
    [props, ref] = useContextProps(props, ref, HeadingContext);
    const { children, level = 3, className, ...domProps } = props;
    const Element = `h${level}` as ElementType;

    const variant = `heading${level}` as keyof typeof styles;
    return (
      <Element {...domProps} className={clsx(styles[variant], className)}>
        {children}
      </Element>
    );
  }
);

export default Heading;
