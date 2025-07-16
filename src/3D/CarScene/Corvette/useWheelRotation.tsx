import { useEffect, useRef } from "react";
import { Group, Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { Scenes } from "Tools/Scenes";

const ROTATION_BLACK_LIST = [
  "polySurface778",
  "polySurface491",
  "polySurface33",
  "polySurface262",
];

export const useWheelRotation = (scene: Group, scale = 110) => {
  const wheelMeshes = useRef<Mesh[]>([]);

  useEffect(() => {
    scene.scale.set(scale, scale, scale);
    scene.position.set(0, 0, 0);
  }, [scene, scale]);

  useEffect(() => {
    const wheels: Mesh[] = [];
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
    wheelMeshes.current = wheels;
  }, [scene]);

  useFrame(({ clock, camera }) => {
    const movement = clock.getElapsedTime() * 2;
    for (const mesh of wheelMeshes.current) {
      mesh.rotation.x = camera.position.x >= 0 ? movement : -movement;
    }
  });
};
