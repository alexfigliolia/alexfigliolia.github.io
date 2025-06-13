import { Fragment, useMemo } from "react";
import { Box, BoxColor } from "./Box";

const OFF_RED: BoxColor = [0.4, 0.1, 0.1];
const OFF_BLUE: BoxColor = [0.05, 0.15, 0.4];

export const Boxes = ({ total = 100 }: Props) => {
  const boxes = useMemo(() => new Array<null>(total).fill(null), [total]);
  return (
    <Fragment>
      {boxes.map((_, i) => (
        <Box key={i} color={i % 2 === 0 ? OFF_RED : OFF_BLUE} />
      ))}
    </Fragment>
  );
};

interface Props {
  total?: number;
}
