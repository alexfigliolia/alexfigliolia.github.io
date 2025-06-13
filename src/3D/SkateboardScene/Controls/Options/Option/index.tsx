import { CSSProperties, ReactNode } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Callback } from "Tools/Types";
import "./styles.scss";

export const Option = ({
  selected,
  children,
  onClick,
  colorField,
  imageField,
  imageStyles,
}: Props) => {
  const classes = useClassNames("option", { selected });
  return (
    <li>
      <button className={classes} onClick={onClick}>
        {imageField ? (
          <img src={imageField} alt="" style={imageStyles} />
        ) : (
          <div style={{ backgroundColor: colorField ?? undefined }} />
        )}
        <span>{children}</span>
      </button>
    </li>
  );
};

interface CommonProps {
  selected: boolean;
  children: ReactNode;
  onClick: Callback;
  imageStyles?: CSSProperties;
}

type Props = CommonProps &
  (
    | {
        colorField?: never;
        imageField: string;
      }
    | {
        colorField: string;
        imageField?: never;
        imgixParams?: never;
      }
  );
