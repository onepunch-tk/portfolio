import { useSelectMenu } from "@/hooks/useSelectMenu.ts";

export function HomeScreen() {
  useSelectMenu();
  return (
    <section className="grow">
      <h1>home</h1>
    </section>
  );
}
