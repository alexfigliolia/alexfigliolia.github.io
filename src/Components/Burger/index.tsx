import React, { memo, useCallback } from "react";
import { Menu, useMenu } from "State/Menu";
import { Privacy, usePrivacy } from "State/Privacy";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export const Burger = memo(
  function Burger(_: PropLess) {
    const menuOpen = useMenu(state => state.menuOpen);
    const policyOpen = usePrivacy(state => state.open);

    const toggle = useCallback(() => {
      if (policyOpen) {
        return Privacy.toggle();
      }
      Menu.toggle();
    }, [policyOpen]);

    return (
      <button
        className={`burger ${menuOpen ? " open" : ""} ${
          policyOpen ? "policy" : ""
        }`}
        onClick={toggle}>
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
