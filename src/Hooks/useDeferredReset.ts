import { useEffect } from "react";
import { TaskQueue } from "Tools/TaskQueue";

export const useDeferredReset = (
  active: boolean,
  setReset: (reset: boolean) => void,
) => {
  useEffect(() => {
    if (active) {
      TaskQueue.deferTask(() => {
        setReset(true);
      }, 3100);
    }
  }, [active, setReset]);
};
