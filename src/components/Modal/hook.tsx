import { useState } from "react";

interface Props {
  title: string;
  content: React.ReactNode;
}

export const useModal = () => {
  const [modal, setModal] = useState<Props>();

  function closeModal() {
    setModal(undefined);
  }

  function openModal(modal: Props) {
    setModal((old) => ({ ...old, ...modal }));
  }

  return { modal, closeModal, openModal };
};
