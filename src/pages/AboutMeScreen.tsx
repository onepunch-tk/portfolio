import { useSelectMenu } from "@/hooks/useSelectMenu.ts";
import { ContentWrapper } from "@components/ContentWrapper.tsx";
import { AboutmeWrapper } from "@components/AboutmeWrapper.tsx";

export function AboutMeScreen() {
  useSelectMenu();
  return (
    <section className="h-full">
      <ContentWrapper>
        <AboutmeWrapper />
      </ContentWrapper>
    </section>
  );
}
