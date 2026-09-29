"use client";

import { useState } from "react";
import { Container } from "@/shared/ui";
import { LicenseInfo } from "./LicenseInfo";
import { LicensePreview } from "./LicensePreview";
import { LicenseModal } from "./LicenseModal";

export function License() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-brand-primary">
      <Container>
        <div className="flex flex-col lg:flex-row">
          <div className="flex min-w-0 lg:flex-[1.618]">
            <LicenseInfo onOpen={() => setOpen(true)} />
          </div>

          <div className="flex min-w-0 items-center justify-center pl-10 py-20 lg:flex-1 lg:py-28">
            <LicensePreview onOpen={() => setOpen(true)} />
          </div>
        </div>
      </Container>

      <LicenseModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}