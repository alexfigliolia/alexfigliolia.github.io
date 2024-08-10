import { createUseState } from "@figliolia/react-galena";
import { ScreenModel } from "Models/ScreenModel";
import type { IScreen } from "Models/types";

export const Screen = new ScreenModel();
export const useScreen = createUseState(Screen);

export const selectDimensions = (state: IScreen) => {
  return [state.width, state.height];
};
