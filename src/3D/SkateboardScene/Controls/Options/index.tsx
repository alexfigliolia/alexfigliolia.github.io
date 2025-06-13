import { ReactNode, useMemo } from "react";
import { OptionalChildren } from "Tools/Types";
import "./styles.scss";

export const Options = ({ title, selectedName, children }: Props) => {
  const formatted = useMemo(
    () => (selectedName ? getName(selectedName) : ""),
    [selectedName],
  );
  return (
    <div className="options">
      <div>
        <h2>{title}</h2>
        <p>
          <span>| </span>
          {formatted}
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

function getName(path: string) {
  const tokens = path.split("/");
  const file = tokens[tokens.length - 1];
  const [name] = file.split(".");
  return name.replace(/-/g, " ");
}

export * from "./Option";
