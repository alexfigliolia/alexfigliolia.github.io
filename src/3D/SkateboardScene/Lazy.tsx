import { CreateLazyComponent } from "@figliolia/react-lazy";

export const SkateboardScene = CreateLazyComponent({
  loader: () => import("./index"),
});
