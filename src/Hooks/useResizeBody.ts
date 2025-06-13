import { useLayoutEffect } from "react";
import { selectDimensions, useScreen } from "State/Screen";

export const useResizeBody = () => {
  const [width, height] = useScreen(selectDimensions);
  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.width = `${width}px`;
    document.body.style.height = `${height}px`;
  }, [width, height]);
};
