import { useMemo } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { selectHeight, useScreen } from "State/Screen";
import { PropLess } from "Tools/Types";

const DISTANCE = 1000;

export const Camera = (_: PropLess) => {
  const height = useScreen(selectHeight);

  const fov = useMemo(
    () => 2 * Math.atan(height / 2 / DISTANCE) * (180 / Math.PI),
    [height],
  );

  return <PerspectiveCamera fov={fov} makeDefault position-z={DISTANCE} />;
};
