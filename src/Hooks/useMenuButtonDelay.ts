import { useEffect } from "react";
import { Menu } from "State/Menu";

export const useMenuButtonDelay = (delay = 3300) => {
  useEffect(() => {
    Menu.setButtonDelay(delay);
  }, [delay]);
};
