import type { ReactNode } from "react";
import React, { memo, useEffect, useRef } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Ripples } from "@figliolia/ripples";
import { isPageActive, useRouter } from "State/Routing";
import { selectDimensions, useScreen } from "State/Screen";
import "./styles.scss";

export const Page = memo(function Page({ name, children }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const [width, height] = useScreen(selectDimensions);
  const active = useRouter(isPageActive);

  useEffect(() => {
    if (!container.current) {
      return;
    }
    const ripples = new Ripples(container.current, {
      resolution: 512,
      dropRadius: 10,
      perturbance: 0.02,
    });
    return () => {
      if (ripples) {
        ripples.destroy();
      }
    };
  }, []);

  const classes = useClassNames("page", name, { active });

  return (
    <main
      id="page"
      ref={container}
      style={{ height, width }}
      className={classes}>
      <div className="content" style={{ height, width }}>
        {children}
      </div>
    </main>
  );
});

interface Props {
  name: string;
  children: ReactNode;
}
