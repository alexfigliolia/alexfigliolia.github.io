import React, { memo, useCallback, useMemo } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Menu, useMenu } from "State/Menu";
import { Privacy, usePrivacy } from "State/Privacy";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export const Burger = memo(
  function Burger(_: PropLess) {
    const menuOpen = useMenu(state => state.menuOpen);
    const policy = usePrivacy(state => state.open);
    const open = useMemo(() => menuOpen || policy, [menuOpen, policy]);

    const toggle = useCallback(() => {
      if (policy) {
        return Privacy.toggle();
      }
      Menu.toggle();
    }, [policy]);

    const classes = useClassNames("burger", { open, policy });

    return (
      <button onClick={toggle} className={classes}>
        <div>
          <span className="top" />
          <span className="middle" />
          <span className="bottom" />
        </div>
      </button>
    );
  },
  () => true,
);
