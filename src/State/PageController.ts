import { createUseState } from "@figliolia/react-galena";
import { PageControllerModel } from "Models/PageControllerModel";
import type { IPageController } from "Models/types";

export const PageController = new PageControllerModel();
export const usePageController = createUseState(PageController);

export const screenClasses = (state: IPageController) => state.classes;
export const isPageActive = (state: IPageController) => state.screenActive;
