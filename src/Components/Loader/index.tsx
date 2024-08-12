import React, { memo } from "react";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export const Loader = memo(
  function Loader(_: PropLess) {
    return (
      <div className="loader">
        <div>
          <span />
          <span />
          <span />
        </div>
      </div>
    );
  },
  () => true,
);
