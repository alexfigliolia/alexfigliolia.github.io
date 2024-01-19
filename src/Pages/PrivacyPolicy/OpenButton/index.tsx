import React, { Component } from "react";
import { Button3D } from "Components/Button3D";
import type { IRouting } from "Models/types";
import { connectRouter } from "State/Routing";
import { TaskQueue } from "Tools/TaskQueue";
import "./styles.scss";
import { Privacy } from "State/Privacy";

export class OpenButtonRenderer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { reset: false };
    this.toggle = this.toggle.bind(this);
  }

  override UNSAFE_componentWillReceiveProps({ active }: Props) {
    if (!this.props.active && active) {
      TaskQueue.deferTask(() => {
        this.setState({ reset: true });
      }, 3100);
    }
  }

  override shouldComponentUpdate({ active }: Props, { reset }: State) {
    if (active !== this.props.active) return true;
    if (reset !== this.state.reset) return true;
    return false;
  }

  private toggle() {
    Privacy.toggle();
  }

  override render() {
    const { reset } = this.state;
    const { active } = this.props;
    return (
      <div
        className={`open-button ${active ? " active" : ""} ${
          reset ? "reset" : ""
        }`}>
        <Button3D text="Policy" onClick={this.toggle} />
      </div>
    );
  }
}

interface Props {
  active: boolean;
}

interface State {
  reset: boolean;
}

const mSTP = ({ screenActive }: IRouting) => {
  return { active: screenActive };
};

export const OpenButton = connectRouter(mSTP)(OpenButtonRenderer);
