import { ProgramsHero } from "./ProgramsHero";
import { ProgramsIntro } from "./ProgramsIntro";
import { ProgramsCatalog } from "./ProgramsCatalog";
import { ProgramsCTA } from "./ProgramsCTA";

export function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramsIntro />
      <ProgramsCatalog />
      <ProgramsCTA />
    </>
  );
}