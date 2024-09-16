import { Menu } from "State/Menu";
import variables from "Styles/exports.module.scss";
import { TaskQueue } from "Tools/TaskQueue";
import { BaseModel } from "./BaseModel";
import type { IPageController } from "./types";

export class PageControllerModel extends BaseModel<IPageController> {
  static screenInnerTransition = this.sliceUnits(
    variables.screenInnerTransition,
  );
  static smallScreenScale = this.sliceUnits(variables.smallScreenScale);
  static largeScreenScale = this.sliceUnits(variables.largeScreenScale);
  constructor() {
    super("Page Controller", {
      loading: true,
      routeName: "home",
      screenActive: false,
      classes: "screen shrink flip hidden",
    });
  }

  public show() {
    this.update(state => {
      state.classes = state.classes.replaceAll(" hidden", "");
    });
  }

  public flipScreen() {
    return new Promise<void>(resolve => {
      this.loading(true);
      this.shrink();
      TaskQueue.deferTask(() => {
        this.flip();
        TaskQueue.deferTask(() => {
          Menu.close();
          this.activateScreen(false);
          resolve();
        }, PageControllerModel.screenInnerTransition);
      }, PageControllerModel.shrinkDuration);
    });
  }

  public initialize(wait = 1000, cb?: () => void) {
    TaskQueue.deferTask(() => {
      this.unFlip();
      this.loading(false);
      TaskQueue.deferTask(() => {
        this.unShrink();
        TaskQueue.deferTask(() => {
          this.activateScreen();
          cb?.();
        }, PageControllerModel.shrinkDuration);
      }, PageControllerModel.screenInnerTransition);
    }, wait);
  }

  public loading(loading: boolean) {
    this.update(state => {
      state.loading = loading;
    });
  }

  public shrink() {
    this.update(state => {
      state.classes = state.classes + " shrink";
    });
  }

  public unShrink() {
    this.update(state => {
      state.classes = state.classes.replaceAll(" shrink", "");
    });
  }

  public flip() {
    this.update(state => {
      state.classes = state.classes + " flip";
    });
  }

  public unFlip() {
    this.update(state => {
      state.classes = state.classes.replaceAll(" flip", "");
    });
  }

  private activateScreen(active = true) {
    this.update(state => {
      state.screenActive = active;
    });
  }

  public setRouteName(hash: string) {
    this.update(state => {
      state.routeName = hash;
    });
  }

  public static get shrinkAndFlipDuration() {
    return this.shrinkDuration + this.screenInnerTransition;
  }

  private static get shrinkDuration() {
    if (window.innerWidth < 957) {
      return this.smallScreenScale;
    }
    return this.largeScreenScale;
  }

  private static sliceUnits(duration: string) {
    return parseInt(duration.slice(0, -2));
  }
}
