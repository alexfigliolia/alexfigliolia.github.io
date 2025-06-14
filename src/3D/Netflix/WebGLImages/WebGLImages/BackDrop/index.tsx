import { useClassNames } from "@figliolia/classnames";
import { PropLess } from "Tools/Types";
import { useActiveImage } from "../../Context";
import "./styles.scss";

export const BackDrop = (_: PropLess) => {
  const visible = useActiveImage();
  const classes = useClassNames("backdrop", { visible });
  return <div className={classes} />;
};
