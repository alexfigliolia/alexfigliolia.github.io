import { CreateLazyComponent } from "@figliolia/react-lazy";

export const LazyMagazineScene = CreateLazyComponent({
  loader: () => import("./index").then(v => ({ default: v.MagazineScene })),
});
