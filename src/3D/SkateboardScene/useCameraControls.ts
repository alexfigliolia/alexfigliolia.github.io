import { useCallback, useMemo, useRef } from "react";
import { Vector3 } from "three";
import { CameraControls } from "@react-three/drei";

export const DEFAULT_CAMERA_LOOK_AT = [0, 0.3, 0] as const;
export const DEFAULT_CAMERA_POSITION = [2.5, 0.75, 0] as const;

export const useCameraControls = () => {
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

  const lookAtTruck = useCallback(() => {
    setCameraControls(new Vector3(0, 0.29, 0.5), new Vector3(0.4, 0.3, 1));
  }, [setCameraControls]);

  const lookAtWheel = useCallback(() => {
    setCameraControls(new Vector3(0.2, 0.54, 0.65), new Vector3(0.4, 1, 0.6));
  }, [setCameraControls]);

  const lookAtBolts = useCallback(() => {
    setCameraControls(
      new Vector3(0.15, 0.3, 0.62),
      new Vector3(-0.75, 0.35, 0.8),
    );
  }, [setCameraControls]);

  const lookAtDeck = useCallback(() => {
    setCameraControls(
      new Vector3(...DEFAULT_CAMERA_LOOK_AT),
      new Vector3(...DEFAULT_CAMERA_POSITION),
    );
  }, [setCameraControls]);

  return useMemo(
    () => ({ camera, lookAtBolts, lookAtDeck, lookAtTruck, lookAtWheel }),
    [lookAtBolts, lookAtDeck, lookAtTruck, lookAtWheel],
  );
};
