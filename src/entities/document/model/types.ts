export type LicenseDocument = {
  id: string;
  title: string;
  description?: string;
  image: string;       // превью, для модалки — та же картинка (или крупнее)
  fileType: "license" | "certificate" | "other";
};

export type PdfDocument = {
  id: string;
  title: string;
  description?: string;
  fileType: "pdf";
  fileUrl: string;     // путь к PDF, сейчас "#" — заказчик подложит файлы
  fileSize?: string;   // "1.2 MB"
};