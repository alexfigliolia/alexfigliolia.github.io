import { useContext, useEffect, useState } from "react";
import { ImageID, WebGLImagesContext } from "3D/Netflix/WebGLImages/Context";
import { WebGLTransitionElement } from "./WebGLTransitionElement";

export const TransitionNode = (props: Props) => {
  const controller = useContext(WebGLImagesContext);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const ID = controller.subscribe(props.ID, e => {
      if (e.type === "activation") {
        setMouseCoordinates(e.position);
      }
    });
    return () => {
      controller.unsubscribe(props.ID, ID);
    };
  }, [props.ID, controller]);

  if (!props.activating && !props.deactivating) {
    return null;
  }

  return (
    <WebGLTransitionElement {...props} mouseCoordinates={mouseCoordinates} />
  );
};

export interface Props {
  ID: ImageID;
  image: HTMLImageElement;
  width: number;
  height: number;
  activating: boolean;
  deactivating: boolean;
}
