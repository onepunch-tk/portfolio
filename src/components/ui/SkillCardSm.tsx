import { PropsWithChildren } from "react";

type SkillCardSmProps = PropsWithChildren & {
  paragraph: string;
};

export function SkillCardSm({ children, paragraph }: SkillCardSmProps) {
  return (
    <div className="box-border flex items-center space-x-3 border-b border-dashed border-neutral-900 py-2">
      <div className="mx-auto flex min-w-[50px] items-center justify-center">
        {children}
      </div>
      <p>{paragraph}</p>
    </div>
  );
}
