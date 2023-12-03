import { useSelectMenu } from "@/hooks/useSelectMenu.ts";

export function AboutMeScreen() {
  useSelectMenu();
  return (
    <section className="grow">
      <h1>about me</h1>
    </section>
  );
}
