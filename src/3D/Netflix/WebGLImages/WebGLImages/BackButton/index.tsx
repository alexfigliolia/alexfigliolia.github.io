import { useCallback, useContext } from "react";
import { useClassNames } from "@figliolia/classnames";
import { PropLess } from "Tools/Types";
import { useActiveImage, WebGLImagesContext } from "../../Context";
import "./styles.scss";

export const BackButton = (_: PropLess) => {
  const visible = useActiveImage();
  const controller = useContext(WebGLImagesContext);

  const onClick = useCallback(() => {
    controller.activateImage(null);
  }, [controller]);

  const classes = useClassNames("back-button", { visible });

  return (
    <button onClick={onClick} className={classes}>
      Back
    </button>
  );
};
