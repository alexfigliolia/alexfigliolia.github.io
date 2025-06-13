import DeckTexture from "../Resources/skateboard/Deck.webp";
import { TextureResult } from "./types";
import { useSRGBTexture } from "./useSRGBTexture";

export const useDeckTexture = <T extends string | string[]>(
  urls = DeckTexture as T,
): TextureResult<T> => {
  return useSRGBTexture(urls);
};
