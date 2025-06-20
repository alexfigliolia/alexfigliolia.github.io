import {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useClassNames } from "@figliolia/classnames";
import { Button3D } from "Components/Button3D";
import { TaskQueue } from "Tools/TaskQueue";
import "./styles.scss";

export const Content = memo(function Content({
  p1,
  p2,
  url,
  delay,
  active,
}: Props) {
  const [reset, setReset] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const cancelFN = useRef<null | (() => void)>(null);

  const visit = useCallback(() => {
    window.open(url, "_blank");
  }, [url]);

  const toggle = useCallback(() => {
    setExpanded(state => !state);
  }, []);

  const cancelReset = useCallback(() => {
    cancelFN.current?.();
    setReset(false);
  }, []);

  const deferReset = useCallback(
    (resetDelay = delay + 2200) => {
      cancelFN.current = TaskQueue.deferTask(() => {
        setReset(true);
      }, resetDelay);
    },
    [delay],
  );

  useEffect(() => {
    return () => {
      cancelFN.current?.();
    };
  }, []);

  useEffect(() => {
    if (active) {
      deferReset();
    } else {
      cancelReset();
    }
  }, [active, deferReset, cancelReset]);

  const classes = useClassNames("poster-text", { expanded });
  const linkClasses = useClassNames("poster-links", { reset });

  return (
    <Fragment>
      <div
        className={classes}
        style={{
          transitionDelay: `${active ? delay : 0}ms`,
        }}>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
      <div className={linkClasses}>
        <Button3D text="More" onClick={toggle} />
        {url && <Button3D text="Visit" onClick={visit} />}
      </div>
    </Fragment>
  );
});

interface Props {
  p1: string;
  p2: string;
  url?: string;
  delay: number;
  active: boolean;
}
