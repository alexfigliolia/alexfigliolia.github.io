import React, { memo, useEffect, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Button3D } from "Components/Button3D";
import { Privacy } from "State/Privacy";
import { useRouter } from "State/Routing";
import { TaskQueue } from "Tools/TaskQueue";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export const OpenButton = memo(
  function OpenButton(_: PropLess) {
    const [reset, setReset] = useState(false);
    const active = useRouter(state => state.screenActive);

    useEffect(() => {
      if (active) {
        TaskQueue.deferTask(() => {
          setReset(true);
        }, 3100);
      }
    }, [active]);

    const classes = useClassNames("open-button", { active, reset });

    return (
      <div className={classes}>
        <Button3D text="Policy" onClick={Privacy.toggle} />
      </div>
    );
  },
  () => true,
);
