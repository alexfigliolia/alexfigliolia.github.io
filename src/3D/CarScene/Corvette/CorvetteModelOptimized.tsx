import { useGLTF } from "@react-three/drei";
import { KTX2 } from "Tools/KTX2";
import { PropLess } from "Tools/Types";
import Scene from "../Resources/Corvette-optimized.glb";
import { useWheelRotation } from "./useWheelRotation";

export const CorvetteModelOptimized = (_: PropLess) => {
  const { scene } = useGLTF(Scene, undefined, undefined, KTX2.extendGLTF);
  useWheelRotation(scene, 130);

  return <primitive object={scene} />;
};

if (!KTX2.isIOS) {
  useGLTF.preload(Scene, undefined, undefined, KTX2.extendGLTF);
}
