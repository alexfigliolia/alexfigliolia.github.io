import React, { memo, useCallback, useMemo } from "react";
import { useClassNames } from "@figliolia/classnames";
import { isMenuOpen, Menu, useMenu } from "State/Menu";
import { isPrivacyOpen, Privacy, usePrivacy } from "State/Privacy";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export const Burger = memo(
  function Burger(_: PropLess) {
    const menuOpen = useMenu(isMenuOpen);
    const policy = usePrivacy(isPrivacyOpen);
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
