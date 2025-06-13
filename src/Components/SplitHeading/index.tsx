import { HTMLProps, useMemo } from "react";
import { useClassNames } from "@figliolia/classnames";
import "./styles.scss";

export const SplitHeading = ({
  text,
  className,
  As = "h1",
  ...rest
}: Props) => {
  const list = useMemo(() => text.split(""), [text]);
  const classes = useClassNames("split-text", className);
  return (
    <As aria-label={text} {...rest} className={classes}>
      {list.map((letter, i) => {
        if (letter === " ") {
          return (
            <div className="text-letter" key={i} aria-hidden>
              &nbsp;&nbsp;
            </div>
          );
        }
        return (
          <div className="text-letter" key={i} aria-hidden>
            {letter}
          </div>
        );
      })}
    </As>
  );
};

interface Props extends HTMLProps<HTMLHeadingElement> {
  As?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
}
