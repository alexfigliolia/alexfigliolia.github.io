import React, { memo } from "react";
import { useMenu } from "State/Menu";
import type { PropLess } from "Tools/Types";
import { Link } from "./Link";
import "./styles.scss";

export const Menu = memo(
  function Menu(_: PropLess) {
    const open = useMenu(state => state.menuOpen);
    return (
      <nav className={`menu ${open ? "open" : ""}`}>
        <Link id="linkHome" to="Home" />
        <Link id="linkWork" to="Work" />
        <Link id="linkContact" to="Contact" />
      </nav>
    );
  },
  () => true,
);
