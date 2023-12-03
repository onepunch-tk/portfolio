import { useSelectMenu } from "@/hooks/useSelectMenu.ts";
import { ContentWrapper } from "@components/ContentWrapper.tsx";
import { ResumeWrapper } from "@components/ResumeWrapper.tsx";

export function ResumeScreen() {
  useSelectMenu();
  return (
    <section className="h-full grow">
      <ContentWrapper>
        <ResumeWrapper />
      </ContentWrapper>
    </section>
  );
}
