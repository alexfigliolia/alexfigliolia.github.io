import { ReactNode, useCallback, useEffect, useState } from "react";
import { useClassNames } from "@figliolia/classnames";
import { useTimeout } from "@figliolia/react-hooks";
import { CreateLazyComponent } from "@figliolia/react-lazy";
import { CircleLoader } from "Components/CircleLoader";
import { SplitHeading } from "Components/SplitHeading";
import { Labs, ready, useLabs } from "State/Labs";
import { usePreloader } from "./usePreloader";
import "./styles.scss";

export const Experiment = ({
  title,
  description,
  image,
  video,
  scene,
  preload: preloadScene,
}: Props) => {
  const timeout = useTimeout();
  const sceneComplete = useLabs(ready);
  const [loadingScene, setLoadingScene] = useState(false);
  const { videoNode, preloadedVideo, mouseOverPreloader } = usePreloader(
    video,
    preloadScene,
  );

  const onMouseOut = useCallback(() => {
    videoNode?.current?.pause?.();
  }, [videoNode]);

  const onClick = useCallback(() => {
    setLoadingScene(true);
    timeout.execute(() => {
      Labs.activateScene(scene);
    }, 500);
  }, [scene, timeout]);

  useEffect(() => {
    if (loadingScene && sceneComplete) {
      timeout.execute(() => {
        setLoadingScene(false);
      }, 1000);
    }
  }, [loadingScene, sceneComplete, timeout]);

  const classes = useClassNames("experiment", {
    ready: preloadedVideo,
    loading: loadingScene,
  });

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onClick}
      className={classes}
      onTouchEnd={onMouseOut}
      onMouseLeave={onMouseOut}
      onMouseEnter={mouseOverPreloader}
      onTouchStart={mouseOverPreloader}>
      <div className="e-loader" aria-hidden={!loadingScene}>
        <CircleLoader />
        <SplitHeading text="loading" />
      </div>
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
  preload?: ReturnType<typeof CreateLazyComponent<any>>["preload"];
}
