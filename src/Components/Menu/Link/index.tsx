import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { PageControllerModel } from "Models/PageControllerModel";
import type { IPageController } from "Models/types";
import { isMenuOpen, Menu, useMenu } from "State/Menu";
import { usePageController } from "State/PageController";
import { TaskQueue } from "Tools/TaskQueue";
import "./styles.scss";

export const Link = memo(function Link({ id, to }: Props) {
  const activeCheck = useCallback(
    (state: IPageController) => {
      return state.routeName.toLowerCase() === to.toLowerCase();
    },
    [to],
  );

  const active = usePageController(activeCheck);
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
      activeHovering();
      return;
    }
    setCanHover(false);
  }, [menuOpen, activeHovering]);

  const nav = useCallback(() => {
    window.location.hash = `#${to}`;
    TaskQueue.deferTask(() => {
      Menu.toggle();
    }, PageControllerModel.shrinkAndFlipDuration);
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
