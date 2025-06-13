import { useMemo } from "react";
import { MeshStandardMaterial, Texture } from "three";

export const useWheels = (texture: Texture) => {
  return useMemo(
    () =>
      new MeshStandardMaterial({
        roughness: 0.35,
        map: texture,
      }),
    [texture],
  );
};
