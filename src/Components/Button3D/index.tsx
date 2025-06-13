import { CSSProperties, memo, MouseEvent, useState } from "react";
import { useController } from "Hooks/useController";
import { TiltController } from "Tools/TiltController";
import "./styles.scss";

export const Button3D = memo(function Button3D({ text, onClick }: Props) {
  const [frame, setFrame] = useState<CSSProperties>();
  const controller = useController(new TiltController(setFrame));
  return (
    <button
      onClick={onClick}
      {...controller.events}
      className="outline-button"
      style={frame}>
      <div>{text}</div>
    </button>
  );
});

export interface Props {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
