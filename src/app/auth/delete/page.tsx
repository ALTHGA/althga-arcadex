"use client";
import { api } from "@/database/api";
import axios from "axios";
import { useState } from "react";
import { RiAlertFill } from "react-icons/ri";

export default function DeleteAccount() {
  const [sended, setSended] = useState(false);
  const [email, setEmail] = useState<string>("");

  const handleSubmit = async () => {
    setSended(true);
    if (email === "") return;
    try {
      await api.post("/mail", { email: email });
      alert("Foi enviado uma confirmação para seu email.");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.log(error.message);
      }
      setSended(false);
    }
  };

  return (
    <div className="bg-gray-100 h-screen w-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-xl flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-y-0 md:space-x-4 w-fit">
        <span className="p-2 bg-red-100 rounded-full">
          <RiAlertFill className="h-9 w-9 text-red-500" />
        </span>

        <div className="w-auto">
          <h1 className="text-lg text-gray-800">
            {sended
              ? "Pedido de confimação enviado"
              : "Informe seu endereço de email"}
          </h1>
          <p className="text-gray-400 mb-4 w-96">
            {sended
              ? "Foi enviado um pedido de confimação para seu email. Confirme para  efetuar a exclusão da conta."
              : "Será enviado um pedido de confimação para seu email"}
          </p>

          <div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email-address" className="text-sm text-gray-700">
                Endereço de email
              </label>

              <input
                className="border-2 border-gray-200 rounded-md px-3 p-2 focus:ring-4 ring-opacity-50 ring-red-500 focus:outline-red-400"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <span className="flex justify-end mt-10">
              <button
                disabled={sended}
                onClick={handleSubmit}
                className={`bg-red-500 text-white p-2 text-sm rounded-md hover:bg-red-600 transition ease-linear ${
                  sended ? "opacity-35" : "opacity-100"
                }`}
              >
                Enviar solicitação
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
