import { createUseState } from "@figliolia/react-galena";
import { RoutingModel } from "Models/RoutingModel";
import type { IRouting } from "Models/types";

export const Routing = new RoutingModel();
export const useRouter = createUseState(Routing);

export const screenClasses = (state: IRouting) => state.classes;
export const isPageActive = (state: IRouting) => state.screenActive;
