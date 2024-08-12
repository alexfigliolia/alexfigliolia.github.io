import React, { memo } from "react";
import { Page } from "Components/Page";
import { PrivacyText } from "Components/PrivacyText";
import { useMenuButtonDelay } from "Hooks/useMenuButtonDelay";
import type { PropLess } from "Tools/Types";
import { OpenButton } from "./OpenButton";
import { PolicyModal } from "./PolicyModal";
import "./styles.scss";

export default memo(
  function Privacy(_: PropLess) {
    useMenuButtonDelay();
    return (
      <Page name="privacy">
        <div>
          <PrivacyText />
          <OpenButton />
        </div>
        <PolicyModal />
      </Page>
    );
  },
  () => true,
);
