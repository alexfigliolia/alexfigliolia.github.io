import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { OptionalChildren } from "Tools/Types";

export const Portal = ({ children, nodeID }: Props) => {
  const [target, setTarget] = useState<HTMLElement>();

  useLayoutEffect(() => {
    if (!nodeID) {
      setTarget(document.body);
      return;
    }
    const node = document.getElementById(nodeID);
    if (!node) {
      throw new Error(`A portal node with the ID "${nodeID}" was not found`);
    }
    setTarget(node);
  }, [nodeID]);

  if (!target || !children) {
    return null;
  }
  return createPortal(children, target);
};

interface Props extends OptionalChildren {
  nodeID?: string;
}
