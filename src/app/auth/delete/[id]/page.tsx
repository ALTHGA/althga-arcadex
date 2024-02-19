"use client";

import { api } from "@/database/api";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  params: { id: string };
};

export default function ConfirmDelete({ params }: Props) {
  const navigation = useRouter();
  const { id } = params;

  const [errorResponse, setErrorResponse] = useState<string | null>(null);

  const handleFetchDeleteAccount = async () => {
    try {
      await api.post(`/auth/delete/${id}`);
      navigation.replace("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setErrorResponse(error.response.data);
      }
    }
  };

  useEffect(() => {
    handleFetchDeleteAccount();
  }, [id]);

  return (
    errorResponse && (
      <div className="h-screen w-screen flex items-center justify-center flex-col">
        <img className="w-80 h-80" src="/svg/404.svg" aria-label="Not found" />
        <h1 className="text-lg text-gray-800">Ocorreu um erro grave.</h1>
        <p className="text-gray-400">{errorResponse}</p>
      </div>
    )
  );
}
