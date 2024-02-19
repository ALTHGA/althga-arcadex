"use client";
import { useEffect, useState } from "react";

type Props = {
  visible: boolean;
  onClose: () => void;
};

export function Modal({ visible, onClose }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [visible]);

  const closeModal = () => {
    setIsMounted(false);
    setTimeout(() => {
      onClose();
    }, 300); // Tempo suficiente para a animação de saída
  };

  return (
    <>
      {visible && (
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 ${
            isMounted
              ? "transition-opacity duration-300 opacity-100"
              : "transition-opacity duration-300 opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={closeModal}
          ></div>

          <div className="bg-white p-6 rounded-lg z-10">
            <h2 className="text-xl font-semibold mb-4">Modal Content</h2>
            <p>Seu conteúdo modal aqui...</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
              onClick={closeModal}
            >
              Fechar Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
}
