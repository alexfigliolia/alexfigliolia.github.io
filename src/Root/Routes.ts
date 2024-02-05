import { Preloader } from "Tools/Preloader";
import type { ComponentModule, ImagesPreloaded, WrappedLoader } from "./types";

export class Routes {
  private static preloaded: ImagesPreloaded = {
    small: false,
    large: false,
  };
  private static foregroundTasks: Promise<any>[] = [];
  public static readonly routes = {
    home: this.wrapLoader(() => import("Pages/Home")),
    work: this.wrapLoader(() => import("Pages/Work")),
    contact: this.wrapLoader(() => import("Pages/Contact")),
    privacypolicy: this.wrapLoader(() => import("Pages/PrivacyPolicy")),
  };

  public static registerForegroundTask(task: Promise<any>) {
    this.foregroundTasks.push(task);
  }

  private static wrapLoader(loader: () => Promise<ComponentModule>) {
    return () =>
      new Promise<ComponentModule>(resolve => {
        void Promise.all(this.foregroundTasks).then(() => {
          this.foregroundTasks = [];
          const promises: WrappedLoader = [loader()];
          const scope = Preloader.screenScope();
          if (!this.preloaded[scope]) {
            this.preloaded[scope] = true;
            promises.push(Preloader.initialize());
          }
          void Promise.all(promises).then(([component]) => {
            resolve(component);
          });
        });
      });
  }
}
