"use client";
import { Input } from "@/components/Input";
import { api } from "@/database/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
import { z } from "zod";

const schema = z.object({
  fistName: z.string().min(1, "Campo obrigatório"),
  secondName: z.string().min(1, "Campo obrigatório"),
  emailAddress: z
    .string()
    .email("Digite um email válido")
    .min(1, "Campo obrigatório"),
  phoneNumber: z.string().min(11, "Campo obrigatório"),
  message: z.string().min(1, "Campo obrigatório"),
});

type Form = z.infer<typeof schema>;

export default function Contact() {
  const router = useRouter();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<Form>({ mode: "onBlur", resolver: zodResolver(schema) });

  const handleSubmitContact = async (form: Form) => {
    const fullName = form.fistName + " " + form.secondName;

    await api.post("/contact", {
      email: form.emailAddress,
      fullName,
      message: form.message,
      phone: form.phoneNumber,
    });

    toast.success("Entraremos em contato.");
    router.push("/");
  };

  return (
    <div className="flex flex-col-reverse md:flex-row h-svh w-screen md:px-14  py-14 gap-14 justify-center md:items-start items-center overflow-y-auto">
      <div className="flex justify-center flex-grow h-full ">
        <div className="bg-gradient-to-b h-full w-fit from-blue-500 via-blue-500 to-blue-300 rounded-xl p-14">
          <h1 className="text-white text-lg font-medium">Entrar em contato</h1>

          <div className="mt-8">
            <h2 className="font-medium text-white">Converse conosco</h2>
            <p className="text-white font-light">
              Nossa simpática equipe está aqui para ajudar
            </p>
            <h2 className="font-medium text-white">
              althgatechnology@gmail.com
            </h2>
          </div>

          <div className="mt-8">
            <h2 className="font-medium text-white">Ligue para nós</h2>
            <p className="text-white font-light">Seg. a sexta das 8h às 17h</p>
            <h2 className="font-medium text-white">+55 (11) 96612-7754</h2>
          </div>

          <div className="mt-8 ">
            <h2 className="font-medium text-white">Social media</h2>
            <div className="mt-2">
              <a
                target="_"
                href="https://api.whatsapp.com/send?phone=5511966127754"
              >
                <FaWhatsapp className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center-center gap-8 flex-grow h-full  ">
        <div className="flex gap-8  w-full">
          <Input
            {...register("fistName")}
            label="Primeiro Nome"
            helper={errors.fistName?.message}
            placeholder="José"
          />
          <Input
            {...register("secondName")}
            label="Segundo Nome"
            helper={errors.secondName?.message}
            placeholder="Santos"
          />
        </div>
        <Input
          {...register("emailAddress")}
          label="Email"
          helper={errors.emailAddress?.message}
          placeholder="email@address.com"
        />
        <Input
          {...register("phoneNumber")}
          label="Telefone"
          helper={errors.phoneNumber?.message}
          maxLength={11}
          placeholder="11999999999"
        />

        <span className="h-full">
          <p className="text-sm text-stone-600">Mensagem</p>
          <textarea
            {...register("message")}
            placeholder="Escreva sua dúvida"
            className="border w-full mt-1 p-2 text-sm text-start h-full resize-none outline-blue-500 focus:ring-4 rounded"
          />
        </span>

        <div className="mt-4 flex justify-end">
          <button
            onClick={handleSubmit(handleSubmitContact)}
            className="py-2 px-4 bg-blue-500 rounded text-sm text-white hover:bg-blue-700"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
