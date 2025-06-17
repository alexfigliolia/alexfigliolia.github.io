import { useEffect } from "react";
import { TaskQueue } from "Tools/TaskQueue";

export const useDeferredReset = (
  active: boolean,
  setReset: (reset: boolean) => void,
  delay = 3100,
) => {
  useEffect(() => {
    if (active) {
      TaskQueue.deferTask(() => {
        setReset(true);
      }, delay);
    }
  }, [active, setReset, delay]);
};
