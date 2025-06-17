import AgainstTheTide from "./Resources/skateboard/against-the-tide.webp";
import BlackAndYellow from "./Resources/skateboard/black-and-yellow.webp";
import GrayAndBlack from "./Resources/skateboard/gray-and-black.webp";
import GreenAndNavy from "./Resources/skateboard/green-and-navy.webp";
import GridStreaks from "./Resources/skateboard/grid-streaks.webp";
import OniMask from "./Resources/skateboard/OniMask.webp";
import PinkSwirl from "./Resources/skateboard/PinkSwirl.webp";
import RedAndBlack from "./Resources/skateboard/red-and-black.webp";
import RedAndWhite from "./Resources/skateboard/red-and-white.webp";
import ThankYou from "./Resources/skateboard/thank-you-deck.webp";
import WheelBlack from "./Resources/skateboard/wheel-black.webp";
import WheelBlue from "./Resources/skateboard/wheel-blue.webp";
import WheelCream from "./Resources/skateboard/wheel-cream.webp";
import WheelGreen from "./Resources/skateboard/wheel-green.webp";
import WheelNavy from "./Resources/skateboard/wheel-navy.webp";
import WheelPink from "./Resources/skateboard/wheel-pink.webp";
import WheelPurple from "./Resources/skateboard/wheel-purple.webp";
import WheelRed from "./Resources/skateboard/wheel-red.webp";
import WheelYellow from "./Resources/skateboard/wheel-yellow.webp";
import YellowAndBlack from "./Resources/skateboard/yellow-and-black.webp";

export class SkateboardOptions {
  public static readonly METALS: Record<string, string> = {
    Black: "#333",
    Gray: "#6F6E6A",
    Navy: "#34495E",
    Cream: "#DEB887",
    White: "#eee",
    Red: "#E84118",
    Blue: "#068BD3",
    Green: "#A6E22E",
    Yellow: "#F1C40F",
    Purple: "#8E44AD",
    Magenta: "#BA3763",
    Pink: "#F1396E",
  };

  public static readonly METAL_OPTIONS = Object.keys(this.METALS);

  public static readonly DECKS: Record<string, string> = {
    "Oni Mask": OniMask,
    "Pink Swirl": PinkSwirl,
    "Red And Black": RedAndBlack,
    "Against The Tide": AgainstTheTide,
    "Thank You": ThankYou,
    "Yellow And Black": YellowAndBlack,
    "Red And White": RedAndWhite,
    "Black And Yellow": BlackAndYellow,
    "Green And Navy": GreenAndNavy,
    "Gray And Black": GrayAndBlack,
    "Grid Streaks": GridStreaks,
  };

  public static readonly DECK_OPTIONS = Object.keys(this.DECKS);

  public static readonly WHEELS: Record<string, string> = {
    Black: WheelBlack,
    Blue: WheelBlue,
    Cream: WheelCream,
    Green: WheelGreen,
    Navy: WheelNavy,
    Pink: WheelPink,
    Purple: WheelPurple,
    Red: WheelRed,
    Yellow: WheelYellow,
  };

  public static readonly WHEEL_OPTIONS = Object.keys(this.WHEELS);

  public static get bitmapTextures() {
    return [...Object.values(this.DECKS), ...Object.values(this.WHEELS)];
  }
}
