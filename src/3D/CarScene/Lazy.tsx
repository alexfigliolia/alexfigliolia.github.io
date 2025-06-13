import { CreateLazyComponent } from "@figliolia/react-lazy";
import { LabsScene } from "Components/LabsScene";
import { PropLess } from "Tools/Types";

const LazyCarScene = CreateLazyComponent({
  loader: () => import("./index").then(v => ({ default: v.CarScene })),
});

export const CarScene = (_: PropLess) => {
  return (
    <LabsScene>
      <LazyCarScene />
    </LabsScene>
  );
};
