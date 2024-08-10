import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { RoutingModel } from "Models/RoutingModel";
import type { IRouting } from "Models/types";
import { Menu, useMenu } from "State/Menu";
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
  const [canHover, setCanHover] = useState(false);
  const menuOpen = useMenu(state => state.menuOpen);
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

  return (
    <button
      id={id}
      onClick={nav}
      className={`link ${active ? "active" : ""} ${
        canHover ? "can-hover" : ""
      }`}>
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
