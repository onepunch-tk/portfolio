import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ROOT_ROUTES } from "@route/constants.ts";

export interface WithClassNameType {
  className: string;
}

export interface MenuType {
  url: ROOT_ROUTES;
  icon: IconDefinition;
  name: string;
}
