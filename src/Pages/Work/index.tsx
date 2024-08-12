import React, { memo, useEffect } from "react";
import { PageSwitch } from "@figliolia/page-switch";
import { Page } from "Components/Page";
import { Poster } from "Components/Poster";
import { Work as WorkState } from "State/Work";
import type { PropLess } from "Tools/Types";
import API from "./API";
import "./styles.scss";

export default memo(
  function Home(_: PropLess) {
    useEffect(() => {
      const { index } = WorkState.getState();
      const PW = new PageSwitch("workSlider", {
        duration: 750,
        direction: 1,
        transition: "scrollCover",
        start: index < 0 ? 0 : index,
        loop: true,
        mousewheel: true,
        arrowKey: true,
      });
      PW.on("after", index => {
        WorkState.setActive(index);
      });
      return () => {
        PW.destroy();
      };
    });

    return (
      <Page name="work">
        <div id="workSlider">
          {API.map((entry, index) => {
            return <Poster key={entry.name} {...entry} index={index} />;
          })}
        </div>
      </Page>
    );
  },
  () => true,
);
