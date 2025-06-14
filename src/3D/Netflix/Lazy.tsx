import { CreateLazyComponent } from "@figliolia/react-lazy";

export const NetflixScene = CreateLazyComponent({
  loader: () => import("./index").then(v => ({ default: v.NetflixScene })),
});
