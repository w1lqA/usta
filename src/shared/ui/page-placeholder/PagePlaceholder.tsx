import type { ReactNode } from "react";
import { Container, Section, Heading, Text } from "@/shared/ui";

type Props = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function PagePlaceholder({ title, description, children }: Props) {
  return (
    <Section padding="lg" surface="surface">
      <Container>
        <div className="max-w-[50rem]">
          <Heading as="h1" level="heading-lg" className="mb-6 text-dark-900">
            {title}
          </Heading>
          {description && (
            <Text size="lg" className="mb-8 text-neutral-600">
              {description}
            </Text>
          )}
          {children ?? (
            <div className="rounded-xl border border-dashed border-neutral-300 bg-neutral-50 p-8 text-center text-sm text-neutral-500">
              Страница в разработке
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}