import { Canvas } from "@react-three/fiber";
import { SplitHeading } from "Components/SplitHeading";
import { PropLess } from "Tools/Types";
import { Controls } from "./Controls";
import { CustomizerContextProvider } from "./CustomizerContext";
import { PreviewCanvas } from "./Preview";
import { DEFAULT_CAMERA_POSITION } from "./useCameraControls";
import "./styles.scss";

export default function SkateboardScene(_: PropLess) {
  return (
    <div className="skateboard-scene">
      <CustomizerContextProvider>
        <div className="preview">
          <div className="canvas-container">
            <Canvas
              shadows
              camera={{
                fov: 50,
                position: DEFAULT_CAMERA_POSITION,
              }}>
              <PreviewCanvas />
            </Canvas>
          </div>
        </div>
        <div className="options-menu">
          <SplitHeading text="Build Your Board" />
          <Controls />
        </div>
      </CustomizerContextProvider>
    </div>
  );
}
