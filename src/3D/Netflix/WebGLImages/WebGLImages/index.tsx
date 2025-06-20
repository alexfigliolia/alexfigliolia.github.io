import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLabsLoader } from "Hooks/useLabsLoader";
import { OptionalChildren } from "Tools/Types";
import { WebGLImagesContextProvider } from "../Context";
import { BackButton } from "./BackButton";
import { BackDrop } from "./BackDrop";
import { Camera } from "./Camera";
import { WebGLImageRenderer } from "./WebGLImageRenderer";
import { WebGLTransitionRenderer } from "./WebGLTransitionRenderer";
import "./styles.scss";

export const WebGLImages = ({ children }: OptionalChildren) => {
  useLabsLoader();
  return (
    <WebGLImagesContextProvider root="#netflixGLTarget">
      {children}
      <div className="webgl-images" aria-hidden>
        <Canvas
          flat
          linear
          style={{ pointerEvents: "none" }}
          gl={{ antialias: true, alpha: true }}>
          <Suspense>
            <Camera />
            <WebGLImageRenderer />
          </Suspense>
        </Canvas>
      </div>
      <div className="webgl-transition-element">
        <Canvas
          flat
          linear
          style={{ pointerEvents: "none" }}
          gl={{ antialias: true, alpha: true }}>
          <Suspense>
            <Camera />
            <WebGLTransitionRenderer />
          </Suspense>
        </Canvas>
      </div>
      <BackButton />
      <BackDrop />
    </WebGLImagesContextProvider>
  );
};
