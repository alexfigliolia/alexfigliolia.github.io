import { useClassNames } from "@figliolia/classnames";
import { Button3D } from "Components/Button3D";
import "./styles.scss";

export const AnimatedEntrance3DButton = ({
  className,
  text,
  onClick,
  active,
  reset,
}: Props) => {
  const classes = useClassNames("animated-entrance-3d-button", className, {
    active,
    reset,
  });
  return (
    <div className={classes}>
      <Button3D text={text} onClick={onClick} />
    </div>
  );
};

interface Props {
  text: string;
  reset: boolean;
  active: boolean;
  className?: string;
  onClick: () => void;
}
