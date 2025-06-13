import { useMemo } from "react";
import { MeshStandardMaterial } from "three";
import { useTexture } from "@react-three/drei";
import { Textures } from "Tools/Textures";
import { PropLess } from "Tools/Types";
import ConcreteNormal from "../Resources/concrete-normal.avif";

export const ENVIRONMENT_COLOR = "#3b3a3a";

export const Floor = (_: PropLess) => {
  const normalMap = useTexture(ConcreteNormal, t => {
    Textures.wrap(t).repeat(t, 30).rerender(t);
    t.anisotropy = 8;
  });

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        roughness: 0.75,
        color: ENVIRONMENT_COLOR,
        normalMap: normalMap,
      }),
    [normalMap],
  );
  return (
    <mesh
      castShadow
      receiveShadow
      position={[0, -0.005, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      material={material}>
      <circleGeometry args={[20, 32]} />
    </mesh>
  );
};
