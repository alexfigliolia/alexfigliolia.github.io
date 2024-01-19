import React, { Component } from "react";
import "./styles.scss";

export class PrivacyText extends Component {
  static privacy = "PRIVACY".split("");

  override shouldComponentUpdate() {
    return false;
  }

  override render() {
    return (
      <div className="privacy-text">
        <h1 id="privacyText">
          {PrivacyText.privacy.map((letter, i) => {
            return (
              <div className="text-letter" key={`${letter}-${i}`}>
                {letter}
              </div>
            );
          })}
        </h1>
      </div>
    );
  }
}
