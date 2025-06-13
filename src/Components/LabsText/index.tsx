import { memo } from "react";
import { SplitHeading } from "Components/SplitHeading";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export const LabsText = memo(
  function LabsText(_: PropLess) {
    return (
      <div className="labs-text">
        <SplitHeading id="labsText" text="Labs" />
      </div>
    );
  },
  () => true,
);
