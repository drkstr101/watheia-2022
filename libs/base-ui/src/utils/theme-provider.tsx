/* eslint-disable @typescript-eslint/ban-ts-comment */
import { mergeProps, mergeRefs, useLayoutEffect, useObjectRef } from '@react-aria/utils';
import { AriaLabelingProps, DOMProps as SharedDOMProps } from '@react-types/shared';
import React, {
  CSSProperties,
  ReactNode,
  RefCallback,
  RefObject,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';

// Override forwardRef types so generics work.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare function forwardRef<T, P = Record<string, any>>(
  render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
): (props: P & React.RefAttributes<T>) => React.ReactElement | null;

export type forwardRefType = typeof forwardRef;

export const slotCallbackSymbol = Symbol('callback');
export const defaultSlot = Symbol('default');

interface SlottedValue<T> {
  slots?: Record<string | symbol, T>;
  [slotCallbackSymbol]?: (value: T) => void;
}

export type ContextValue<T extends SlotProps, E extends Element> =
  | SlottedValue<WithRef<T, E>>
  | WithRef<T, E>
  | null
  | undefined;

type ProviderValue<T> = [React.Context<T>, T];
type ProviderValues<A, B, C, D, E, F, G, H> =
  | [ProviderValue<A>]
  | [ProviderValue<A>, ProviderValue<B>]
  | [ProviderValue<A>, ProviderValue<B>, ProviderValue<C>]
  | [ProviderValue<A>, ProviderValue<B>, ProviderValue<C>, ProviderValue<D>]
  | [ProviderValue<A>, ProviderValue<B>, ProviderValue<C>, ProviderValue<D>, ProviderValue<E>]
  | [
      ProviderValue<A>,
      ProviderValue<B>,
      ProviderValue<C>,
      ProviderValue<D>,
      ProviderValue<E>,
      ProviderValue<F>
    ]
  | [
      ProviderValue<A>,
      ProviderValue<B>,
      ProviderValue<C>,
      ProviderValue<D>,
      ProviderValue<E>,
      ProviderValue<F>,
      ProviderValue<G>
    ]
  | [
      ProviderValue<A>,
      ProviderValue<B>,
      ProviderValue<C>,
      ProviderValue<D>,
      ProviderValue<E>,
      ProviderValue<F>,
      ProviderValue<G>,
      ProviderValue<H>
    ];

interface ThemeProviderProps<A, B, C, D, E, F, G, H> {
  values: ProviderValues<A, B, C, D, E, F, G, H>;
  children: React.ReactNode;
}

export function ThemeProvider<A, B, C, D, E, F, G, H>({
  values,
  children,
}: ThemeProviderProps<A, B, C, D, E, F, G, H>): JSX.Element {
  for (const [Context, value] of values) {
    // @ts-ignore
    children = <Context.Provider value={value}>{children}</Context.Provider>;
  }

  return children as JSX.Element;
}

export interface StyleProps {
  /** The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. */
  className?: string;
  /** The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. */
  style?: CSSProperties;
}

export interface DOMProps extends StyleProps {
  /** The children of the component. */
  children?: ReactNode;
}

export interface StyleRenderProps<T> {
  /** The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state. */
  className?: string | ((values: T) => string);
  /** The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state. */
  style?: CSSProperties | ((values: T) => CSSProperties);
}

export interface RenderProps<T> extends StyleRenderProps<T> {
  /** The children of the component. A function may be provided to alter the children based on component state. */
  children?: ReactNode | ((values: T) => ReactNode);
}

interface RenderPropsHookOptions<T> extends RenderProps<T>, SharedDOMProps, AriaLabelingProps {
  values: T;
  defaultChildren?: ReactNode;
  defaultClassName?: string;
}

export function useRenderProps<T>(props: RenderPropsHookOptions<T>) {
  const { className, style, children, defaultClassName, defaultChildren, values } = props;

  return useMemo(() => {
    let computedClassName: string | undefined;
    let computedStyle: React.CSSProperties | undefined;
    let computedChildren: React.ReactNode | undefined;

    if (typeof className === 'function') {
      computedClassName = className(values);
    } else {
      computedClassName = className;
    }

    if (typeof style === 'function') {
      computedStyle = style(values);
    } else {
      computedStyle = style;
    }

    if (typeof children === 'function') {
      computedChildren = children(values);
    } else if (children == null) {
      computedChildren = defaultChildren;
    } else {
      computedChildren = children;
    }

    return {
      className: computedClassName ?? defaultClassName,
      style: computedStyle,
      children: computedChildren,
    };
  }, [className, style, children, defaultClassName, defaultChildren, values]);
}

