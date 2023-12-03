import { PropsWithChildren } from "react";

type SkillCardLgProps = PropsWithChildren & {
  paragraph: string;
};
export function SkillCardLg({ children, paragraph }: SkillCardLgProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-dashed border-amber-500 p-5">
      <div className="flex space-x-4">{children}</div>
      <p className="text-lg">{paragraph}</p>
    </div>
  );
}
