import { WithClassNameType } from "@/types/props.ts";
import {
  faAddressBook,
  faClipboard,
  faEllipsisVertical,
  faHouseChimney,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ROOT_ROUTES } from "@route/constants.ts";
import { Link } from "react-router-dom";

type NavbarProps = WithClassNameType & {
  style: CSSProperties;
};

const menuList = [
  {
    url: ROOT_ROUTES.ROOT,
    icon: faHouseChimney,
  },
  {
    url: ROOT_ROUTES.ABOUT_ME,
    icon: faUser,
  },
  {
    url: ROOT_ROUTES.RESUME,
    icon: faClipboard,
  },
  {
    url: ROOT_ROUTES.CONTACT,
    icon: faAddressBook,
  },
];

export function Navbar({ className, style }: NavbarProps) {
  return (
    <nav style={style} className={className}>
      <ul>
        {menuList.map((menu, index) => (
          <li
            key={index}
            className="mb-1.5 flex flex-col items-center justify-center gap-y-1.5 last:mb-0"
          >
            <Link to={menu.url}>
              <FontAwesomeIcon icon={menu.icon} />
            </Link>
            {index !== menuList.length - 1 ? (
              <FontAwesomeIcon className="text-xs" icon={faEllipsisVertical} />
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
