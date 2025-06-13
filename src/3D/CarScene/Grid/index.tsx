import { useCallback } from "react";
import { Texture } from "three";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Textures } from "Tools/Textures";
import { PropLess } from "Tools/Types";
import gridTexture from "../Resources/grid-texture.png";

export const Grid = (_: PropLess) => {
  const onLoad = useCallback((texture: Texture) => {
    Textures.wrap(texture).repeat(texture, 30).rerender(texture);
    texture.anisotropy = 4;
  }, []);

  const grid = useTexture(gridTexture, onLoad);

  useFrame(({ clock }) => {
    grid.offset.set(0, -clock.getElapsedTime() * 0.68);
  });

  return (
    <mesh rotation-x={-Math.PI * 0.5} position={[0, 0.015, 0]}>
      <planeGeometry args={[35, 35]} />
      <meshBasicMaterial
        transparent
        map={grid}
        alphaMap={grid}
        opacity={0.25}
        color={[1, 1, 1]}
      />
    </mesh>
  );
};

useTexture.preload(gridTexture);
