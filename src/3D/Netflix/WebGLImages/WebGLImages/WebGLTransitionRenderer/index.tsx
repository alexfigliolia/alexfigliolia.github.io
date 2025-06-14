import { Fragment, use, useEffect, useState } from "react";
import { PropLess } from "Tools/Types";
import { IImageState, WebGLImagesContext } from "../../Context";
import { TransitionNode } from "./TransitionNode";

export const WebGLTransitionRenderer = (_: PropLess) => {
  const controller = use(WebGLImagesContext);
  const [state, setState] = useState<IImageState>({
    images: [],
    activeImage: null,
    deactivatingImage: null,
  });

  useEffect(() => {
    const ID = controller.subscribeToImages(setState);
    return () => {
      controller.unsubscribeFromImages(ID);
    };
  }, [controller]);

  return (
    <Fragment>
      {state.images.map(({ width, height, ID, image }) => (
        <TransitionNode
          ID={ID}
          key={ID}
          image={image}
          width={width}
          height={height}
          activating={ID === state.activeImage}
          deactivating={ID === state.deactivatingImage}
        />
      ))}
    </Fragment>
  );
};
