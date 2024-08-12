import type { MouseEvent } from "react";

export type Coordinate = [x: number, y: number];

export interface Props {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface IAnimationFrame {
  rotX: number;
  rotY: number;
  transition: number | string;
  scale: number;
  boxShadow: string;
}

export type ISetAnimationFrame = (frame: IAnimationFrame) => void;
