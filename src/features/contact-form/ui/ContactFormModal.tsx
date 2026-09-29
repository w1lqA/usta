"use client";

import { Modal } from "@/shared/ui";
import { ContactForm } from "./ContactForm";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function ContactFormModal({ open, onClose }: Props) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Оставить заявку"
      className="max-w-lg"
    >
      <p className="mb-6 max-w-[22rem] text-sm leading-relaxed text-neutral-500">
        Оставьте контакты — свяжемся с вами и поможем подобрать подходящий
        формат обучения.
      </p>

      <ContactForm />
    </Modal>
  );
}