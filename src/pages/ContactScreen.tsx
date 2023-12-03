import { useSelectMenu } from "@/hooks/useSelectMenu.ts";
import { ContentWrapper } from "@components/ContentWrapper.tsx";
import { ContactWrapper } from "@components/ContactWrapper.tsx";

export function ContactScreen() {
  useSelectMenu();
  return (
    <section className="h-full grow">
      <ContentWrapper>
        <ContactWrapper />
      </ContentWrapper>
    </section>
  );
}
