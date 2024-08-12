import React, { memo } from "react";
import type { PropLess } from "Tools/Types";
import "./styles.scss";

const Alex = "ALEX".split("");
const Figliolia = "FIGLIOLIA".split("");

export const AlexText = memo(
  function AlexText(_: PropLess) {
    return (
      <div className="alex-text">
        <h1 id="alex" aria-label="Alex">
          {Alex.map(letter => {
            return (
              <div className="text-letter" key={letter} aria-hidden>
                {letter}
              </div>
            );
          })}
        </h1>
        <h1 id="figliolia" aria-label="Figliolia">
          {Figliolia.map((letter, i) => {
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
