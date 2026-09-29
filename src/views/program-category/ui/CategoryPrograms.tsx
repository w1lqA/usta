"use client";

import { useState } from "react";
import type { Program } from "@/entities/program";
import { Container, Section } from "@/shared/ui";
import { ContactFormModal } from "@/features/contact-form";
import { ProgramItem } from "./ProgramItem";
import { ProgramDetailModal } from "./ProgramDetailModal";

type Props = {
  programs: Program[];
};

export function CategoryPrograms({ programs }: Props) {
  const [activeProgram, setActiveProgram] = useState<Program | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  if (programs.length === 0) {
    return (
      <Section padding="sm" surface="subtle">
        <Container>
          <p className="text-center text-sm text-neutral-500">
            Программы этого направления скоро появятся.
          </p>
        </Container>
      </Section>
    );
  }

  return (
    <Section padding="sm" surface="subtle">
      <Container>
        <div className="mb-10 flex items-end justify-between border-b border-neutral-300 pb-6">
          <p className="text-caption font-bold tracking-[0.22em] text-neutral-500 uppercase">
            {programs.length}{" "}
            {programs.length === 1
              ? "программа"
              : programs.length < 5
                ? "программы"
                : "программ"}
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8">
          {programs.map((program, idx) => (
            <ProgramItem
              key={program.slug}
              program={program}
              index={idx}
              onOpen={setActiveProgram}
            />
          ))}
        </div>
      </Container>

      <ProgramDetailModal
        program={activeProgram}
        onClose={() => setActiveProgram(null)}
        onContact={() => setContactOpen(true)}
      />

      <ContactFormModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </Section>
  );
}