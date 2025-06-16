import { useMemo } from "react";
import { MeshStandardMaterial } from "three";
import { useTexture } from "@react-three/drei";
import { Textures } from "Tools/Textures";
import GripTapDiffuse from "../../Resources/skateboard/griptape-diffuse.webp";
import GripTapeRoughness from "../../Resources/skateboard/griptape-roughness.webp";

export const useGripTape = () => {
  const gripTapeDiffuse = useTexture(GripTapDiffuse);
  const gripTapeRoughness = useTexture(GripTapeRoughness);
  return useMemo(() => {
    const material = new MeshStandardMaterial({
      map: gripTapeDiffuse,
      bumpMap: gripTapeRoughness,
      roughnessMap: gripTapeRoughness,
      bumpScale: 3.5,
      roughness: 0.8,
      color: "#555",
    });
    if (gripTapeDiffuse) {
      Textures.wrap(gripTapeDiffuse)
        .repeat(gripTapeDiffuse, 9)
        .rerender(gripTapeDiffuse);
    }
    if (gripTapeRoughness) {
      Textures.wrap(gripTapeRoughness)
        .repeat(gripTapeRoughness, 9)
        .rerender(gripTapeRoughness);
      gripTapeRoughness.anisotropy = 8;
    }
    return material;
  }, [gripTapeDiffuse, gripTapeRoughness]);
};

useTexture.preload([GripTapDiffuse, GripTapeRoughness]);
