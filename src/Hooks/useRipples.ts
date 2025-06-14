import { useEffect, useRef } from "react";
import { Ripples } from "@figliolia/ripples";

export const useRipples = <T extends HTMLElement = HTMLElement>() => {
  const container = useRef<T>(null);

  useEffect(() => {
    if (!container.current) {
      return;
    }
    const ripples = new Ripples(container.current, {
      resolution: "device",
    });
    return () => {
      ripples.destroy();
    };
  }, []);

  return container;
};
