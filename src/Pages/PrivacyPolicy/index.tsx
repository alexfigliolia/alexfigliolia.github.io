import React, { memo } from "react";
import { CTAButton } from "Components/CTAButton";
import { Page } from "Components/Page";
import { PrivacyText } from "Components/PrivacyText";
import { useMenuButtonDelay } from "Hooks/useMenuButtonDelay";
import { Privacy as PrivacyState } from "State/Privacy";
import type { PropLess } from "Tools/Types";
import { PolicyModal } from "./PolicyModal";
import "./styles.scss";

export default memo(
  function Privacy(_: PropLess) {
    useMenuButtonDelay();
    return (
      <Page name="privacy">
        <div>
          <PrivacyText />
          <CTAButton
            text="Policy"
            className="open-policy-button"
            onClick={PrivacyState.toggle}
          />
        </div>
        <PolicyModal />
      </Page>
    );
  },
  () => true,
);
