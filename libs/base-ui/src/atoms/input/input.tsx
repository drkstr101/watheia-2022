import { ForwardedRef, InputHTMLAttributes, createContext, forwardRef } from 'react';
import { mergeProps, useFocusRing, useHover } from 'react-aria';
import {
  ContextValue,
  StyleRenderProps,
  useContextProps,
  useRenderProps,
} from '../../utils/theme-provider';

export interface InputRenderProps {
  /**
   * Whether the input is currently hovered with a mouse.
   * @selector [data-hovered]
   */
  isHovered: boolean;
  /**
   * Whether the input is focused, either via a mouse or keyboard.
   * @selector :focus
   */
  isFocused: boolean;
  /**
   * Whether the input is keyboard focused.
   * @selector [data-focus-visible]
   */
  isFocusVisible: boolean;
  /**
   * Whether the input is disabled.
   * @selector :disabled
   */
  isDisabled: boolean;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style'>,
    StyleRenderProps<InputRenderProps> {}

export const InputContext = createContext<ContextValue<InputProps, HTMLInputElement>>({});

/**
 * An input allows a user to input text.
 */
export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  [props, ref] = useContextProps(props, ref, InputContext);

  const { hoverProps, isHovered } = useHover({});
  const { isFocused, isFocusVisible, focusProps } = useFocusRing({
    isTextInput: true,
    autoFocus: props.autoFocus,
  });

  const renderProps = useRenderProps({
    ...props,
    values: { isHovered, isFocused, isFocusVisible, isDisabled: props.disabled || false },
    defaultClassName: 'react-aria-Input',
  });

  return (
    <input
      {...mergeProps(props, focusProps, hoverProps)}
      {...renderProps}
      ref={ref}
      data-hovered={isHovered || undefined}
      data-focus-visible={isFocusVisible || undefined}
    />
  );
});

export default Input;
