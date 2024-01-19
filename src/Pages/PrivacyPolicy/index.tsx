import React, { Component } from "react";
import { Menu } from "State/Menu";
import { Page } from "Components/Page";
import { PrivacyText } from "Components/PrivacyText";
import { OpenButton } from "./OpenButton";
import { PolicyModal } from "./PolicyModal";
import "./styles.scss";

export default class Privacy extends Component<Props> {
  constructor(props: Props) {
    super(props);
    Menu.setButtonDelay(3500);
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

type Props = Record<string, never>;
