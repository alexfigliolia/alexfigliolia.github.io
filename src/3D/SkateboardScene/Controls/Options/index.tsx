import { ReactNode } from "react";
import { OptionalChildren } from "Tools/Types";
import "./styles.scss";

export const Options = ({ title, selectedName, children }: Props) => {
  return (
    <div className="options">
      <div>
        <h2>{title}</h2>
        <p>
          <span>| </span>
          {selectedName ?? ""}
        </p>
      </div>
      <ul>{children}</ul>
    </div>
  );
};

interface Props extends OptionalChildren {
  title?: ReactNode;
  selectedName?: string;
}

export * from "./Option";
