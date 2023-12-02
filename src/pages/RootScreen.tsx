import { Outlet, useLocation } from "react-router-dom";
import { ROOT_ROUTES } from "@route/constants.ts";
import { cls } from "@utils/helpers.ts";
import { Navbar } from "@components/Navbar.tsx";
import { useRef } from "react";
import { useNavbarPosition } from "@/hooks/useNavbarPosition.ts";

export function RootScreen() {
  const outletRef = useRef<HTMLDivElement>(null);
  const navbarPosition = useNavbarPosition(outletRef);
  const isHome = useLocation().pathname === ROOT_ROUTES.ROOT;

  return (
    <main
      className={cls(
        "main-bg-default flex flex-col items-center justify-center",
        isHome ? "main-bg-home" : "main-bg"
      )}
    >
      <div
        ref={outletRef}
        className="z-10 mx-auto h-3/4 w-5/6 rounded-lg bg-white shadow-lg shadow-black"
      >
        <Outlet />
      </div>
      {isHome ? (
        <div className="muted-mustard-color absolute bottom-0 h-1/2 w-screen"></div>
      ) : null}
      <Navbar
        className="fixed z-50 rounded-3xl bg-amber-400 px-2.5 py-4"
        style={{ right: `${navbarPosition}px` }}
      />
    </main>
  );
}
