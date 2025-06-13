import { CreateLazyComponent } from "@figliolia/react-lazy";
import { Routing } from "Routing/Routing";

export class Routes {
  public static readonly home = Routing.wrapLoader(
    CreateLazyComponent({
      loader: () => import("Pages/Home"),
    }),
  );
  public static readonly work = Routing.wrapLoader(
    CreateLazyComponent({
      loader: () => import("Pages/Work"),
    }),
  );
  public static readonly contact = Routing.wrapLoader(
    CreateLazyComponent({
      loader: () => import("Pages/Contact"),
    }),
  );
  public static readonly privacypolicy = Routing.wrapLoader(
    CreateLazyComponent({
      loader: () => import("Pages/PrivacyPolicy"),
    }),
  );
}
