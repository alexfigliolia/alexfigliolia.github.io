import { createUseState } from "@figliolia/react-galena";
import { MenuModel } from "Models/MenuModel";

export const Menu = new MenuModel();
export const useMenu = createUseState(Menu);
