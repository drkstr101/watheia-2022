import { filterDOMProps } from '@react-aria/utils';
import clsx from 'clsx';
import { ForwardedRef, createContext, forwardRef } from 'react';
import { AriaButtonProps, mergeProps, useButton, useFocusRing, useHover } from 'react-aria';
import styles from '../../theme/styles/button';
import {
  ContextValue,
  RenderProps,
  SlotProps,
  useContextProps,
  useRenderProps,
} from '../../utils/theme-provider';

export interface ButtonRenderProps {
  /**
   * Whether the button is currently hovered with a mouse.
   * @selector [data-hovered]
   */
  isHovered: boolean;
  /**
   * Whether the button is currently in a pressed state.
   * @selector [data-pressed]
   */
  isPressed: boolean;
  /**
   * Whether the button is focused, either via a mouse or keyboard.
   * @selector :focus
   */
  isFocused: boolean;
  /**
   * Whether the button is keyboard focused.
   * @selector [data-focus-visible]
   */
  isFocusVisible: boolean;
  /**
   * Whether the button is disabled.
   * @selector :disabled
   */
  isDisabled: boolean;
}

export interface ButtonProps
  extends Omit<AriaButtonProps, 'children' | 'href' | 'target' | 'rel' | 'elementType'>,
    SlotProps,
    RenderProps<ButtonRenderProps> {
  /**
   * The <form> element to associate the button with.
   * The value of this attribute must be the id of a <form> in the same document.
   */
  form?: string;
  /**
   * The URL that processes the information submitted by the button.
   * Overrides the action attribute of the button's form owner.
   */
  formAction?: string;
  /** Indicates how to encode the form data that is submitted. */
  formEncType?: string;
  /** Indicates the HTTP method used to submit the form. */
  formMethod?: string;
  /** Indicates that the form is not to be validated when it is submitted. */
  formNoValidate?: boolean;
  /** Overrides the target attribute of the button's form owner. */
  formTarget?: string;
  /** Submitted as a pair with the button's value as part of the form data. */
  name?: string;
  /** The value associated with the button's name when it's submitted with the form data. */
  value?: string;
  /** The predefined color palette to use. (default: neutral) */
  color?: 'neutral' | 'white' | 'accent';
  /** A predefined appearance type (default: solid) */
  variant?: 'solid' | 'outline';
}

interface ButtonContextValue extends ButtonProps {
  isPressed?: boolean;
}

const additionalButtonHTMLAttributes = new Set([
  'form',
  'formAction',
  'formEncType',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'name',
  'value',
]);

export const ButtonContext = createContext<ContextValue<ButtonContextValue, HTMLButtonElement>>(
  {}
);

export const Button = forwardRef(
  (
    { color = 'neutral', variant = 'solid', ...props }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    [props, ref] = useContextProps(props, ref, ButtonContext);
    const ctx = props as ButtonContextValue;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { buttonProps, isPressed } = useButton(props, ref);
    const { focusProps, isFocused, isFocusVisible } = useFocusRing(props);
    const { hoverProps, isHovered } = useHover(props);
    const renderProps = useRenderProps({
      ...props,
      values: {
        isHovered,
        isPressed,
        isFocused,
        isFocusVisible,
        isDisabled: props.isDisabled || false,
      },
      defaultClassName: clsx(styles.button, styles[variant], styles[color]),
    });

    return (
      <button
        {...filterDOMProps(props, { propNames: additionalButtonHTMLAttributes })}
        {...mergeProps(buttonProps, focusProps, hoverProps)}
        {...renderProps}
        ref={ref}
        slot={props.slot}
        data-pressed={ctx.isPressed || isPressed || undefined}
        data-hovered={isHovered || undefined}
        data-focus-visible={isFocusVisible || undefined}
      />
    );
  }
);

export default Button;
