import React, { Component } from "react";
import { Page } from "Components/Page";
import { PrivacyText } from "Components/PrivacyText";
import { Menu } from "State/Menu";
import type { PropLess } from "Tools/Types";
import { OpenButton } from "./OpenButton";
import { PolicyModal } from "./PolicyModal";
import "./styles.scss";

export default class Privacy extends Component<PropLess> {
  constructor(props: PropLess) {
    super(props);
    Menu.setButtonDelay(3300);
  }

  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <Page name="privacy">
        <div>
          <PrivacyText />
          <OpenButton />
        </div>
        <PolicyModal />
      </Page>
    );
  }
}
