import React, { memo, useEffect, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Button3D } from "Components/Button3D";
import { useRouter } from "State/Routing";
import { TaskQueue } from "Tools/TaskQueue";
import "./styles.scss";

export const ContactButton = memo(function ContactButton({
  text,
  onClick,
}: Props) {
  const [reset, setReset] = useState(false);
  const active = useRouter(state => state.screenActive);

  useEffect(() => {
    if (active) {
      TaskQueue.deferTask(() => {
        setReset(true);
      }, 3100);
    }
  }, [active]);

  const classes = useClassNames("contact-button", { active, reset });

  return (
    <div className={classes}>
      <Button3D text={text} onClick={onClick} />
    </div>
  );
});

interface Props {
  text: string;
  onClick: () => void;
}
