import { Navbar } from "@components/Navbar.tsx";
import { TextMenuList } from "@components/ui/TextMenuList.tsx";
import { menuList } from "@/constants.ts";
import myImage from "../assets/myImg.jpg";

export function InHeader() {
  return (
    <header className="grid w-[210px] min-w-[210px] grid-rows-[15rem,1fr] rounded-l-lg">
      <figure className="h-full rounded-tl-lg bg-yellow-300">
        <img
          src={myImage}
          alt="My Image"
          className="h-full w-full rounded-l-lg object-cover shadow-lg lg:h-auto"
        />
      </figure>
      <Navbar className="flex items-center justify-center rounded-bl-lg bg-amber-400">
        <TextMenuList menuList={menuList} />
      </Navbar>
    </header>
  );
}
