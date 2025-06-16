import { memo, useEffect, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { useTimeout } from "@figliolia/react-hooks";
import { SplitHeading } from "Components/SplitHeading";
import { ready, useLabs } from "State/Labs";
import type { Callback, PropLess } from "Tools/Types";
import "./styles.scss";

export const MouseAround = memo(function MouseAround(_: PropLess) {
  const timeout = useTimeout();
  const isReady = useLabs(ready);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isReady && !loaded) {
      setLoaded(true);
      return;
    }
    let cancelFN: Callback | undefined;
    if (!isReady && loaded) {
      cancelFN = timeout.execute(() => {
        setLoaded(false);
      }, 1000);
    }
    return () => {
      cancelFN?.();
    };
  }, [isReady, timeout, loaded]);

  const classes = useClassNames("mouse-around", { loaded });

  return (
    <div className={classes}>
      <SplitHeading id="mouse" text="mouse" />
      <SplitHeading id="around" text="around" />
    </div>
  );
});
