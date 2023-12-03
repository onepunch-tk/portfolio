import { MenuType } from "@/types/props.ts";
import { ROOT_ROUTES } from "@route/constants.ts";
import {
  faAddressBook,
  faClipboard,
  faHouseChimney,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const menuList: MenuType[] = [
  {
    url: ROOT_ROUTES.ROOT,
    icon: faHouseChimney,
    name: "HOME",
  },
  {
    url: ROOT_ROUTES.ABOUT_ME,
    icon: faUser,
    name: "ABOUT ME",
  },
  {
    url: ROOT_ROUTES.RESUME,
    icon: faClipboard,
    name: "RESUME",
  },
  {
    url: ROOT_ROUTES.CONTACT,
    icon: faAddressBook,
    name: "CONTACT",
  },
];
