import { memo } from "react";
import { SplitHeading } from "Components/SplitHeading";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export const PrivacyText = memo(
  function PrivacyText(_: PropLess) {
    return (
      <div className="privacy-text">
        <SplitHeading id="privacyText" text="Privacy" />
      </div>
    );
  },
  () => true,
);
