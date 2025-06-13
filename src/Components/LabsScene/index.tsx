import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { LoadDetector } from "3D/LoadDetector";
import { OptionalChildren } from "Tools/Types";

export const LabsScene = ({ children }: OptionalChildren) => {
  return (
    <Canvas gl={{ antialias: true, alpha: true }}>
      <LoadDetector />
      <Suspense>{children}</Suspense>
    </Canvas>
  );
};
