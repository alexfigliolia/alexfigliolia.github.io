import { RefObject, useCallback, useRef } from "react";
import { Vector3 } from "three";
import { CameraControls } from "@react-three/drei";

export const useCameraControls = (): [
  RefObject<CameraControls | null>,
  (t: Vector3, p: Vector3) => void,
] => {
  const camera = useRef<CameraControls>(null);

  const setCameraControls = useCallback(
    (target: Vector3, position: Vector3) => {
      if (!camera.current) {
        return;
      }
      void camera.current.setTarget(target.x, target.y, target.z, true);
      void camera.current.setPosition(position.x, position.y, position.z, true);
    },
    [camera],
  );

  return [camera, setCameraControls];
};
