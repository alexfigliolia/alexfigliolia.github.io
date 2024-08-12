import { useEffect } from "react";
import { Menu } from "State/Menu";

export const useMenuButtonDelay = () => {
  useEffect(() => {
    Menu.setButtonDelay(3300);
  }, []);
};
