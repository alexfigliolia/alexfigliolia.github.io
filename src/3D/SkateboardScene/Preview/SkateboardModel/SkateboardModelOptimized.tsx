import { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { useGLTF } from "@react-three/drei";
import { KTX2 } from "Tools/KTX2";
import Skateboard from "../../Resources/Skateboard-optimized.glb";
import { Props, SkateboardGTLF, SMController } from "./types";
import { useViewProperties } from "./useViewProperties";
import { useWheelCache } from "./useWheelCache";

export const SkateboardModelOptimized = forwardRef(
  function SkateboardModelOptimized(
    props: Props,
    ref: ForwardedRef<SMController>,
  ) {
    const { nodes } = useGLTF(
      Skateboard,
      undefined,
      undefined,
      KTX2.extendGLTF,
    ) as unknown as SkateboardGTLF;
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
        <mesh
          castShadow
          receiveShadow
          material={gripTapeMaterial}
          geometry={nodes.GripTape.geometry}
          position={[0, 0.306, -0.002]}
          scale={1.149}
        />
        <mesh
          castShadow
          receiveShadow
          ref={wheelCaches[0]}
          material={wheelMaterial}
          geometry={nodes.Wheel1.geometry}
          position={[0.242, 0.086, 0.635]}
          scale={0.077}
        />
        <mesh
          castShadow
          receiveShadow
          ref={wheelCaches[1]}
          material={wheelMaterial}
          geometry={nodes.Wheel2.geometry}
          position={[-0.241, 0.086, 0.635]}
          scale={0.077}
        />
        <mesh
          castShadow
          receiveShadow
          material={deckMaterial}
          geometry={nodes.Deck.geometry}
          position={[0, 0.293, -0.002]}
          scale={1.163}
        />
        <mesh
          castShadow
          receiveShadow
          ref={wheelCaches[2]}
          material={wheelMaterial}
          geometry={nodes.Wheel4.geometry}
          position={[-0.242, 0.086, -0.635]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.077}
        />
        <mesh
          castShadow
          receiveShadow
          material={boltMaterial}
          geometry={nodes.Bolts.geometry}
          position={[0, 0.164, 0]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.703}
        />
        <mesh
          castShadow
          receiveShadow
          ref={wheelCaches[3]}
          material={wheelMaterial}
          geometry={nodes.Wheel3.geometry}
          position={[0.241, 0.086, -0.635]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.077}
        />
        <mesh
          castShadow
          receiveShadow
          material={truckMaterial}
          geometry={nodes.Baseplates.geometry}
          position={[0, 0.194, 0]}
          scale={0.718}
        />
        <mesh
          castShadow
          receiveShadow
          material={truckMaterial}
          geometry={nodes.Truck1.geometry}
          position={[0, 0.125, -0.595]}
          scale={0.285}
        />
        <mesh
          castShadow
          receiveShadow
          material={truckMaterial}
          geometry={nodes.Truck2.geometry}
          position={[0, 0.125, 0.595]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={0.285}
        />
      </group>
    );
  },
);

if (!KTX2.isIOS) {
  useGLTF.preload(Skateboard, undefined, undefined, KTX2.extendGLTF);
}
