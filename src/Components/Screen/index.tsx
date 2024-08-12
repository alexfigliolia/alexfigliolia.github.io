import type { ReactNode } from "react";
import React, { memo } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Menu } from "Components/Menu";
import { isMenuOpen, useMenu } from "State/Menu";
import { screenClasses, useRouter } from "State/Routing";
import { selectDimensions, useScreen } from "State/Screen";
import { MenuButton } from "./MenuButton";
import "./styles.scss";

export const Screen = memo(function Screen({ front, back }: Props) {
  const hide = useMenu(isMenuOpen);
  const classes = useRouter(screenClasses);
  const [width, height] = useScreen(selectDimensions);
  const frontClasses = useClassNames("front", { hide });
  return (
    <div className={classes} style={{ height, width }}>
      <div className="inner">
        <div className={frontClasses}>
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
