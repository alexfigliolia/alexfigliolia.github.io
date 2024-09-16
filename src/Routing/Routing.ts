import type { CreateLazyComponent } from "@figliolia/react-lazy";
import type { LazyComponent } from "@figliolia/react-lazy/dist/types/types";
import { Preloader } from "Tools/Preloader";
import type { PropLess } from "Tools/Types";
import type { ImagesPreloaded } from "./types";

export class Routing {
  private static preloaded: ImagesPreloaded = {
    small: false,
    large: false,
  };
  private static foregroundTasks: Promise<any>[] = [];

  public static registerForegroundTask(task: Promise<any>) {
    this.foregroundTasks.push(task);
  }

  public static wrapLoader(
    loader: ReturnType<typeof CreateLazyComponent<PropLess>>,
  ) {
    return () => {
      return new Promise<LazyComponent<PropLess>>(resolve => {
        const promises: [
          component: Promise<LazyComponent<PropLess>>,
          ...rest: Promise<void>[],
        ] = [loader.preload(), ...this.foregroundTasks];
        const scope = Preloader.screenScope();
        if (!this.preloaded[scope]) {
          this.preloaded[scope] = true;
          promises.push(Preloader.initialize());
        }
        void Promise.all(promises).then(([component]) => {
          this.foregroundTasks = [];
          resolve(component);
        });
      });
    };
  }
}
