import { memo, useEffect, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Burger } from "Components/Burger";
import { getButtonDelay, useMenu } from "State/Menu";
import { isPageActive, usePageController } from "State/PageController";
import { TaskQueue } from "Tools/TaskQueue";
import type { PropLess } from "Tools/Types";

export const MenuButton = memo(
  function MenuButton(_: PropLess) {
    const [active, setActive] = useState(false);
    const delay = useMenu(getButtonDelay);
    const screenActive = usePageController(isPageActive);

    useEffect(() => {
      if (!screenActive && active) {
        setActive(false);
        return;
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
