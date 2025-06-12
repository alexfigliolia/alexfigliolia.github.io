import { memo } from "react";
import { SplitHeading } from "Components/SplitHeading";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export const ContactText = memo(
  function ContactText(_: PropLess) {
    return (
      <div className="contact-text">
        <SplitHeading id="contactText" text="Contact" />
      </div>
    );
  },
  () => true,
);
