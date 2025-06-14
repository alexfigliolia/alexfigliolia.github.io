import { selectHeight, useScreen } from "State/Screen";
import { PropLess } from "Tools/Types";
import { Content } from "./Content";
import { WebGLContentList, WebGLImages } from "./WebGLImages";
import { WebGLPoster } from "./WebGLPoster";
import "./styles.scss";

export const NetflixScene = (_: PropLess) => {
  const height = useScreen(selectHeight);
  return (
    <div
      id="netflixGLTarget"
      className="netflix-scene"
      style={{ maxHeight: height, height }}>
      <WebGLImages>
        <WebGLContentList title="Popular Movies" aria-label="Popular Movies">
          {Content.MOVIES.map((movie, i) => {
            return <WebGLPoster key={i} posterURL={movie} />;
          })}
        </WebGLContentList>
        <WebGLContentList title="Popular Shows" aria-label="Popular Shows">
          {Content.SHOWS.map((show, i) => {
            return <WebGLPoster key={i} posterURL={show} />;
          })}
        </WebGLContentList>
        <WebGLContentList
          title="Top Rated Movies"
          aria-label="Top Rated Movies">
          {Content.MOVIES.map((movie, i) => {
            return <WebGLPoster key={i} posterURL={movie} />;
          })}
        </WebGLContentList>
        <WebGLContentList title="Top Rated Shows" aria-label="Top Rated Shows">
          {Content.SHOWS.map((show, i) => {
            return <WebGLPoster key={i} posterURL={show} />;
          })}
        </WebGLContentList>
      </WebGLImages>
      <div className="padding" />
    </div>
  );
};
