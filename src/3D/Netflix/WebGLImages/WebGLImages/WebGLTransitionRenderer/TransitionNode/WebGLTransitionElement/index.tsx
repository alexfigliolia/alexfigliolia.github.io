import { use, useEffect, useRef } from "react";
import { Vector2 } from "three";
import { useController } from "@figliolia/react-hooks";
import { GLWaveImage } from "3D/Netflix/GLWaveImage";
import { WebGLImagesContext } from "3D/Netflix/WebGLImages/Context";
import { selectDimensions, useScreen } from "State/Screen";
import { Point } from "Tools/Types";
import type { Props as WebGLImageProps } from "../index";
import { GeometryController } from "./Geometry";

export const WebGLTransitionElement = ({
  ID,
  image,
  width,
  height,
  activating,
  deactivating,
  mouseCoordinates,
  ...rest
}: Props) => {
  const controller = use(WebGLImagesContext);
  const geometry = useController(new GeometryController());
  const cachedImage = useRef(controller.getImageData(ID));
  const [screenWidth, screenHeight] = useScreen(selectDimensions);

  useEffect(() => {
    geometry.resize();
  }, [screenWidth, screenHeight, geometry]);

  useEffect(() => {
    geometry.withMaterial(material => {
      const { x, y } = mouseCoordinates;
      material.uniforms.uHoverState.value = 1;
      material.uniforms.uMouseCoordinates.value = new Vector2(x, y);
    });
    geometry.fadeNoise();
  }, [mouseCoordinates, geometry]);

  useEffect(() => {
    const { x, y } = cachedImage.current?.mesh?.position ?? { x: 0, y: 0 };
    if (activating) {
      geometry.activate(x);
    } else if (deactivating) {
      geometry.deactivate({
        width,
        height,
        positionX: x,
        positionY: y,
        onTransitionComplete: () => {
          controller.resetDeactivatedImage();
          controller.emitEvent(ID, {
            type: "deactivation",
            position: { x: 0, y: 0 },
          });
        },
      });
    }
  }, [ID, activating, deactivating, geometry, width, height, controller]);

  return (
    <GLWaveImage
      {...rest}
      position-z={1}
      scale={[width, height]}
      ref={geometry.cacheReference}
      url={`${image.src}?bypass-cors-please`}
      position-x={cachedImage.current?.mesh?.position.x}
      position-y={cachedImage.current?.mesh?.position.y}
    />
  );
};

interface Props extends Omit<WebGLImageProps, "active"> {
  activating: boolean;
  deactivating: boolean;
  mouseCoordinates: Point;
}
