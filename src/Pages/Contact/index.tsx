import React, { Component } from "react";
import { Page } from "Components/Page";
import { ContactText } from "Components/ContactText";
import { ContactButton } from "./ContactButton";
import { Menu } from "State/Menu";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export default class Contact extends Component<PropLess> {
  toNPM: () => void;
  toGithub: () => void;
  constructor(props: PropLess) {
    super(props);
    Menu.setButtonDelay(3500);
    this.emailMe = this.emailMe.bind(this);
    this.toGithub = this.openLink("https://github.com/alexfigliolia");
    this.toNPM = this.openLink("https://www.npmjs.com/~alexfigliolia");
  }

  override shouldComponentUpdate() {
    return false;
  }

  private openLink(link: string) {
    return () => {
      window.open(link, "_blank");
    };
  }

  private emailMe() {
    window.location.href =
      "mailto:alexfigliolia@gmail.com?subject=Hey%20Alex,%20let's%20chat!";
  }

  override render() {
    return (
      <Page name="contact">
        <div>
          <ContactText />
          <div className="buttons">
            <ContactButton text="Email" onClick={this.emailMe} />
            <ContactButton text="Github" onClick={this.toGithub} />
            <ContactButton text="NPM" onClick={this.toNPM} />
          </div>
        </div>
      </Page>
    );
  }
}
