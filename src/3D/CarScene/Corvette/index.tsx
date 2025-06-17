import { KTX2 } from "Tools/KTX2";
import { PropLess } from "Tools/Types";
import { CorvetteModel } from "./CorvetteModel";
import { CorvetteModelOptimized } from "./CorvetteModelOptimized";

export const Corvette = (_: PropLess) => {
  if (KTX2.isIOS) {
    return <CorvetteModel />;
  }
  return <CorvetteModelOptimized />;
};
