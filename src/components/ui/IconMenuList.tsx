import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { memo } from "react";
import { useResponsiveBreakpoint } from "@/hooks/useResponsiveBreakpoint.ts";
import { MenuType } from "@/types/props.ts";
import { tv } from "tailwind-variants";
import { cls } from "@utils/helpers.ts";
import { useMenuState } from "@services/state/store/useMenuState.ts";

type IconMenuListProps = {
  menuList: MenuType[];
};

const list = tv({
  variants: {
    list: {
      default: " ml-1.5 gap-x-1.5",
      lg: " lg:mb-1.5 lg:ml-0 lg:flex-col lg:gap-y-1.5 lg:last:mb-0",
    },
  },
});

export const IconMenuList = memo(function IconMenuList({
  menuList,
}: IconMenuListProps) {
  const isLarge = useResponsiveBreakpoint();
  const currentMenu = useMenuState((state) => state.currentMenu);
  return (
    <ul className="flex justify-center lg:flex-col">
      {menuList.map((menu, index) => (
        <li
          key={index}
          className={cls(
            "flex items-center justify-center",
            list({ list: "default" }),
            list({ list: "lg" })
          )}
        >
          <Link
            className={cls(
              "flex cursor-pointer flex-col transition-[color] duration-300 hover:text-white",
              { "text-white": currentMenu?.name === menu.name }
            )}
            to={menu.url}
          >
            <FontAwesomeIcon icon={menu.icon} />
            {!isLarge ? (
              <h2 className="mt-1 text-xs font-semibold">{menu.name}</h2>
            ) : null}
          </Link>
          {index !== menuList.length - 1 ? (
            <FontAwesomeIcon
              className="invisible text-[0.55rem] lg:visible"
              icon={isLarge ? faEllipsisVertical : faEllipsis}
            />
          ) : null}
        </li>
      ))}
    </ul>
  );
});
