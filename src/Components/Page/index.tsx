import type { ReactNode } from "react";
import React, { Component } from "react";
import { Ripples } from "@figliolia/ripples";
import type { ReactiveStates } from "@figliolia/react-galena";
import { connectNavigation } from "State/Connections";
import "./styles.scss";

class PageRenderer extends Component<Props> {
  private Ripples?: Ripples;
  private Node?: HTMLDivElement;
  constructor(props: Props) {
    super(props);
    this.cacheInstance = this.cacheInstance.bind(this);
  }

  override componentDidMount() {
    if (!this.Node) {
      return;
    }
    this.Ripples = new Ripples(this.Node, {
      resolution: 512,
      dropRadius: 10,
      perturbance: 0.02,
    });
  }

  override componentWillUnmount() {
    if (this.Ripples) {
      this.Ripples.destroy();
    }
  }

  private cacheInstance(node: HTMLDivElement) {
    this.Node = node;
  }

  override render() {
    const { name, height, width, active, children } = this.props;
    return (
      <main
        id="page"
        ref={this.cacheInstance}
        style={{ height, width }}
        className={`page ${name} ${active ? "active" : ""}`}>
        <div className="content" style={{ height, width }}>
          {children}
        </div>
      </main>
    );
  }
}

interface Props {
  name: string;
  width: number;
  height: number;
  active: boolean;
  children: ReactNode;
}

const mSTP = ([{ width, height }, { screenActive }]: ReactiveStates<
  typeof connectNavigation
>) => {
  return { width, height, active: screenActive };
};

export const Page = connectNavigation(mSTP)(PageRenderer);
