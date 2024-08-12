import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { RoutingModel } from "Models/RoutingModel";
import type { IRouting } from "Models/types";
import { isMenuOpen, Menu, useMenu } from "State/Menu";
import { useRouter } from "State/Routing";
import { TaskQueue } from "Tools/TaskQueue";
import "./styles.scss";

export const Link = memo(function Link({ id, to }: Props) {
  const activeCheck = useCallback(
    (state: IRouting) => {
      return state.routeName.toLowerCase() === to.toLowerCase();
    },
    [to],
  );

  const active = useRouter(activeCheck);
  const [hoverable, setCanHover] = useState(false);
  const menuOpen = useMenu(isMenuOpen);
  const letters = useMemo(() => to.toUpperCase().split(""), [to]);
  const delay = useMemo(() => letters.length * 50 + 2200, [letters]);

  const activeHovering = useCallback(() => {
    TaskQueue.deferTask(() => {
      setCanHover(true);
    }, delay);
  }, [delay]);

  useEffect(() => {
    if (menuOpen) {
      return activeHovering();
    }
    setCanHover(false);
  }, [menuOpen, activeHovering]);

  const nav = useCallback(() => {
    window.location.hash = `#${to}`;
    TaskQueue.deferTask(() => {
      Menu.toggle();
    }, RoutingModel.shrinkAndFlipDuration);
  }, [to]);

  const classes = useClassNames("link", { active, hoverable });

  return (
    <button id={id} onClick={nav} className={classes}>
      {letters.map((letter, i) => {
        return (
          <span key={`${letter}-${i}`} className="link-letter">
            {letter}
          </span>
        );
      })}
    </button>
  );
});

interface Props {
  id: string;
  to: string;
}
