import { Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { FullScreen } from "Components/FullScreen";
import { LabsScene } from "Components/LabsScene";
import ATLSmall from "Images/atl-small.jpg";
import BackgroundSmall from "Images/background-small.webp";
import CartaSmall from "Images/carta-small.jpg";
import GnocciSmall from "Images/gnocchi-small.jpg";
import OpenSourceSmall from "Images/openSource-small.webp";
import RepublicSmall from "Images/republic-small.jpg";
import SkedgeSmall from "Images/skedge-small.jpg";
import WordCloudsSmall from "Images/wordClouds-small.png";
import { PropLess } from "Tools/Types";
import { MagazineContextProvider } from "./Context";
import { Controls } from "./Controls";
import { Magazine } from "./Magazine";
import { IMagazinePage } from "./types";
import "./styles.scss";

const IMAGES = compileImages([
  ATLSmall,
  ATLSmall,
  CartaSmall,
  OpenSourceSmall,
  SkedgeSmall,
  RepublicSmall,
  GnocciSmall,
  WordCloudsSmall,
  BackgroundSmall,
]);

export const MagazineScene = (_: PropLess) => {
  return (
    <MagazineContextProvider>
      <FullScreen className="magazine-scene">
        <LabsScene>
          <Float>
            <Magazine images={IMAGES} />
          </Float>
          <OrbitControls
            enableZoom={false}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 6}
          />
          <ambientLight intensity={2.5} />
          <PerspectiveCamera
            makeDefault
            fov={20}
            zoom={1.5}
            position={[0, -8, 8]}
          />
          <spotLight
            castShadow
            color={[1, 1, 1]}
            intensity={1.5}
            angle={0.6}
            decay={0.1}
            penumbra={0.1}
            position={[0, -5, 20]}
            shadow-bias={-0.0001}
          />
        </LabsScene>
        <Controls pages={IMAGES.length} />
      </FullScreen>
    </MagazineContextProvider>
  );
};

function compileImages(images: string[]) {
  const photos: IMagazinePage[] = [];
  const { length } = images;
  for (let i = 0; i < length; i += 2) {
    photos.push({
      front: images[i % length],
      back: images[(i + 1) % length],
    });
  }
  return photos;
}
