import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { useGLTF } from "@react-three/drei";
import { KTX2 } from "Tools/KTX2";
import Skateboard from "../../Resources/Skateboard.glb";
import { Props, SkateboardGTLF, SMController } from "./types";
import { useViewProperties } from "./useViewProperties";
import { useWheelCache } from "./useWheelCache";

export const SkateboardModel = forwardRef(function SkateboardModel(
  props: Props,
  ref: ForwardedRef<SMController>,
) {
  const { nodes } = useGLTF(Skateboard) as unknown as SkateboardGTLF;
  const [wheelRefs, wheelCaches] = useWheelCache();
  const {
    position,
    boltMaterial,
    deckMaterial,
    truckMaterial,
    wheelMaterial,
    gripTapeMaterial,
  } = useViewProperties(props);

  useImperativeHandle(ref, () => ({ wheels: wheelRefs }), [wheelRefs]);

  return (
    <group
      dispose={null}
      rotation={position.rotation}
      position={position.position}>
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

if (KTX2.isIOS) {
  useGLTF.preload(Skateboard);
}
