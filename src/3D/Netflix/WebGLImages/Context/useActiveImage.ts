import { useContext, useEffect, useState } from "react";
import { WebGLImagesContext } from "./Provider";

export const useActiveImage = () => {
  const [imageActive, setImageActive] = useState(false);
  const controller = useContext(WebGLImagesContext);

  useEffect(() => {
    const ID = controller.subscribeToImages(({ activeImage }) => {
      setImageActive(!!activeImage);
    });
    return () => {
      controller.unsubscribeFromImages(ID);
    };
  }, [controller]);

  return imageActive;
};
