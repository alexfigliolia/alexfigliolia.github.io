import { SRGBColorSpace, Texture } from "three";
import { useTexture } from "@react-three/drei";
import { TextureResult } from "./types";

export const useSRGBTexture = <T extends string | string[]>(
  urls: T,
): TextureResult<T> => {
  const deckTextures = useTexture(urls, t => {
    const returnArray = Array.isArray(t);
    const textures: Texture[] = returnArray
      ? (deckTextures as Texture[])
      : [deckTextures as Texture];
    textures.forEach(t => {
      t.flipY = false;
      t.colorSpace = SRGBColorSpace;
      t.needsUpdate = true;
    });
  });
  return deckTextures as TextureResult<T>;
};
