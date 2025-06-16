import { useMemo } from "react";
import { MeshStandardMaterial, Vector2 } from "three";
import { useTexture } from "@react-three/drei";
import { Textures } from "Tools/Textures";
import MetalNormal from "../../Resources/skateboard/metal-normal.avif";

export const useTrucks = (color = "#555") => {
  const metalNormal = useTexture(MetalNormal, t => {
    Textures.wrap(t).repeat(t, 8).rerender(t);
    t.anisotropy = 8;
  });
  return useMemo(
    () =>
      new MeshStandardMaterial({
        color,
        metalness: 0.8,
        roughness: 0.25,
        normalMap: metalNormal,
        normalScale: new Vector2(0.3, 0.3),
      }),
    [color, metalNormal],
  );
};

useTexture.preload(MetalNormal);
