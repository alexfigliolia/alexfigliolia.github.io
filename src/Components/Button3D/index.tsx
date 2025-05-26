import { memo, useState } from "react";
import { useController } from "Hooks/useController";
import { Controller } from "./Controller";
import type { IAnimationFrame, Props } from "./types";
import "./styles.scss";

export const Button3D = memo(function Button3D({ text, onClick }: Props) {
  const [frame, setFrame] = useState<IAnimationFrame>({
    rotX: 0,
    rotY: 0,
    scale: 1,
    transition: 0.5,
    boxShadow: "none",
  });
  const controller = useController(new Controller(setFrame));
  return (
    <button
      onClick={onClick}
      {...controller.events}
      className="outline-button"
      style={{
        transform: `rotateX(${frame.rotX}deg) rotateY(${frame.rotY}deg) skew(-10deg) scale(${frame.scale})`,
        transitionDuration: `${frame.transition}`,
        boxShadow: frame.boxShadow,
      }}>
      <div>{text}</div>
    </button>
  );
});

export * from "./types";
