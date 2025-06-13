import { useMemo } from "react";
import { useSRGBTexture } from "./SkateboardModel/useSRGBTexture";

export const useSelectedTexture = (options: string[], selection?: string) => {
  const textures = useSRGBTexture(options);

  const indices = useMemo(() => {
    const hash: Record<string, number> = {};
    const { length } = options;
    for (let i = 0; i < length; i++) {
      hash[options[i]] = i;
    }
    return hash;
  }, [options]);

  const selectionIndex = useMemo(
    () => indices[selection ?? "-1"] ?? 0,
    [indices, selection],
  );
  return useMemo(() => textures[selectionIndex], [textures, selectionIndex]);
};
