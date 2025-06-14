import { CreateLazyComponent } from "@figliolia/react-lazy";

export const LazyCarScene = CreateLazyComponent({
  loader: () => import("./index").then(v => ({ default: v.CarScene })),
});
