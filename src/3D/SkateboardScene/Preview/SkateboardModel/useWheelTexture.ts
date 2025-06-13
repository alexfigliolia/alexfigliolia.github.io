import WheelTexture1 from "../Resources/skateboard/SkateWheel1.png";
import { useSRGBTexture } from "./useSRGBTexture";

export const useWheelTexture = <T extends string | string[]>(
  urls = WheelTexture1 as T,
) => {
  return useSRGBTexture(urls);
};
