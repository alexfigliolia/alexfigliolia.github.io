import { CreateLazyComponent } from "@figliolia/react-lazy";
import { Routing } from "./Routing";

export const Routes = {
  home: Routing.wrapLoader(
    CreateLazyComponent({
      loader: () => import("Pages/Home"),
    }),
  ),
  work: Routing.wrapLoader(
    CreateLazyComponent({
      loader: () => import("Pages/Work"),
    }),
  ),
  labs: Routing.wrapLoader(
    CreateLazyComponent({
      loader: () => import("Pages/Labs"),
    }),
  ),
  contact: Routing.wrapLoader(
    CreateLazyComponent({
      loader: () => import("Pages/Contact"),
    }),
  ),
  privacypolicy: Routing.wrapLoader(
    CreateLazyComponent({
      loader: () => import("Pages/PrivacyPolicy"),
    }),
  ),
} as const;
