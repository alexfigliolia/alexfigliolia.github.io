import { memo } from "react";
import { SplitHeading } from "Components/SplitHeading";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export const AlexText = memo(
  function AlexText(_: PropLess) {
    return (
      <div className="alex-text">
        <SplitHeading id="alex" text="alex" />
        <SplitHeading id="figliolia" text="figliolia" />
      </div>
    );
  },
  () => true,
);
