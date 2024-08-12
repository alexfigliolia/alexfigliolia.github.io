import React, { memo } from "react";
import { Loader } from "Components/Loader";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

export const ScreenLoader = memo(
  function ScreenLoader(_: PropLess) {
    return (
      <div className="screen-loader">
        <Loader />
      </div>
    );
  },
  () => true,
);
