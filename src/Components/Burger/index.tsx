import { memo, useCallback, useMemo } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Labs, ready, useLabs } from "State/Labs";
import { isMenuOpen, Menu, useMenu } from "State/Menu";
import { isPrivacyOpen, Privacy, usePrivacy } from "State/Privacy";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export const Burger = memo(
  function Burger(_: PropLess) {
    const sceneOpen = useLabs(ready);
    const menuOpen = useMenu(isMenuOpen);
    const policy = usePrivacy(isPrivacyOpen);
    const open = useMemo(
      () => menuOpen || policy || !!sceneOpen,
      [menuOpen, policy, sceneOpen],
    );

    const toggle = useCallback(() => {
      if (policy) {
        Privacy.toggle();
        return;
      }
      if (sceneOpen) {
        Labs.deactivateScene();
        return;
      }
      Menu.toggle();
    }, [policy, sceneOpen]);

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
