import { memo } from "react";
import "./styles.scss";

export const Title = memo(
  function Title({ letters, length }: Props) {
    let current = -1;
    return (
      <h2 className="poster-title">
        {letters.map((letter, i) => {
          if (letter === " ") {
            return (
              <div className="title-space" key={`${letter}-${i}`}>
                &nbsp;&nbsp;&nbsp;
              </div>
            );
          }
          current++;
          const delay = (length - current) * 50;
          return (
            <div
              key={`${letter}-${i}`}
              style={{
                transition: `opacity 0.5s ${delay}ms, transform 1.25s ${delay}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
              }}>
              {letter}
            </div>
          );
        })}
      </h2>
    );
  },
  () => true,
);

interface Props {
  length: number;
  letters: string[];
}
