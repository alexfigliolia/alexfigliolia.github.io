import React, { Component } from "react";
import { Burger } from "Components/Burger";
import { Routing } from "State/Routing";
import { RoutingAndMenu } from "State/States";
import type { IRoutingAndMenu } from "Models/types";
import { TaskQueue } from "Tools/TaskQueue";
import type { PropLess } from "Tools/Types";

export class MenuButton extends Component<PropLess, State> {
  listener?: string;
  state: State = { active: false };
  constructor(props: PropLess) {
    super(props);
    this.subscription = this.subscription.bind(this);
    this.listener = RoutingAndMenu.subscribeAll(this.subscription);
  }

  override shouldComponentUpdate(_: PropLess, { active }: State) {
    return active !== this.state.active;
  }

  override componentWillUnmount() {
    if (this.listener) {
      Routing.unsubscribe(this.listener);
      this.listener = undefined;
    }
  }

  private subscription({ Routing, Menu }: IRoutingAndMenu) {
    const { active } = this.state;
    const { buttonDelay } = Menu.getState();
    const { screenActive } = Routing.getState();
    if (!screenActive && active) {
      return this.setState({ active: false });
    }
    if (screenActive && !active) {
      TaskQueue.deferTask(() => {
        this.setState({ active: true });
      }, buttonDelay);
    }
  }

  override render() {
    return (
      <div className={`menu-button ${this.state.active ? " active" : ""}`}>
        <Burger />
      </div>
    );
  }
}

interface State {
  active: boolean;
}
