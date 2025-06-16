import { useCallback, useMemo, useRef, useState } from "react";
import { CreateLazyComponent } from "@figliolia/react-lazy";

export const usePreloader = (
  video: string,
  preloadScene?: ReturnType<typeof CreateLazyComponent<any>>["preload"],
) => {
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

  const mouseOverPreloader = useCallback(() => {
    preloadLabsScene();
    preloadLabsVideo();
  }, [preloadLabsScene, preloadLabsVideo]);

  return useMemo(
    () => ({ videoNode, preloadedVideo, mouseOverPreloader }),
    [preloadedVideo, mouseOverPreloader],
  );
};
