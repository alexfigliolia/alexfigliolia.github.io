import { ReactNode } from "react";

export type PropLess = Record<string, never>;

export interface OptionalChildren {
  children?: ReactNode;
}
