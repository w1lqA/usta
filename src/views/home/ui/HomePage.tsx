import { Hero } from "@/widgets/hero";
import { About } from "@/widgets/about";
import { Programs } from "@/widgets/programs";
import { License } from "@/widgets/license";
import { Contact } from "@/widgets/contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <License />
      <Contact />
    </>
  );
}