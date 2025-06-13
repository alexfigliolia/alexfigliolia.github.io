import { ReactNode } from "react";
import { CreateLazyComponent } from "@figliolia/react-lazy";

export type PropLess = Record<string, never>;

export interface OptionalChildren {
  children?: ReactNode;
}

export type LazyComponent<T extends Record<string, any> = PropLess> =
  ReturnType<typeof CreateLazyComponent<T>>;

export type Callback<T extends any[] = never[], V = void> = (...args: T) => V;
