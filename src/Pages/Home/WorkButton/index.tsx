import React, { memo, useCallback, useEffect, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Button3D } from "Components/Button3D";
import { useRouter } from "State/Routing";
import { TaskQueue } from "Tools/TaskQueue";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export const WorkButton = memo(
  function WorkButton(_: PropLess) {
    const [reset, setReset] = useState(false);
    const active = useRouter(state => state.screenActive);

    useEffect(() => {
      if (active) {
        TaskQueue.deferTask(() => {
          setReset(true);
        }, 3100);
      }
    }, [active]);

    const nav = useCallback(() => {
      window.location.hash = "#Work";
    }, []);

    const classes = useClassNames("work-button", { active, reset });

    return (
      <div className={classes}>
        <Button3D text="Work" onClick={nav} />
      </div>
    );
  },
  () => true,
);
