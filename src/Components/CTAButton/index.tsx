import React, { memo, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Button3D } from "Components/Button3D";
import { useDeferredReset } from "Hooks/useDeferredReset";
import { isPageActive, useRouter } from "State/Routing";

export const CTAButton = memo(function CTAButton({
  text,
  onClick,
  className,
}: Props) {
  const active = useRouter(isPageActive);
  const [reset, setReset] = useState(false);

  useDeferredReset(active, setReset);

  const classes = useClassNames(className, { active, reset });

  return (
    <div className={classes}>
      <Button3D text={text} onClick={onClick} />
    </div>
  );
});

interface Props {
  text: string;
  className: string;
  onClick: () => void;
}
