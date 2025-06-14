import { ForwardedRef, forwardRef, HTMLProps, useMemo } from "react";
import { classnames } from "@figliolia/classnames";
import { Callback } from "Tools/Types";
import "./styles.scss";

export const Poster = forwardRef(function Poster(
  { title, posterURL, className, onClick, ...rest }: IPoster,
  ref: ForwardedRef<HTMLImageElement>,
) {
  const imageNode = useMemo(
    () => <img ref={ref} src={posterURL} alt={title} />,
    [posterURL, title, ref],
  );
  return (
    <div
      role="group"
      className={classnames("content-poster", className)}
      {...rest}>
      {onClick ? <button onClick={onClick}>{imageNode}</button> : imageNode}
    </div>
  );
});

export interface IPoster extends Omit<HTMLProps<HTMLDivElement>, "id" | "ref"> {
  className?: string;
  posterURL: string;
  onClick?: Callback;
}
