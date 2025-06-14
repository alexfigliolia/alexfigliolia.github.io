import { CreateLazyComponent } from "@figliolia/react-lazy";

export const LazyNetflixScene = CreateLazyComponent({
  loader: () => import("./index").then(v => ({ default: v.NetflixScene })),
});
