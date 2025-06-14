import { Fragment, use, useEffect, useState } from "react";
import { PropLess } from "Tools/Types";
import { IImage, WebGLImagesContext } from "../../Context";
import { WebGLImageMesh } from "./WebGLImageMesh";

export const WebGLImageRenderer = (_: PropLess) => {
  const controller = use(WebGLImagesContext);
  const [state, setState] = useState<IImage[]>([]);

  useEffect(() => {
    const ID = controller.subscribeToImages(({ images }) => {
      setState(images);
    });
    return () => {
      controller.unsubscribeFromImages(ID);
    };
  }, [controller]);

  return (
    <Fragment>
      {state.map(({ width, height, ID, image }) => (
        <WebGLImageMesh
          ID={ID}
          key={ID}
          image={image}
          width={width}
          height={height}
        />
      ))}
    </Fragment>
  );
};
