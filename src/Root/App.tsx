import React, { Component } from "react";
import { Screen } from "Components/Screen";
import { ScreenLoader } from "Components/ScreenLoader";
import { Routing } from "State/Routing";
import { Screen as ScreenState } from "State/Screen";
import { Preloader } from "Tools/Preloader";
import { TaskQueue } from "Tools/TaskQueue";
import type { PropLess } from "Tools/Types";
import { Router } from "./Router";
import { Routes } from "./Routes";

// @ts-ignore
void window?.screen?.orientation?.lock?.("portrait").catch(() => {});

export class App extends Component<PropLess, State> {
  private preloader = Preloader.loadBackground();
  constructor(props: PropLess) {
    super(props);
    Routes.registerForegroundTask(this.preloader);
  }

  public override componentDidMount() {
    ScreenState.initialize();
    void this.preloader.then(() => {
      Routing.show();
    });
  }

  public override shouldComponentUpdate() {
    return false;
  }

  public override componentWillUnmount() {
    ScreenState.destroy();
    TaskQueue.clearPendingTasks();
  }

  override render() {
    return (
      <Screen
        back={<ScreenLoader />}
        front={<Router default="home" routes={Routes.routes} />}
      />
    );
  }
}

interface State {
  preloaded: boolean;
}
