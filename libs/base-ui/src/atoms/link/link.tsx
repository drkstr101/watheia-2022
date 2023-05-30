import { filterDOMProps, mergeRefs } from '@react-aria/utils';
import React, { ForwardedRef, createContext, forwardRef, useMemo } from 'react';
import { AriaLinkOptions, mergeProps, useFocusRing, useHover, useLink } from 'react-aria';
import styles from '../../theme/styles/link';
import {
  ContextValue,
  RenderProps,
  SlotProps,
  useContextProps,
  useRenderProps,
} from '../../utils/theme-provider';

export interface LinkProps
  extends Omit<AriaLinkOptions, 'elementType'>,
    RenderProps<LinkRenderProps>,
    SlotProps {
  'aria-current'?: boolean;
}

export interface LinkRenderProps {
  /**
   * Whether the link is the current item within a list.
   * @selector [aria-current]
   */
  isCurrent: boolean;
  /**
   * Whether the link is currently hovered with a mouse.
   * @selector [data-hovered]
   */
  isHovered: boolean;
  /**
   * Whether the link is currently in a pressed state.
   * @selector [data-pressed]
   */
  isPressed: boolean;
  /**
   * Whether the link is focused, either via a mouse or keyboard.
   * @selector :focus
   */
  isFocused: boolean;
  /**
   * Whether the link is keyboard focused.
   * @selector [data-focus-visible]
   */
  isFocusVisible: boolean;
  /**
   * Whether the link is disabled.
   * @selector [aria-disabled]
   */
  isDisabled: boolean;
}

export const LinkContext = createContext<ContextValue<LinkProps, HTMLAnchorElement>>(null);

/**
 * A link allows a user to navigate to another page or resource within a web page
 * or application.
 */
export const Link = forwardRef((props: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  [props, ref] = useContextProps(props, ref, LinkContext);

  const elementType =
    typeof props.children === 'string' || typeof props.children === 'function' ? 'span' : 'a';
  const { linkProps, isPressed } = useLink({ ...props, elementType }, ref);

  const { hoverProps, isHovered } = useHover(props);
  const { focusProps, isFocused, isFocusVisible } = useFocusRing();

  const renderProps = useRenderProps({
    ...props,
    defaultClassName: styles.link,
    values: {
      isCurrent: !!props['aria-current'],
      isDisabled: props.isDisabled || false,
      isPressed,
      isHovered,
      isFocused,
      isFocusVisible,
    },
  });

  const DOMProps = filterDOMProps(props);
  delete DOMProps.id;

  const element: any =
    typeof renderProps.children === 'string' ? (
      <span>{renderProps.children}</span>
    ) : (
      React.Children.only(renderProps.children)
    );

  return React.cloneElement(element, {
    ref: useMemo(() => (element.ref ? mergeRefs(element.ref, ref) : ref), [element.ref, ref]),
    slot: props.slot,
    ...mergeProps(
      DOMProps,
      renderProps,
      linkProps,
      hoverProps,
      focusProps,
      {
        children: element.props.children,
        'data-hovered': isHovered || undefined,
        'data-pressed': isPressed || undefined,
        'data-focus-visible': isFocusVisible || undefined,
      },
      element.props
    ),
  });
});

export default Link;
