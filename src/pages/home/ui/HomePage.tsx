import { Hero } from "@/widgets/hero";
import { About } from "@/widgets/about";
import { Programs } from "@/widgets/programs";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      {/* TODO: License (Этап 5) */}
      {/* TODO: Contact + ContactForm (Этап 6) */}
    </>
  );
}