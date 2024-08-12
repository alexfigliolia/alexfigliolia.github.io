import React, { memo } from "react";
import { AlexText } from "Components/AlexText";
import { Page } from "Components/Page";
import { useMenuButtonDelay } from "Hooks/useMenuButtonDelay";
import type { PropLess } from "Tools/Types";
import { WorkButton } from "./WorkButton";
import "./styles.scss";

export default memo(
  function Home(_: PropLess) {
    useMenuButtonDelay();
    return (
      <Page name="home">
        <div>
          <AlexText />
          <WorkButton />
        </div>
      </Page>
    );
  },
  () => true,
);
