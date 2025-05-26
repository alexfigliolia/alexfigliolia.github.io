import { ForwardedRef, forwardRef, type HTMLAttributes } from "react";
import { selectDimensions, useScreen } from "State/Screen";

const FullScreenComponent = <T extends keyof HTMLElementTagNameMap>(
  {
    style,
    children,
    // @ts-ignore
    Tag = "div",
    ...rest
  }: Props<T>,
  ref: ForwardedRef<HTMLElementTagNameMap[T]>,
) => {
  const [width, height] = useScreen(selectDimensions);
  return (
    // @ts-ignore
    <Tag style={{ height, width, ...style }} {...rest} ref={ref}>
      {children}
    </Tag>
  );
};

export const FullScreen = forwardRef(FullScreenComponent);

interface Props<T extends keyof HTMLElementTagNameMap>
  extends HTMLAttributes<HTMLElementTagNameMap[T]> {
  Tag?: T;
}
