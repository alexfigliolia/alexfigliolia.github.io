import ATLLarge from "Images/atl-large.jpg";
import ATLSmall from "Images/atl-small.jpg";
import BackgroundLarge from "Images/background-large.webp";
import BackgroundSmall from "Images/background-small.webp";
import CartaLarge from "Images/carta-large.jpg";
import CartaSmall from "Images/carta-small.jpg";
import CommerceLarge from "Images/gnocchi.jpg";
import CommerceSmall from "Images/gnocchi-small.jpg";
import OpenSourceLarge from "Images/openSource-large.webp";
import OpenSourceSmall from "Images/openSource-small.webp";
import ReactLarge from "Images/react-desktop2.jpg";
import ReactSmall from "Images/react-small.jpg";
import EatLarge from "Images/republic-large.jpg";
import EatSmall from "Images/republic-small.jpg";
import SkedgeLarge from "Images/skedge-desktop2.jpg";
import SkedgeSmall from "Images/skedge-small.jpg";
import SVLarge from "Images/sv-large.jpg";
import SVSmall from "Images/sv-small.jpg";
import WordCloudsLarge from "Images/wordClouds.png";
import WordCloudsSmall from "Images/wordClouds-small.png";
import { Screen } from "State/Screen";

export class Preloader {
  public static async initialize() {
    performance.mark("preload-start");
    const loadFNs: Promise<any>[] = [];
    const imgs = this.imageScope();
    for (let i = 0; i < imgs.length; i++) {
      const img = new Image();
      loadFNs[i] = this.promisify(img);
      img.src = imgs[i];
    }
    await Promise.all(loadFNs);
    performance.measure("preload-end");
  }

  public static loadBackground() {
    const img = new Image();
    const loader = this.promisify(img);
    img.src = this.backgroundScope();
    return loader;
  }

  public static screenScope() {
    const { width } = Screen.getState();
    if (width >= 670) {
      return "large";
    }
    return "small";
  }

  public static imageScope() {
    if (this.screenScope() === "large") {
      return this.largeImages;
    }
    return this.smallImages;
  }

  private static promisify(image: HTMLImageElement) {
    return new Promise(resolve => {
      image.onload = resolve;
      image.onerror = resolve;
    });
  }

  private static backgroundScope() {
    if (this.screenScope() === "large") {
      return BackgroundLarge;
    }
    return BackgroundSmall;
  }

  private static readonly smallImages = [
    ATLSmall,
    CartaSmall,
    WordCloudsSmall,
    SkedgeSmall,
    ReactSmall,
    SVSmall,
    CommerceSmall,
    EatSmall,
    OpenSourceSmall,
  ];

  private static readonly largeImages = [
    ATLLarge,
    CartaLarge,
    WordCloudsLarge,
    SkedgeLarge,
    ReactLarge,
    SVLarge,
    CommerceLarge,
    EatLarge,
    OpenSourceLarge,
  ];
}
