import React, { Component } from "react";
import { Page } from "Components/Page";
import { AlexText } from "Components/AlexText";
import { Menu } from "State/Menu";
import type { PropLess } from "Tools/Types";
import { WorkButton } from "./WorkButton";
import "./styles.scss";

export default class Home extends Component<PropLess> {
  constructor(props: PropLess) {
    super(props);
    Menu.setButtonDelay(3300);
  }

  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <Page name="home">
        <div>
          <AlexText />
          <WorkButton />
        </div>
      </Page>
    );
  }
}
