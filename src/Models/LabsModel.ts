import { ReactNode } from "react";
import { State } from "@figliolia/galena";
import { Timeout } from "@figliolia/react-hooks";

export class LabsModel extends State<ILabs> {
  private timeout = new Timeout();
  constructor() {
    super("Labs", {
      Scene: undefined,
      loading: false,
      ready: false,
    });
  }

  public onLoad() {
    this.update(state => {
      state.loading = false;
      state.ready = true;
    });
  }

  public activateScene(Scene: ReactNode) {
    this.update(state => {
      state.loading = true;
      state.Scene = Scene;
    });
  }

  public deactivateScene = () => {
    this.update(state => {
      state.ready = false;
    });
    this.timeout.execute(() => {
      this.update(state => {
        state.Scene = undefined;
      });
    }, 1000);
  };

  public destroy() {
    this.timeout.abortAll();
    this.reset();
  }
}

export interface ILabs {
  ready: boolean;
  loading: boolean;
  Scene?: ReactNode;
}
