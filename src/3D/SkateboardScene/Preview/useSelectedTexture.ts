import { useMemo } from "react";
import { useSRGBTexture } from "./SkateboardModel/useSRGBTexture";

export const useSelectedTexture = (
  options: Record<string, string>,
  selection?: string,
) => {
  const textureURLs = useMemo(() => Object.values(options), [options]);
  const textures = useSRGBTexture(textureURLs);

  const indices = useMemo(() => {
    const hash: Record<string, number> = {};
    let pointer = -1;
    for (const key in options) {
      hash[key] = ++pointer;
    }
    return hash;
  }, [options]);

  const selectionIndex = useMemo(
    () => indices[selection ?? "-1"] ?? 0,
    [indices, selection],
  );
  return useMemo(() => textures[selectionIndex], [textures, selectionIndex]);
};
