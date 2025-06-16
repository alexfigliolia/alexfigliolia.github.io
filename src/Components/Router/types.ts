import type { ComponentType } from "react";
import type { LazyComponent } from "@figliolia/react-lazy";
import type { PropLess } from "Tools/Types";

export type WrappedLoader = [
  component: Promise<LazyComponent<PropLess>>,
  preloader?: Promise<any>,
];

export type ISetPage = (component: ComponentType | null) => void;

export type RouteMap = Record<string, () => Promise<LazyComponent<PropLess>>>;
