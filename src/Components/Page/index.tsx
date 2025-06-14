import type { ReactNode } from "react";
import { memo } from "react";
import { useClassNames } from "@figliolia/classnames";
import { FullScreen } from "Components/FullScreen";
import { useRipples } from "Hooks/useRipples";
import { isPageActive, usePageController } from "State/PageController";
import "./styles.scss";

export const Page = memo(function Page({ name, children }: Props) {
  const container = useRipples();
  const active = usePageController(isPageActive);

  const classes = useClassNames("page", name, { active });

  return (
    <FullScreen Tag="main" id="page" ref={container} className={classes}>
      <div className="content">{children}</div>
    </FullScreen>
  );
});

interface Props {
  name: string;
  children: ReactNode;
}
