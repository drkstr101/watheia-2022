import clsx from 'clsx';
import { ForwardedRef, LabelHTMLAttributes, createContext, forwardRef } from 'react';
import { detail as styles } from '../../theme/styles/typography';
import { ContextValue, useContextProps } from '../../utils/theme-provider';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  elementType?: string;
}

export const LabelContext = createContext<ContextValue<LabelProps, HTMLLabelElement>>({});

export const Label = forwardRef(
  ({ className, ...props }: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
    [props, ref] = useContextProps(props, ref, LabelContext);
    const { elementType: ElementType = 'label', ...labelProps } = props;
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <ElementType className={clsx(styles['detail'], className)} {...labelProps} ref={ref} />
    );
  }
);

export default Label;
