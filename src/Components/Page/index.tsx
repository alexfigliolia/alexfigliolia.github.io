import type { ReactNode } from "react";
import { memo, useEffect, useRef } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Ripples } from "@figliolia/ripples";
import { FullScreen } from "Components/FullScreen";
import { isPageActive, usePageController } from "State/PageController";
import "./styles.scss";

export const Page = memo(function Page({ name, children }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const active = usePageController(isPageActive);

  useEffect(() => {
    if (!container.current) {
      return;
    }
    const ripples = new Ripples(container.current, {
      resolution: "device",
    });
    return () => {
      ripples.destroy();
    };
  }, []);

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
