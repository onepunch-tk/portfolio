import { Navbar } from "@components/Navbar.tsx";
import { TextMenuList } from "@components/ui/TextMenuList.tsx";
import { menuList } from "@/constants.ts";

export function InHeader() {
  return (
    <header className="invisible grid w-[210px] grid-rows-[0.4fr,1fr] rounded-l-lg lg:visible">
      <figure className="rounded-tl-lg bg-yellow-300"></figure>
      <Navbar className="flex items-center justify-center rounded-bl-lg bg-amber-400">
        <TextMenuList menuList={menuList} />
      </Navbar>
    </header>
  );
}
