import { Outlet, useLocation } from "react-router-dom";
import { ROOT_ROUTES } from "@route/constants.ts";
import { cls } from "@utils/helpers.ts";
import { tv } from "tailwind-variants";
import { useResponsiveBreakpoint } from "@/hooks/useResponsiveBreakpoint.ts";
import { InHeader } from "@components/InHeader.tsx";
import { OutHeader } from "@components/OutHeader.tsx";

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
          "z-10 flex h-5/6 w-5/6 rounded-lg bg-white shadow-lg shadow-black",
          screenVariants({ outletWrapper: "default" }),
          screenVariants({ outletWrapper: "lg" })
        )}
      >
        {!isHome && isLarge ? <InHeader /> : null}
        <Outlet />
        <OutHeader />
      </div>
      {isHome ? (
        <div className="muted-mustard-color absolute bottom-0 h-1/2 w-screen"></div>
      ) : null}
    </main>
  );
}
