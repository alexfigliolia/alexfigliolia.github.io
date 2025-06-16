import { LazyCarScene } from "3D/CarScene/Lazy";
import { LazyMagazineScene } from "3D/MagazineScene/Lazy";
import { LazyNetflixScene } from "3D/Netflix/Lazy";
import { RipplesScene } from "3D/RipplesScene";
import { LazySkateboardScene } from "3D/SkateboardScene/Lazy";
import CarImage from "Images/car-scene.webp";
import MagazineImage from "Images/magazine-slider.webp";
import NetflixImage from "Images/netflix-content-transition.webp";
import RipplesImage from "Images/ripples.webp";
import SkateboardImage from "Images/skateboard-configurator.webp";
import CarVid from "Videos/car-scene.mp4";
import MagazineVideo from "Videos/magazine-slider.mp4";
import NetflixVideo from "Videos/netflix-content-transition.mp4";
import RipplesVideo from "Videos/ripples.mp4";
import SkateboardVideo from "Videos/skateboard-configurator.mp4";

export const API = [
  {
    title: "Car Scene",
    description:
      "A guided three.js exercise in animation, lighting, and visual effects using a C8 Corvette",
    image: CarImage,
    video: CarVid,
    scene: <LazyCarScene />,
    preload: LazyCarScene.preload,
  },
  {
    title: "Skateboard Configurator",
    description:
      "A guided three.js tutorial building a CMS driven product configurator",
    image: SkateboardImage,
    video: SkateboardVideo,
    scene: <LazySkateboardScene />,
    preload: LazySkateboardScene.preload,
  },
  {
    title: "Netflix Design Concept",
    description:
      "A webGL experiment replacing all media on the netflix home page with WebGL shaders",
    image: NetflixImage,
    video: NetflixVideo,
    scene: <LazyNetflixScene />,
    preload: LazyNetflixScene.preload,
  },
  {
    title: "WebGL Ripples",
    description:
      "A dependency-free webGL shader library that brings water ripples to ordinary background images",
    image: RipplesImage,
    video: RipplesVideo,
    scene: <RipplesScene />,
  },
  {
    title: "Magazine Slider",
    description: "A fun image slider originally designed by Wassim Samad",
    image: MagazineImage,
    video: MagazineVideo,
    scene: <LazyMagazineScene />,
    preload: LazyMagazineScene.preload,
  },
] as const;
