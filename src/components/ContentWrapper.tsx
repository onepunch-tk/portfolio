import { PropsWithChildren } from "react";
import { useMenuState } from "@services/state/store/useMenuState.ts";

export function ContentWrapper({ children }: PropsWithChildren) {
  const currentMenu = useMenuState((state) => state.currentMenu);
  return (
    <div className="flex h-full w-full flex-col p-3 pt-20 lg:px-10">
      <div className="box-content flex max-h-[40px] items-center justify-center border border-dashed border-neutral-900 px-3 lg:mb-10 lg:py-10">
        <h2 className="text-3xl font-extrabold lg:text-5xl">
          {currentMenu?.name}
        </h2>
      </div>
      {children}
    </div>
  );
}
