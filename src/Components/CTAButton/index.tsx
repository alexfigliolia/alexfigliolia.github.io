import { memo, useState } from "react";
import { AnimatedEntrance3DButton } from "Components/AnimatedEntrance3DButton";
import { useDeferredReset } from "Hooks/useDeferredReset";
import { isPageActive, usePageController } from "State/PageController";

export const CTAButton = memo(function CTAButton({
  text,
  onClick,
  className,
}: Props) {
  const [reset, setReset] = useState(false);
  const active = usePageController(isPageActive);

  useDeferredReset(active, setReset);

  return (
    <AnimatedEntrance3DButton
      text={text}
      reset={reset}
      active={active}
      onClick={onClick}
      className={className}
    />
  );
});

interface Props {
  text: string;
  className: string;
  onClick: () => void;
}
