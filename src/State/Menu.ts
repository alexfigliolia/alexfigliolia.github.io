import { createUseState } from "@figliolia/react-galena";
import { MenuModel } from "Models/MenuModel";
import type { IMenu } from "Models/types";

export const Menu = new MenuModel();
export const useMenu = createUseState(Menu);

export const isMenuOpen = (state: IMenu) => state.menuOpen;
export const getButtonDelay = (state: IMenu) => state.buttonDelay;
