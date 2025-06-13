import gsap from "gsap";
import { Fragment, Suspense, useCallback, useEffect, useRef } from "react";
import { Mesh, Vector3 } from "three";
import { CameraControls, Environment, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { LoadDetector } from "3D/LoadDetector";
import { PropLess } from "Tools/Types";
import { useCustomizer } from "../CustomizerContext";
import Lighting from "../Resources/hdr/warehouse-512.hdr";
import { SkateboardOptions } from "../SkateboardOptions";
import { ENVIRONMENT_COLOR, Floor } from "./Floor";
import { SkateboardModel, SMController } from "./SkateboardModel";
import { useCameraControls } from "./useCameraControls";
import { useSelectedTexture } from "./useSelectedTexture";

const DEFAULT_METAL_COLOR = "#6f6e6a";

export const PreviewCanvas = (_: PropLess) => {
  return (
    <Canvas shadows camera={{ position: [2.5, 1, 0], fov: 50 }}>
      <Preview />
    </Canvas>
  );
};

function Preview(_: PropLess) {
  const floor = useRef<Mesh>(null);
  const controller = useRef<SMController>(null);
  const [camera, setCameraControls] = useCameraControls();

  const { wheel, deck, bolt, truck } = useCustomizer();

  const deckTexture = useSelectedTexture(SkateboardOptions.DECKS, deck);
  const wheelTexture = useSelectedTexture(SkateboardOptions.WHEELS, wheel);

  const truckColor = truck ?? DEFAULT_METAL_COLOR;
  const boltColor = bolt ?? DEFAULT_METAL_COLOR;

  const onCameraControlStart = useCallback(() => {
    if (
      !camera.current ||
      !floor.current ||
      camera.current.colliderMeshes.length
    ) {
      return;
    }
    camera.current.colliderMeshes = [floor.current];
  }, [camera]);

  useEffect(() => {
    if (truck) {
      setCameraControls(
        new Vector3(-0.12, 0.29, 0.57),
        new Vector3(0.1, 0.25, 0.9),
      );
    }
  }, [truck, setCameraControls]);

  useEffect(() => {
    if (wheel) {
      setCameraControls(
        new Vector3(-0.08, 0.54, 0.64),
        new Vector3(0.09, 1, 0.9),
      );
    }
  }, [wheel, setCameraControls]);

  useEffect(() => {
    if (bolt) {
      setCameraControls(
        new Vector3(-0.25, 0.3, 0.62),
        new Vector3(-0.5, 0.35, 0.8),
      );
    }
  }, [bolt, setCameraControls]);

  useEffect(() => {
    if (deck) {
      setCameraControls(new Vector3(0, 0.3, 0), new Vector3(1.5, 0.8, 0));
    }
  }, [deck, setCameraControls]);

  useEffect(() => {
    if (!controller?.current?.wheels?.current?.length) {
      return;
    }
    for (const wheel of controller.current.wheels.current) {
      if (wheel) {
        gsap.to(wheel.rotation, {
          x: "+=30",
          duration: 2.5,
          ease: "circ.out",
        });
      }
    }
  }, [wheel]);

  return (
    <Fragment>
      <LoadDetector />
      <Suspense fallback={null}>
        <Environment files={Lighting} environmentIntensity={0.6} />
        <directionalLight
          castShadow
          lookAt={[0, 0, 0]}
          position={[1, 1, 1]}
          intensity={1.6}
        />
        <fog attach="fog" args={[ENVIRONMENT_COLOR, 3, 10]} />
        <color attach="background" args={[ENVIRONMENT_COLOR]} />
        <Floor />
        <mesh rotation={[-Math.PI / 2, 0, 0]} ref={floor}>
          <planeGeometry args={[6, 6]} />
          <meshBasicMaterial visible={false} />
        </mesh>
        <SkateboardModel
          pos="side"
          ref={controller}
          boltColor={boltColor}
          truckColor={truckColor}
          deckTexture={deckTexture}
          wheelTexture={wheelTexture}
        />
        <CameraControls
          ref={camera}
          minDistance={0.2}
          maxDistance={4}
          onStart={onCameraControlStart}
        />
      </Suspense>
      <Preload all />
    </Fragment>
  );
}
