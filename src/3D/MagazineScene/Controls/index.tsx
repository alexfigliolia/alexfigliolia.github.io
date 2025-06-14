import { use, useCallback, useMemo } from "react";
import { useClassNames } from "@figliolia/classnames";
import { MagazineContext } from "../Context";
import "./styles.scss";

export const Controls = ({ pages }: ControlsProps) => {
  const list = useMemo(
    () => Array.from({ length: pages }, (_, i) => i).slice(1),
    [pages],
  );
  let current = 0;
  return (
    <div className="magazine-controls">
      {list.map(i => (
        <Button key={i} page={i} number={++current} />
      ))}
    </div>
  );
};

interface ControlsProps {
  pages: number;
}

function Button({ page, number }: ButtonProps) {
  const { current, setCurrent } = use(MagazineContext);

  const onClick = useCallback(() => {
    setCurrent(page);
  }, [page, setCurrent]);

  const classes = useClassNames({ active: page === current });

  const text = useMemo(() => `Page ${number}`, [number]);

  return (
    <button className={classes} onClick={onClick} data-text={text}>
      {text}
    </button>
  );
}

interface ButtonProps {
  page: number;
  number: number;
}
