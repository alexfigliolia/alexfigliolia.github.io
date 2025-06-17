import { ForwardedRef, forwardRef } from "react";
import { KTX2 } from "Tools/KTX2";
import { SkateboardModel as SkateboardModelIOS } from "./SkateboardModel";
import { SkateboardModelOptimized } from "./SkateboardModelOptimized";
import { Props, SMController } from "./types";

export const SkateboardModel = forwardRef(function SkateboardModel(
  props: Props,
  ref: ForwardedRef<SMController>,
) {
  if (KTX2.isIOS) {
    return <SkateboardModelIOS ref={ref} {...props} />;
  }
  return <SkateboardModelOptimized ref={ref} {...props} />;
});

export * from "./types";
