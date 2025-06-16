import { useEffect, useMemo, useRef } from "react";
import { useProgress } from "@react-three/drei";
import { Labs } from "State/Labs";

export const useLabsLoader = () => {
  const invoked = useRef(false);
  const { progress, total, loaded } = useProgress();

  const ready = useMemo(
    () => progress === 100 && total === loaded,
    [progress, total, loaded],
  );

  useEffect(() => {
    if (ready && !invoked.current) {
      invoked.current = true;
      Labs.onLoad();
    }
  }, [ready]);
};
