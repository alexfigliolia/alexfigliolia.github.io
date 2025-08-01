import { WindowManager } from "@figliolia/galena-window";
import { createUseState } from "@figliolia/react-galena";
import type { IScreen } from "Models/types";

export const Screen = new WindowManager("IMMEDIATE");
export const useScreen = createUseState(Screen);

export const selectDimensions = (state: IScreen) => {
  return [state.width, state.height];
};

export const selectHeight = (state: IScreen) => state.height;

export const minDimension = (state: IScreen) =>
  Math.min(state.width, state.height);
