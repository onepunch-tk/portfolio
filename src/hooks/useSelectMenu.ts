import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useMenuState } from "@services/state/store/useMenuState.ts";
import { menuList } from "@/constants.ts";

export const useSelectMenu = () => {
  const path = useLocation().pathname;
  const selectedMenu = useMenuState((state) => state.selectedMenu);
  useEffect(() => {
    const menu = menuList.find((menu) => {
      if (menu.url.length === 1) {
        return "/" === path;
      } else {
        return `/${menu.url}` === path;
      }
    });
    if (menu) {
      selectedMenu(menu);
    }
  }, [path]);
};
