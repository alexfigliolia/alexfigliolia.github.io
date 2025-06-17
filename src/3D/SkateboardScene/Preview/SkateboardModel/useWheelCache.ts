import { RefObject, useCallback, useMemo, useRef } from "react";
import { Object3D } from "three";

export const useWheelCache = () => {
  const wheelRefs = useRef<Object3D[]>([]);

  const cacheObjectReference = useCallback(
    (index: number, target: RefObject<Object3D[]>) =>
      (node: Object3D | null) => {
        if (node) {
          target.current[index] = node;
        }
      },
    [],
  );

  const cacheFNs = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => cacheObjectReference(i, wheelRefs)),
    [cacheObjectReference],
  );
  return [wheelRefs, cacheFNs] as const;
};
