import { WithClassNameType } from "@/types/props.ts";

import { PropsWithChildren } from "react";

export function Navbar({
  className,
  children,
}: WithClassNameType & PropsWithChildren) {
  return <nav className={className}>{children}</nav>;
}
