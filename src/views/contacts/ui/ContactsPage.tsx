import { Contact } from "@/src/widgets/contact";
import { ContactsHero } from "./ContactsHero";
import { ContactsInfo } from "./ContactsInfo";
import { ContactsMap } from "./ContactsMap";

export function ContactsPage() {
  return (
    <>
      <ContactsHero />
      <ContactsInfo />
      <ContactsMap />
      <Contact />
    </>
  );
}