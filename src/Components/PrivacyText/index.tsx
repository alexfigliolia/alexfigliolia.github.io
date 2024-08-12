import React, { memo } from "react";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

const privacy = "PRIVACY".split("");

export const PrivacyText = memo(
  function PrivacyText(_: PropLess) {
    return (
      <div className="privacy-text">
        <h1 id="privacyText" aria-label="Privacy">
          {privacy.map((letter, i) => {
            return (
              <div className="text-letter" key={`${letter}-${i}`} aria-hidden>
                {letter}
              </div>
            );
          })}
        </h1>
      </div>
    );
  },
  () => true,
);
