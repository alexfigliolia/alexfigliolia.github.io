import { useEffect } from "react";
import { FullScreen } from "Components/FullScreen";
import { useRipples } from "Hooks/useRipples";
import { Labs } from "State/Labs";
import { PropLess } from "Tools/Types";
import "./styles.scss";

export const RipplesScene = (_: PropLess) => {
  const ref = useRipples();

  useEffect(() => {
    Labs.onLoad();
  }, []);

  return <FullScreen className="ripples-scene" ref={ref} />;
};
