import { AboutHero } from "./AboutHero";
import { AboutLicense } from "./AboutLicense";
import { AboutEducationLevels } from "./AboutEducationLevels";
import { AboutProgramsTable } from "./AboutProgramsTable";
import { AboutAdditionalInfo } from "./AboutAdditionalInfo";
import { AboutContacts } from "./AboutContacts";

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutLicense />
      <AboutEducationLevels />
      <AboutProgramsTable />
      <AboutAdditionalInfo />
      <AboutContacts />
    </>
  );
}