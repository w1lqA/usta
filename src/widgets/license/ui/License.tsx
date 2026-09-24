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
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
          <LicenseInfo onOpen={() => setOpen(true)} />

          <div className="flex items-center justify-center px-10 py-20 lg:px-16 lg:py-28">
            <LicensePreview onOpen={() => setOpen(true)} />
          </div>
        </div>
      </Container>

      <LicenseModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}