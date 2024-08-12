import React, { memo, useEffect, useMemo } from "react";
import { useClassNames } from "@figliolia/classnames";
import { Menu } from "State/Menu";
import { isPageActive, useRouter } from "State/Routing";
import { getSliderIndex, useWork } from "State/Work";
import { Content } from "./Content";
import { Title } from "./Title";
import "./styles.scss";

export const Poster = memo(function Poster({
  p1,
  p2,
  url,
  name,
  index,
  imgSmall,
  imgLarge,
}: Props) {
  const activeIndex = useWork(getSliderIndex);
  const posterActive = useMemo(
    () => activeIndex === index,
    [activeIndex, index],
  );
  const screenActive = useRouter(isPageActive);
  const active = useMemo(
    () => posterActive && screenActive,
    [posterActive, screenActive],
  );
  const letters = useMemo(() => name.split(""), [name]);
  const length = useMemo(
    () => letters.filter(v => v !== " ").length,
    [letters],
  );
  const activeDelay = useMemo(() => length * 50 + 500, [length]);

  useEffect(() => {
    if (posterActive) {
      Menu.setButtonDelay(activeDelay + 2200);
    }
  }, [activeDelay, posterActive]);

  const classes = useClassNames("poster", { active });

  return (
    <div
      className={classes}
      style={{
        "--background-small": `url(${imgSmall})`,
        "--background-large": `url(${imgLarge})`,
      }}>
      <article>
        <Title letters={letters} length={length} />
        <Content
          p1={p1}
          p2={p2}
          url={url}
          active={active}
          delay={activeDelay}
        />
      </article>
    </div>
  );
});

interface Props {
  p1: string;
  p2: string;
  url?: string;
  name: string;
  index: number;
  imgSmall: string;
  imgLarge: string;
}
