import { useCallback } from "react";
import { Texture } from "three";
import { MeshReflectorMaterial, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Textures } from "Tools/Textures";
import { PropLess } from "Tools/Types";
import GroundNormal from "../Resources/ground-normal.jpg";
import GroundRoughness from "../Resources/ground-roughness.jpg";

export const Ground = (_: PropLess) => {
  const onNormalLoad = useCallback((texture: Texture) => {
    return Textures.wrap(texture)
      .repeat(texture, 5)
      .colorless(texture)
      .rerender(texture);
  }, []);

  const onRoughnessLoad = useCallback((texture: Texture) => {
    return Textures.wrap(texture).repeat(texture, 5).rerender(texture);
  }, []);

  const normals = useTexture(GroundNormal, onNormalLoad);
  const roughness = useTexture(GroundRoughness, onRoughnessLoad);

  useFrame(({ clock }) => {
    const movement = clock.getElapsedTime() * -0.128;
    normals.offset.set(0, movement);
    roughness.offset.set(0, movement);
  });

  return (
    <mesh castShadow receiveShadow rotation-x={-Math.PI * 0.5}>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        dithering
        normalMap={normals}
        roughnessMap={roughness}
        envMapIntensity={0}
        normalScale={[1, 1]}
        color={[0.015, 0.015, 0.015]}
        roughness={0.7}
        blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
        mixBlur={30} // How much blur mixes with surface roughness (default = 1)
        mixStrength={80} // Strength of the reflections
        mixContrast={1} // Contrast of the reflections
        resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
        mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
        depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
        minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
        maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
        depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
        reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
      />
    </mesh>
  );
};

useTexture.preload([GroundNormal, GroundRoughness]);
