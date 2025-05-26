import { memo } from "react";
import { useClassNames } from "@figliolia/classnames";
import { isMenuOpen, useMenu } from "State/Menu";
import type { PropLess } from "Tools/Types";
import { Link } from "./Link";
import "./styles.scss";

export const Menu = memo(
  function Menu(_: PropLess) {
    const open = useMenu(isMenuOpen);
    const classes = useClassNames("menu", { open });
    return (
      <nav className={classes}>
        <Link id="linkHome" to="Home" />
        <Link id="linkWork" to="Work" />
        <Link id="linkContact" to="Contact" />
      </nav>
    );
  },
  () => true,
);
