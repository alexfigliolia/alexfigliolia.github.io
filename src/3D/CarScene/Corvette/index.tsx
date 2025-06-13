import { useEffect, useState } from "react";
import { Mesh } from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Scenes } from "Tools/Scenes";
import { PropLess } from "Tools/Types";
import Scene from "../Resources/corvette/scene.gltf";

const ROTATION_BLACK_LIST = [
  "polySurface778",
  "polySurface491",
  "polySurface33",
  "polySurface262",
];

export const Corvette = (_: PropLess) => {
  const { scene } = useGLTF(Scene);
  const [wheelMeshes, setWheelMeshes] = useState<Mesh[]>([]);

  useEffect(() => {
    const wheels: Mesh[] = [];
    scene.scale.set(110, 110, 110);
    scene.position.set(0, 0, 0);
    Scenes.forEachMesh(scene, mesh => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      Scenes.forEachMaterial(mesh.material, material => {
        material.envMapIntensity = 20;
      });
      if (
        mesh.name.includes("Wheel") &&
        !ROTATION_BLACK_LIST.some(n => mesh.name.startsWith(n))
      ) {
        wheels.push(mesh);
      }
    });
    setWheelMeshes(wheels);
  }, [scene]);

  useFrame(({ clock }) => {
    const movement = clock.getElapsedTime() * 2;
    for (const mesh of wheelMeshes) {
      mesh.rotation.x = movement;
    }
  });

  return <primitive object={scene} />;
};

useGLTF.preload(Scene);
