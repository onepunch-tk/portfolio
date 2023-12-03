import { Outlet, useLocation } from "react-router-dom";
import { ROOT_ROUTES } from "@route/constants.ts";
import { cls } from "@utils/helpers.ts";
import { Navbar } from "@components/Navbar.tsx";
import {
  faAddressBook,
  faClipboard,
  faHouseChimney,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { MenuType } from "@/types/props.ts";
import { IconMenuList } from "@components/ui/IconMenuList.tsx";
import { TextMenuList } from "@components/ui/TextMenuList.tsx";
import { tv } from "tailwind-variants";
import { useResponsiveBreakpoint } from "@/hooks/useNavbarPosition.ts";

const menuList: MenuType[] = [
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

const screenVariants = tv({
  variants: {
    outletWrapper: {
      default: " flex-col-reverse",
      lg: " lg:flex-row lg:justify-between",
    },
    iconNavWrap: {
      lg: " lg:pr-3",
    },
    iconNav: {
      default: " w-full",
      lg: " lg:top-auto lg:w-auto lg:rounded-3xl px-2.5",
    },
  },
});

export function RootScreen() {
  const isHome = useLocation().pathname === ROOT_ROUTES.ROOT;
  const isLarge = useResponsiveBreakpoint();
  return (
    <main
      className={cls(
        "main-bg-default flex flex-col items-center justify-center",
        isHome ? "main-bg-home" : "main-bg"
      )}
    >
      <div
        className={cls(
          "z-10 flex h-3/4 w-5/6 rounded-lg bg-white shadow-lg shadow-black",
          screenVariants({ outletWrapper: "default" }),
          screenVariants({ outletWrapper: "lg" })
        )}
      >
        {!isHome && isLarge ? (
          <header className="invisible grid w-[210px] grid-rows-[0.4fr,1fr] rounded-l-lg lg:visible">
            <figure className="rounded-tl-lg bg-yellow-300"></figure>
            <Navbar className="flex items-center justify-center rounded-bl-lg bg-amber-400">
              <TextMenuList menuList={menuList} />
            </Navbar>
          </header>
        ) : null}
        <Outlet />
        <div
          className={cls(
            "flex items-center justify-center",
            screenVariants({ iconNavWrap: "lg" })
          )}
        >
          <Navbar
            className={cls(
              "z-50 w-full bg-amber-400 py-4",
              screenVariants({ iconNav: "default" }),
              screenVariants({ iconNav: "lg" })
            )}
          >
            <IconMenuList menuList={menuList} />
          </Navbar>
        </div>
      </div>
      {isHome ? (
        <div className="muted-mustard-color absolute bottom-0 h-1/2 w-screen"></div>
      ) : null}
    </main>
  );
}
