import { ForwardedRef, HTMLAttributes, createContext, forwardRef } from 'react';
import { ContextValue, useContextProps } from '../../utils/theme-provider';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  elementType?: string;
}

export const TextContext = createContext<ContextValue<TextProps, HTMLElement>>({});

/**
 * Text represents text with no specific semantic meaning.
 */
export const Text = forwardRef((props: TextProps, ref: ForwardedRef<HTMLElement>) => {
  [props, ref] = useContextProps(props, ref, TextContext);
  const { elementType: ElementType = 'span', ...domProps } = props;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <ElementType {...domProps} ref={ref} />;
});

export default Text;
