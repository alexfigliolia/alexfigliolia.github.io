import type { ReactNode } from "react";
import { memo } from "react";
import { useClassNames } from "@figliolia/classnames";
import { FullScreen } from "Components/FullScreen";
import { Menu } from "Components/Menu";
import { isMenuOpen, useMenu } from "State/Menu";
import { screenClasses, usePageController } from "State/PageController";
import { MenuButton } from "./MenuButton";
import "./styles.scss";

export const Screen = memo(function Screen({ front, back }: Props) {
  const hide = useMenu(isMenuOpen);
  const classes = usePageController(screenClasses);
  const frontClasses = useClassNames("front", { hide });
  return (
    <FullScreen className={classes}>
      <div className="inner">
        <div className={frontClasses}>
          <Menu />
          <MenuButton />
          {front}
        </div>
        <div className="back">{back}</div>
      </div>
    </FullScreen>
  );
});

interface Props {
  back: ReactNode;
  front: ReactNode;
}
