import { ReactNode, useCallback, useRef, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { SplitHeading } from "Components/SplitHeading";
import { Labs } from "State/Labs";
import "./styles.scss";

export const Experiment = ({
  title,
  description,
  image,
  video,
  scene,
}: Props) => {
  const preloading = useRef(false);
  const videoNode = useRef<HTMLVideoElement>(null);
  const [preloaded, setPreloaded] = useState(false);

  const preload = useCallback(() => {
    if (preloading.current || !videoNode.current) {
      return;
    }
    if (preloaded) {
      void videoNode.current?.play?.();
      return;
    }
    preloading.current = true;
    videoNode.current.oncanplaythrough = () => {
      setPreloaded(true);
      preloading.current = false;
      void videoNode.current?.play?.();
    };
    videoNode.current.onerror = () => {
      preloading.current = false;
    };
    videoNode.current.src = video;
  }, [preloaded, video]);

  const onMouseOut = useCallback(() => {
    videoNode?.current?.pause?.();
  }, []);

  const onClick = useCallback(() => {
    Labs.activateScene(scene);
  }, [scene]);

  const classes = useClassNames("experiment", { ready: preloaded });

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={classes}
      onMouseEnter={preload}
      onTouchStart={preload}
      onTouchEnd={onMouseOut}
      onMouseLeave={onMouseOut}>
      <div className="media">
        <video ref={videoNode} loop playsInline autoPlay muted src={video} />
        <img src={image} />
      </div>
      <div className="meta">
        <SplitHeading As="h2" text={title} />
        <p>{description}</p>
      </div>
    </article>
  );
};

interface Props {
  title: string;
  description: string;
  image: string;
  video: string;
  scene: ReactNode;
}
