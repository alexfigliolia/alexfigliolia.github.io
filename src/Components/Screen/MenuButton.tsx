import React, { memo, useEffect, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Burger } from "Components/Burger";
import { useMenu } from "State/Menu";
import { useRouter } from "State/Routing";
import { TaskQueue } from "Tools/TaskQueue";
import type { PropLess } from "Tools/Types";

export const MenuButton = memo(
  function MenuButton(_: PropLess) {
    const [active, setActive] = useState(false);
    const delay = useMenu(state => state.buttonDelay);
    const screenActive = useRouter(state => state.screenActive);

    useEffect(() => {
      if (!screenActive && active) {
        return setActive(false);
      }
      if (screenActive && !active) {
        TaskQueue.deferTask(() => {
          setActive(true);
        }, delay);
      }
    }, [active, delay, screenActive]);

    const classes = useClassNames("menu-button", { active });

    return (
      <div className={classes}>
        <Burger />
      </div>
    );
  },
  () => true,
);