export type WithRef<T, E> = T & { ref?: React.ForwardedRef<E> };
export interface SlotProps {
  /** A slot name for the component. Slots allow the component to receive props from a parent component. */
  slot?: string;
}

export function useContextProps<T, U extends SlotProps, E extends Element>(
  props: T & SlotProps,
  ref: React.ForwardedRef<E>,
  context: React.Context<ContextValue<U, E>>
): [T, React.RefObject<E>] {
  let ctx = useContext(context) || {};
  if ('slots' in ctx && ctx.slots) {
    if (!props.slot && !ctx.slots[defaultSlot]) {
      throw new Error('A slot prop is required');
    }
    const slot = props.slot || defaultSlot;
    if (!ctx.slots[slot]) {
      // @ts-ignore
      throw new Error(
        `Invalid slot "${props.slot}". Valid slot names are ` +
          new Intl.ListFormat().format(Object.keys(ctx.slots).map((p) => `"${p}"`)) +
          '.'
      );
    }
    ctx = ctx.slots[slot];
  }
  // @ts-ignore - TS says "Type 'unique symbol' cannot be used as an index type." but not sure why.
  const { ref: contextRef, [slotCallbackSymbol]: callback, ...contextProps } = ctx;
  const mergedRef = useObjectRef(useMemo(() => mergeRefs(ref, contextRef), [ref, contextRef]));
  const mergedProps = mergeProps(contextProps, props) as unknown as T;

  // A parent component might need the props from a child, so call slot callback if needed.
  useEffect(() => {
    if (callback) {
      callback(props);
    }
  }, [callback, props]);

  return [mergedProps, mergedRef];
}

export function useSlot(): [RefCallback<Element>, boolean] {
  // Assume we do have the slot in the initial render.
  const [hasSlot, setHasSlot] = useState(true);
  const hasRun = useRef(false);

  // A callback ref which will run when the slotted element mounts.
  // This should happen before the useLayoutEffect below.
  const ref = useCallback((el: unknown) => {
    hasRun.current = true;
    setHasSlot(!!el);
  }, []);

  // If the callback hasn't been called, then reset to false.
  useLayoutEffect(() => {
    if (!hasRun.current) {
      setHasSlot(false);
    }
  }, []);

  return [ref, hasSlot];
}

export function useEnterAnimation(ref: RefObject<HTMLElement>, isReady = true) {
  const [isEntering, setEntering] = useState(true);
  useAnimation(
    ref,
    isEntering && isReady,
    useCallback(() => setEntering(false), [])
  );
  return isEntering && isReady;
}

export function useExitAnimation(ref: RefObject<HTMLElement>, isOpen: boolean) {
  // State to trigger a re-render after animation is complete, which causes the element to be removed from the DOM.
  // Ref to track the state we're in, so we don't immediately reset isExiting to true after the animation.
  // eslint-disable-next-line prefer-const
  let [isExiting, setExiting] = useState(false);
  const exitState = useRef('idle');

  // If isOpen becomes false, set isExiting to true.
  if (!isOpen && ref.current && exitState.current === 'idle') {
    isExiting = true;
    setExiting(true);
    exitState.current = 'exiting';
  }

  // If we exited, and the element has been removed, reset exit state to idle.
  if (!ref.current && exitState.current === 'exited') {
    exitState.current = 'idle';
  }

  useAnimation(
    ref,
    isExiting,
    useCallback(() => {
      exitState.current = 'exited';
      setExiting(false);
    }, [])
  );

  return isExiting;
}

function useAnimation(ref: RefObject<HTMLElement>, isActive: boolean, onEnd: () => void) {
  const prevAnimation = useRef<string | null>(null);
  if (isActive && ref.current) {
    prevAnimation.current = window.getComputedStyle(ref.current).animation;
  }

  useLayoutEffect(() => {
    if (isActive && ref.current) {
      // Make sure there's actually an animation, and it wasn't there before we triggered the update.
      const computedStyle = window.getComputedStyle(ref.current);
      if (
        computedStyle.animationName !== 'none' &&
        computedStyle.animation !== prevAnimation.current
      ) {
        const onAnimationEnd = (e: AnimationEvent) => {
          if (e.target === ref.current) {
            element.removeEventListener('animationend', onAnimationEnd);
            ReactDOM.flushSync(() => {
              onEnd();
            });
          }
        };

        const element = ref.current;
        element.addEventListener('animationend', onAnimationEnd);
        return () => {
          element.removeEventListener('animationend', onAnimationEnd);
        };
      } else {
        onEnd();
      }
    }
  }, [ref, isActive, onEnd]);
}

export const HiddenContext = createContext<boolean>(false);
