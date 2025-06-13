import { CarScene } from "3D/CarScene/Lazy";
import { SkateboardScene } from "3D/SkateboardScene/Lazy";
import CarImage from "Images/car-scene.png";
import MagazineImage from "Images/magazine-slider.png";
import NetflixImage from "Images/netflix-content-transition.png";
import SkateboardImage from "Images/skateboard-configurator.png";
import CarVid from "Videos/car-scene.mp4";
import MagazineVideo from "Videos/magazine-slider.mp4";
import NetflixVideo from "Videos/netflix-content-transition.mp4";
import SkateboardVideo from "Videos/skateboard-configurator.mp4";

export const API = [
  {
    title: "Car Scene",
    description:
      "A guided three.js exercise in animation, lighting, and visual effects using a C8 Corvette",
    image: CarImage,
    video: CarVid,
    scene: <CarScene />,
  },
  {
    title: "Skateboard Configurator",
    description:
      "A guided three.js tutorial building a CMS driven product configurator",
    image: SkateboardImage,
    video: SkateboardVideo,
    scene: <SkateboardScene />,
  },
  {
    title: "Netflix Design Concept",
    description:
      "A webGL experiment replacing all media on the netflix home page with WebGL shaders",
    image: NetflixImage,
    video: NetflixVideo,
    scene: <CarScene />,
  },
  {
    title: "WebGL Ripples",
    description:
      "A dependency-free webGL shader library that brings water ripples to ordinary background images",
    image: NetflixImage,
    video: NetflixVideo,
    scene: <CarScene />,
  },
  {
    title: "Magazine Slider",
    description: "A fun image slider originally designed by Wassim Samad",
    image: MagazineImage,
    video: MagazineVideo,
    scene: <CarScene />,
  },
] as const;
