import gsap from "gsap";
import { Fragment, Suspense, useCallback, useEffect, useRef } from "react";
import { Mesh } from "three";
import { CameraControls, Environment, Preload } from "@react-three/drei";
import { useLabsLoader } from "Hooks/useLabsLoader";
import { PropLess } from "Tools/Types";
import { useCustomizer } from "../CustomizerContext";
import Lighting from "../Resources/hdr/warehouse-512.hdr";
import { SkateboardOptions } from "../SkateboardOptions";
import { ENVIRONMENT_COLOR, Floor } from "./Floor";
import { SkateboardModel, SMController } from "./SkateboardModel";
import { useSelectedTexture } from "./useSelectedTexture";

const DEFAULT_METAL_COLOR = "#6f6e6a";

export function PreviewCanvas(_: PropLess) {
  useLabsLoader();
  const floor = useRef<Mesh>(null);
  const controller = useRef<SMController>(null);
  const { camera, wheel, deck, bolt, truck, lookAtDeck } = useCustomizer();

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
    if (!controller?.current?.wheels?.current?.length) {
      return;
    }
    for (const wheelMesh of controller.current.wheels.current) {
      if (wheelMesh) {
        gsap.to(wheelMesh.rotation, {
          x: "+=30",
          duration: 2.5,
          ease: "circ.out",
        });
      }
    }
  }, [wheel]);

  useEffect(() => {
    if (camera.current) {
      lookAtDeck();
    }
  }, [lookAtDeck, camera]);

  return (
    <Fragment>
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
          makeDefault
          ref={camera}
          maxDistance={4}
          minDistance={0.2}
          onStart={onCameraControlStart}
        />
      </Suspense>
      <Preload all />
    </Fragment>
  );
}
