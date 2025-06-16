import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLabsLoader } from "Hooks/useLabsLoader";
import { OptionalChildren } from "Tools/Types";

export const LabsScene = ({ children }: OptionalChildren) => {
  return (
    <Canvas gl={{ antialias: true, alpha: true }}>
      <Labs3DElements>{children}</Labs3DElements>
    </Canvas>
  );
};

function Labs3DElements({ children }: OptionalChildren) {
  useLabsLoader();
  return <Suspense>{children}</Suspense>;
}
