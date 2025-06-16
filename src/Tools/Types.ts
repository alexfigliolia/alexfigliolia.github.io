import { ReactNode } from "react";

export type PropLess = Record<string, never>;

export interface OptionalChildren {
  children?: ReactNode;
}

export type Callback<T extends any[] = never[], V = void> = (...args: T) => V;

export interface Point {
  x: number;
  y: number;
}
