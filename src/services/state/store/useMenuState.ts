import { create } from "zustand";
import { MenuType } from "@/types/props.ts";

type SelectedMenuType = Pick<MenuType, "url" | "name">;

type MenuState = {
  currentMenu: SelectedMenuType | undefined;
};

type MenuStateAction = {
  selectedMenu: (selectedMenu: SelectedMenuType) => void;
};

export const useMenuState = create<MenuState & MenuStateAction>((set) => ({
  currentMenu: undefined,
  selectedMenu: (selectedMenu) => set(() => ({ currentMenu: selectedMenu })),
}));
