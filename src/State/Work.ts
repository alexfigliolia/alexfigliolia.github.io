import { createUseState } from "@figliolia/react-galena";
import type { IWork } from "Models/types";
import { WorkModel } from "Models/WorkModel";

export const Work = new WorkModel();
export const useWork = createUseState(Work);

export const getSliderIndex = (state: IWork) => state.index;
