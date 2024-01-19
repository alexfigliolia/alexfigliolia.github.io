import type { MenuModel } from "./MenuModel";
import type { RoutingModel } from "./RoutingModel";

export interface IRouting {
  classes: string;
  loading: boolean;
  routeName: string;
  screenActive: boolean;
}

export interface IScreen {
  width: number;
  height: number;
}

export interface IWork {
  index: number;
}

export interface IPrivacy {
  open: boolean;
}

export interface IMenu {
  menuOpen: boolean;
  buttonDelay: number;
  linksVisible: boolean;
}

export type IRoutingAndMenu = {
  Menu: MenuModel;
  Routing: RoutingModel;
};
