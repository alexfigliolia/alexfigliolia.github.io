import React, { Component } from "react";
import type { ReactiveStates } from "@figliolia/react-galena";
import { Menu } from "State/Menu";
import { connectMenuAndPrivacy } from "State/Connections";
import { Privacy } from "State/Privacy";
import "./styles.scss";

class BurgerButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  public override shouldComponentUpdate({ menuOpen, policyOpen }: Props) {
    if (menuOpen !== this.props.menuOpen) return true;
    if (policyOpen !== this.props.policyOpen) return true;
    return false;
  }

  private toggle() {
    if (this.props.policyOpen) {
      return Privacy.toggle();
    }
    Menu.toggle();
  }

  override render() {
    const { menuOpen, policyOpen } = this.props;
    return (
      <button
        className={`burger ${menuOpen ? " open" : ""} ${
          policyOpen ? "policy" : ""
        }`}
        onClick={this.toggle}>
        <div>
          <span className="top" />
          <span className="middle" />
          <span className="bottom" />
        </div>
      </button>
    );
  }
}

interface Props {
  menuOpen: boolean;
  policyOpen: boolean;
}

const mSTP = ([{ menuOpen }, { open: policyOpen }]: ReactiveStates<
  typeof connectMenuAndPrivacy
>) => {
  return { menuOpen: menuOpen || policyOpen, policyOpen };
};

export const Burger = connectMenuAndPrivacy(mSTP)(BurgerButton);
