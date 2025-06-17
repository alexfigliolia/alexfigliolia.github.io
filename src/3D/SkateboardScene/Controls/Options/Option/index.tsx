import { CSSProperties, ReactNode, useCallback } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Callback } from "Tools/Types";
import "./styles.scss";

export const Option = ({
  name,
  selected,
  children,
  onClick,
  colorField,
  imageField,
  imageStyles,
}: Props) => {
  const classes = useClassNames("option", { selected });

  const onSelect = useCallback(() => {
    onClick(name);
  }, [onClick, name]);

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
  name: string;
  selected: boolean;
  children: ReactNode;
  onClick: Callback<[string]>;
}

type Props = CommonProps &
  (
    | {
        colorField?: never;
        imageField: string;
        imageStyles?: CSSProperties;
      }
    | {
        colorField: string;
        imageField?: never;
        imageStyles?: never;
      }
  );
