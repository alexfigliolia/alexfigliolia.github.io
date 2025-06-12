import { HTMLProps, useMemo } from "react";
import { useClassNames } from "@figliolia/classnames";
import "./styles.scss";

export const SplitHeading = ({ text, className, ...rest }: Props) => {
  const list = useMemo(() => text.split(""), [text]);
  const classes = useClassNames("split-text", className);
  return (
    <h1 aria-label={text} {...rest} className={classes}>
      {list.map((letter, i) => {
        return (
          <div className="text-letter" key={i} aria-hidden>
            {letter}
          </div>
        );
      })}
    </h1>
  );
};

interface Props extends HTMLProps<HTMLHeadingElement> {
  text: string;
}
