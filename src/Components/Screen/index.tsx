import type { ReactNode } from "react";
import React, { memo } from "react";
import { Menu } from "Components/Menu";
import { useMenu } from "State/Menu";
import { useRouter } from "State/Routing";
import { selectDimensions, useScreen } from "State/Screen";
import { MenuButton } from "./MenuButton";
import "./styles.scss";

export const Screen = memo(function Screen({ front, back }: Props) {
  const classes = useRouter(state => state.classes);
  const [width, height] = useScreen(selectDimensions);
  const menuOpen = useMenu(state => state.menuOpen);
  return (
    <div className={classes} style={{ height, width }}>
      <div className="inner">
        <div className={`front ${menuOpen ? " menu-open" : ""}`}>
          <Menu />
          <MenuButton />
          {front}
        </div>
        <div className="back">{back}</div>
      </div>
    </div>
  );
});

interface Props {
  back: ReactNode;
  front: ReactNode;
}
