// src/widgets/license/ui/License.tsx
import { Container } from "@/shared/ui";
import { LicenseInfo } from "./LicenseInfo";
import { LicensePreview } from "./LicensePreview";

export function License() {
  return (
    <section className="bg-brand-primary">
      <Container>
        <div className="flex flex-col lg:flex-row">
          <div className="flex min-w-0 lg:flex-[1.618]">
            <LicenseInfo />
          </div>
          <div className="flex min-w-0 items-center justify-center px-10 py-20 lg:flex-1 lg:px-16 lg:py-28">
            <LicensePreview />
          </div>
        </div>
      </Container>
    </section>
  );
}