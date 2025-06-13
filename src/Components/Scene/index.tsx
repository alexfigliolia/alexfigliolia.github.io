import { useClassNames } from "@figliolia/classnames";
import { ready, scene, useLabs } from "State/Labs";
import { PropLess } from "Tools/Types";
import "./styles.scss";

export const Scene = (_: PropLess) => {
  const active = useLabs(ready);
  const sceneComponent = useLabs(scene);
  const classes = useClassNames("scene", { active });
  return <div className={classes}>{sceneComponent}</div>;
};
