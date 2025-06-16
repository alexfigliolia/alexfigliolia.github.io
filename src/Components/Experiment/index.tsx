import { ReactNode, useCallback, useRef, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { SplitHeading } from "Components/SplitHeading";
import { Labs } from "State/Labs";
import { LazyComponent } from "Tools/Types";
import "./styles.scss";

export const Experiment = ({
  title,
  description,
  image,
  video,
  scene,
  preload: preloadScene,
}: Props) => {
  const preloadedScene = useRef(false);
  const preloadingVideo = useRef(false);
  const videoNode = useRef<HTMLVideoElement>(null);
  const [preloadedVideo, setPreloadedVideo] = useState(false);

  const preloadLabsScene = useCallback(() => {
    if (!preloadedScene.current) {
      preloadedScene.current = true;
      void preloadScene?.();
    }
  }, [preloadScene]);

  const preloadLabsVideo = useCallback(() => {
    if (preloadingVideo.current || !videoNode.current) {
      return;
    }
    void preloadScene?.();
    if (preloadedVideo) {
      void videoNode.current?.play?.();
      return;
    }
    preloadingVideo.current = true;
    videoNode.current.oncanplaythrough = () => {
      setPreloadedVideo(true);
      preloadingVideo.current = false;
      void videoNode.current?.play?.();
    };
    videoNode.current.onerror = () => {
      preloadingVideo.current = false;
    };
    videoNode.current.src = video;
  }, [preloadedVideo, video, preloadScene]);

  const onMouseEnter = useCallback(() => {
    preloadLabsScene();
    preloadLabsVideo();
  }, [preloadLabsScene, preloadLabsVideo]);

  const onMouseOut = useCallback(() => {
    videoNode?.current?.pause?.();
  }, []);

  const onClick = useCallback(() => {
    Labs.activateScene(scene);
  }, [scene]);

  const classes = useClassNames("experiment", { ready: preloadedVideo });

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={classes}
      onTouchEnd={onMouseOut}
      onMouseLeave={onMouseOut}
      onMouseEnter={onMouseEnter}
      onTouchStart={onMouseEnter}>
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
  preload?: () => Promise<LazyComponent<any>>;
}
