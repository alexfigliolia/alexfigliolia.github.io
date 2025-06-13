import { SplitHeading } from "Components/SplitHeading";
import { PropLess } from "Tools/Types";
import { Controls } from "./Controls";
import { CustomizerContextProvider } from "./CustomizerContext";
import { PreviewCanvas } from "./Preview";
import "./styles.scss";

export default function SkateboardScene(_: PropLess) {
  return (
    <div className="skateboard-scene">
      <CustomizerContextProvider>
        <div className="preview">
          <div className="canvas-container">
            <PreviewCanvas />
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
