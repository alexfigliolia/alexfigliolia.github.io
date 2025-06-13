import { useMemo } from "react";
import { MeshStandardMaterial, Texture } from "three";

export const useDeck = (texture: Texture) => {
  return useMemo(
    () =>
      new MeshStandardMaterial({
        roughness: 0.1,
        map: texture,
      }),
    [texture],
  );
};
