import { useMemo } from "react";
import { MeshStandardMaterial } from "three";

export const useBolts = (color = "#555") => {
  return useMemo(
    () =>
      new MeshStandardMaterial({
        color,
        metalness: 0.5,
        roughness: 0.3,
      }),
    [color],
  );
};
