import { useSelectMenu } from "@/hooks/useSelectMenu.ts";
import { ContentWrapper } from "@components/ContentWrapper.tsx";

export function AboutMeScreen() {
  useSelectMenu();
  return (
    <section className="grow">
      <ContentWrapper></ContentWrapper>
    </section>
  );
}
