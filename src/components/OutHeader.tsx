import { cls } from "@utils/helpers.ts";
import { Navbar } from "@components/Navbar.tsx";
import { IconMenuList } from "@components/ui/IconMenuList.tsx";
import { menuList } from "@/constants.ts";
import { tv } from "tailwind-variants";

const header = tv({
  variants: {
    iconNavWrap: {
      lg: " lg:pr-3",
    },
    iconNav: {
      default: " w-full",
      lg: " lg:top-auto lg:w-auto lg:rounded-3xl px-2.5",
    },
  },
});

export function OutHeader() {
  return (
    <div
      className={cls(
        "flex items-center justify-center",
        header({ iconNavWrap: "lg" })
      )}
    >
      <Navbar
        className={cls(
          "z-50 w-full rounded-t-lg bg-amber-400 py-4",
          header({ iconNav: "default" }),
          header({ iconNav: "lg" })
        )}
      >
        <IconMenuList menuList={menuList} />
      </Navbar>
    </div>
  );
}
