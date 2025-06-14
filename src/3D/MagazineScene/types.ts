import { Dispatch, ReactNode, RefObject, SetStateAction } from "react";

export interface IMagazineContext {
  current: number;
  setCurrent: Dispatch<SetStateAction<number>>;
}

export interface IMagazinePage {
  front: string;
  back: string;
}

export interface IMagazineProps {
  images: IMagazinePage[];
}

export interface Propless<T = never> {
  ref?: T extends never ? never : RefObject<T>;
}

export interface OptionalChildren {
  children?: ReactNode;
}
