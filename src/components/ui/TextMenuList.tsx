import { MenuType, WithClassNameType } from "@/types/props.ts";
import { memo } from "react";
import { cls } from "@utils/helpers.ts";
import { Link } from "react-router-dom";
import { useMenuState } from "@services/state/store/useMenuState.ts";

type TextMenuListProps = {
  menuList: MenuType[];
};

function Edge({ className }: WithClassNameType) {
  return (
    <div className={cls("flex items-center justify-center", className)}>
      <div className="edge h-1 w-1 bg-black"></div>
      {/*<FontAwesomeIcon className="text-[0.55rem]" icon={faEllipsisVertical} />*/}
      <Ellipsis />
    </div>
  );
}
function Ellipsis() {
  return (
    <div className="flex flex-col gap-y-0.5">
      <div className="h-[2px] w-[2px] bg-black" />
      <div className="h-[2px] w-[2px] bg-black" />
      <div className="h-[2px] w-[2px] bg-black" />
      <div className="h-[2px] w-[2px] bg-black" />
      <div className="h-[2px] w-[2px] bg-black" />
    </div>
  );
}

export const TextMenuList = memo(function TextMenuList({
  menuList,
}: TextMenuListProps) {
  const currentMenu = useMenuState((state) => state.currentMenu);
  return (
    <ul>
      <Edge className="flex-col" />
      {menuList.map((menu, index) => (
        <li key={index} className="flex flex-col items-center justify-center">
          <Link
            to={menu.url}
            className={cls(
              "cursor-pointer transition-[color] duration-300 hover:text-white",
              { "text-white": currentMenu?.name === menu.name }
            )}
          >
            <h2 className="my-1.5 text-lg font-semibold">{menu.name}</h2>
          </Link>
          {index !== menuList.length - 1 ? <Ellipsis /> : null}
        </li>
      ))}
      <Edge className="flex-col-reverse" />
    </ul>
  );
});
