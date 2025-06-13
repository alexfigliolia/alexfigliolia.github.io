import { Texture } from "three";

export type TextureResult<T extends string | string[]> = T extends string
  ? Texture
  : Texture[];
