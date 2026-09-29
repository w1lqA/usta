import { Container } from "@/shared/ui";
import { ContactForm } from "@/features/contact-form";
import { ContactInfo } from "./ContactInfo";

type Variant = "home" | "page";

type Props = {
  variant?: Variant;
};

export function Contact({ variant = "home" }: Props) {
  return (
    <section className="bg-[#0f1922] py-24">
      <Container>
        {variant === "home" && (
          <div className="mb-16 flex items-center gap-4 border-b border-white/6 pb-8">
            <div className="h-px w-8 bg-brand-accent" />
            <span className="text-caption font-bold tracking-[0.22em] text-white/30 uppercase">
              Контакты
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <ContactInfo variant={variant} />

          <div>
            <div className="rounded-[0_2rem_0_0] border border-white/7 bg-white/4 p-8 lg:p-10">
              <ContactForm dark />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}