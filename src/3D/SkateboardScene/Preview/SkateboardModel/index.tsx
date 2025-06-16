import {
  ForwardedRef,
  forwardRef,
  RefObject,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { type Mesh, Object3D, Texture } from "three";
import { GLTF } from "three-stdlib";
import { useGLTF } from "@react-three/drei";
import Skateboard from "../../Resources/Skateboard.glb";
import { useBolts } from "./useBolts";
import { useDeck } from "./useDeck";
import { useGripTape } from "./useGripTape";
import { useTrucks } from "./useTrucks";
import { useWheels } from "./useWheels";

type GLTFResult = GLTF & {
  nodes: {
    GripTape: Mesh;
    Wheel1: Mesh;
    Wheel2: Mesh;
    Deck: Mesh;
    Wheel4: Mesh;
    Bolts: Mesh;
    Wheel3: Mesh;
    Baseplates: Mesh;
    Truck1: Mesh;
    Truck2: Mesh;
  };
};

export const SkateboardModel = forwardRef(function SkateboardModel(
  { wheelTexture, deckTexture, boltColor, truckColor, pos = "upright" }: Props,
  ref: ForwardedRef<SMController>,
) {
  const { nodes } = useGLTF(Skateboard) as unknown as GLTFResult;
  const wheelRefs = useRef<Object3D[]>([]);
  const gripTapeMaterial = useGripTape();
  const boltMaterial = useBolts(boltColor);
  const truckMaterial = useTrucks(truckColor);
  const deckMaterial = useDeck(deckTexture);
  const wheelMaterial = useWheels(wheelTexture);

  const cacheObjectReference = useCallback(
    (index: number, target: RefObject<Object3D[]>) =>
      (node: Object3D | null) => {
        if (node) {
          target.current[index] = node;
        }
      },
    [],
  );

  const wheelCaches = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => cacheObjectReference(i, wheelRefs)),
    [cacheObjectReference],
  );

  const positions = useMemo(
    () =>
      ({
        side: { rotation: [0, 0, Math.PI / 2], position: [0.25, 0.295, 0] },
        upright: { rotation: [0, 0, 0], position: [0, 0, 0] },
      }) as const,
    [],
  );

  useImperativeHandle(ref, () => ({ wheels: wheelRefs }), [wheelRefs]);

  return (
    <group
      dispose={null}
      rotation={positions[pos].rotation}
      position={positions[pos].position}>
      <group name="Scene">
        <mesh
          name="GripTape"
          castShadow
          receiveShadow
          material={gripTapeMaterial}
          geometry={nodes.GripTape.geometry}
          position={[0, 0.286, -0.002]}
        />
        <mesh
          name="Wheel1"
          castShadow
          receiveShadow
          ref={wheelCaches[0]}
          geometry={nodes.Wheel1.geometry}
          material={wheelMaterial}
          position={[0.238, 0.086, 0.635]}
        />
        <mesh
          name="Wheel2"
          castShadow
          receiveShadow
          ref={wheelCaches[1]}
          geometry={nodes.Wheel2.geometry}
          material={wheelMaterial}
          position={[-0.237, 0.086, 0.635]}
        />
        <mesh
          name="Deck"
          castShadow
          receiveShadow
          geometry={nodes.Deck.geometry}
          material={deckMaterial}
          position={[0, 0.271, -0.002]}
        />
        <mesh
          name="Wheel4"
          castShadow
          receiveShadow
          ref={wheelCaches[3]}
          geometry={nodes.Wheel4.geometry}
          material={wheelMaterial}
          position={[-0.238, 0.086, -0.635]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="Bolts"
          castShadow
          receiveShadow
          geometry={nodes.Bolts.geometry}
          material={boltMaterial}
          position={[0, 0.198, 0]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="Wheel3"
          castShadow
          receiveShadow
          ref={wheelCaches[2]}
          geometry={nodes.Wheel3.geometry}
          material={wheelMaterial}
          position={[0.237, 0.086, -0.635]}
          rotation={[Math.PI, 0, Math.PI]}
        />
        <mesh
          name="Baseplates"
          castShadow
          receiveShadow
          geometry={nodes.Baseplates.geometry}
          material={truckMaterial}
          position={[0, 0.211, 0]}
        />
        <mesh
          name="Truck1"
          castShadow
          receiveShadow
          geometry={nodes.Truck1.geometry}
          material={truckMaterial}
          position={[0, 0.101, -0.617]}
        />
        <mesh
          name="Truck2"
          castShadow
          receiveShadow
          geometry={nodes.Truck2.geometry}
          material={truckMaterial}
          position={[0, 0.101, 0.617]}
          rotation={[Math.PI, 0, Math.PI]}
        />
      </group>
    </group>
  );
});

useGLTF.preload(Skateboard);

export interface Props {
  boltColor?: string;
  truckColor?: string;
  deckTexture: Texture;
  wheelTexture: Texture;
  pos?: "upright" | "side";
}

export interface SMController {
  wheels: RefObject<Object3D[]>;
}
