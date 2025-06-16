import { CSSProperties, ReactNode, useCallback } from "react";
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

  const onSelect = useCallback(() => {
    onClick(colorField ?? imageField ?? "");
  }, [onClick, colorField, imageField]);

  return (
    <li>
      <button className={classes} onClick={onSelect}>
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
  onClick: Callback<[string]>;
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
