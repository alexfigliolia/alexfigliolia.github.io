import { createRoot } from "react-dom/client";
import { App } from "./App";
import "Styles/reset.scss";

const node = document.getElementById("root");
if (!node) {
  throw new Error("what");
}
const root = createRoot(node);
root.render(<App />);
