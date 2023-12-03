import { PropsWithChildren } from "react";

export function ContentWrapper({ children }: PropsWithChildren) {
  return (
    <div className="grid h-full grid-rows-[auto,1fr] bg-amber-400">
      {children}
    </div>
  );
}
