export type EducationDocumentCategory =
  | "registration"
  | "local-acts"
  | "paid-services"
  | "education";

export type EducationDocument = {
  id: string;
  title: string;
  description?: string;
  href: string;
  format: "PDF" | "DOCX";
  category: EducationDocumentCategory;
};