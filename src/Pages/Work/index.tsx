import React, { Component } from "react";
import { PageSwitch } from "@figliolia/page-switch";
import { Page } from "Components/Page";
import { Poster } from "Components/Poster";
import { Work as WorkState } from "State/Work";
import type { PropLess } from "Tools/Types";
import API from "./API";
import "./styles.scss";

export default class Work extends Component<PropLess> {
  private PW?: PageSwitch;

  override componentDidMount() {
    const { index } = WorkState.getState();
    this.PW = new PageSwitch("workSlider", {
      duration: 750,
      direction: 1,
      transition: "scrollCover",
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
