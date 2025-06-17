import { useGLTF } from "@react-three/drei";
import { KTX2 } from "Tools/KTX2";
import { PropLess } from "Tools/Types";
import Scene from "../Resources/Corvette.glb";
import { useWheelRotation } from "./useWheelRotation";

export const CorvetteModel = (_: PropLess) => {
  const { scene } = useGLTF(Scene);
  useWheelRotation(scene);

  return <primitive object={scene} />;
};

if (KTX2.isIOS) {
  useGLTF.preload(Scene);
}
