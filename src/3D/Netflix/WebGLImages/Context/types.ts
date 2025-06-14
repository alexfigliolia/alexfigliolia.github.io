import { Mesh } from "three";
import { Callback } from "Tools/Types";

export interface IImage extends DOMRect {
  ID: ImageID;
  mesh?: Mesh;
  image: HTMLImageElement;
}

export interface IScrollView {
  scrollX: number;
  scrollY: number;
  images: Map<string, HTMLImageElement>;
}

export type RootNode = Window | HTMLElement;

export interface IImageState {
  images: IImage[];
  activeImage: ImageID | null;
  deactivatingImage: ImageID | null;
}

export type IImageCallback = Callback<[IImageState]>;

export interface WebGLImageStream {
  images: IImageState;
  [key: ImageID]: IPointerEvent;
}

export interface IPointerEvent {
  type: PointerType;
  position: { x: number; y: number };
}

export type PointerType =
  | "pointer-enter"
  | "pointer-move"
  | "pointer-leave"
  | "activation"
  | "deactivation";

export type ImageID = `${number}`;
