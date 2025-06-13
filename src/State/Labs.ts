import { createUseState } from "@figliolia/react-galena";
import { ILabs, LabsModel } from "Models/LabsModel";

export const Labs = new LabsModel();
export const useLabs = createUseState(Labs);

export const ready = (state: ILabs) => state.ready;
export const loading = (state: ILabs) => state.loading;
export const scene = (state: ILabs) => state.Scene;
