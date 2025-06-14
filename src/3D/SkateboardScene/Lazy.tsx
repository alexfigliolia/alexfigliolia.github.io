import { CreateLazyComponent } from "@figliolia/react-lazy";

export const LazySkateboardScene = CreateLazyComponent({
  loader: () => import("./index"),
});
