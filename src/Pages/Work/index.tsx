import React, { Component } from "react";
import { PageSwitch } from "@figliolia/page-switch";
import { Page } from "Components/Page";
import { Poster } from "Components/Poster";
import { Work as WorkState } from "State/Work";
import { Screen } from "State/Screen";
import type { IScreen } from "Models/types";
import API from "./API";
import "./styles.scss";

export default class Work extends Component<Record<string, never>> {
  private PW?: PageSwitch;
  private lastWidth = window.innerWidth;
  private listener = Screen.subscribe(this.swapAnimation.bind(this));

  override componentDidMount() {
    const { index } = WorkState.getState();
    this.PW = new PageSwitch("workSlider", {
      duration: 750,
      direction: 1,
      transition: this.lastWidth > 956 ? "flip3dX" : "flip3dY",
      start: index < 0 ? 0 : index,
      loop: true,
      mousewheel: true,
      mouse: true,
      arrowKey: true,
    });
    this.PW.on("after", index => {
      WorkState.setActive(index);
    });
  }

  override shouldComponentUpdate() {
    return false;
  }

  override componentWillUnmount() {
    if (this.PW) {
      this.PW.destroy();
    }
    Screen.unsubscribe(this.listener);
  }

  private swapAnimation({ width }: IScreen) {
    if (!this.PW || this.lastWidth === width) {
      return;
    }
    if (this.lastWidth >= 957 && width < 957) {
      this.PW.setTransition("flip3dY");
    } else if (this.lastWidth < 957 && width >= 957) {
      this.PW.setTransition("flip3dX");
    }
    this.lastWidth = width;
  }

  override render() {
    return (
      <Page name="work">
        <div id="workSlider">
          {API.map((entry, index) => {
            return <Poster key={entry.name} {...entry} index={index} />;
          })}
        </div>
      </Page>
    );
  }
}
