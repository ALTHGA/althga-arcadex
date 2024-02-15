import Image from "next/image";
import { BsApple, BsPersonFill } from "react-icons/bs";
import { BiSolidCheckShield } from "react-icons/bi";
import { IoSpeedometer } from "react-icons/io5";
import { IoLogoAndroid, IoLogoApple } from "react-icons/io";

export default function Home() {
  return (
    <div className="bg-white h-screen overflow-auto m-0">
      <div className="px-14 py-24 flex flex-col items-center  relative bg-gradient-to-br from-blue-200 via-white to-white bg-opacity-0">
        <h1 className="text-2xl md:text-6xl font-bold z-auto text-center bg-gradient-to-r from-blue-600 via-blue-600 to-white inline-block text-transparent bg-clip-text">
          Um método tecnológico de
          <br />
          fazer leituras
        </h1>
        <p className="text-blue-500 mt-5 font-medium text-center">
          Não perca a oportunidade de modernizar, deixe seu trabalho mais
          profissional e produtivo com a tecnologia que o ArcadeX ofereçe
        </p>

        <button className="bg-green-500 py-1.5 px-4 md:p-3 my-10 text-white font-medium rounded-md">
          Começar agora
        </button>

        <div className="flex flex-col items-center md:items-start md:flex-row space-x-0 space-y-4 md:space-y-0 md:space-x-4">
          <div className="text-gray-400 flex items-center text-sm font-medium">
            <BsPersonFill className="mr-2" /> + 100 usuários
          </div>
          <div className="text-gray-400 flex items-center text-sm font-medium">
            <BiSolidCheckShield className="mr-2" />
            Segurança qualificada
          </div>
          <div className="text-gray-400 flex items-center text-sm font-medium">
            <IoSpeedometer className="mr-2" />
            10x rapidez
          </div>
        </div>

        <div className="flex flex-col items-center mt-4">
          <h4 className="text-gray-400">Disponível no:</h4>
          <div className="flex space-x-4 items-center">
            <div className="text-gray-600 font-bold flex items-center">
              <IoLogoAndroid className="mr-2" />
              Android
            </div>
            <div className="text-gray-600 font-bold flex items-center">
              <IoLogoApple className="mr-2" />
              iOS
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex flex-wrap  justify-evenly items-center bg-gray-50 overflow-hidden">
        <div className="p-14">
          <h1 className="font-bold text-3xl text-gray-700  text-center lg:text-left">
            Nova interface!
          </h1>
          <p className="text-gray-700 text-center lg:text-left">
            Tudo o que você mais precisa em um só lugar.
          </p>
        </div>
        <img src="/img/screens.png" />
      </div>

      <div className="bg-blue-600 flex flex-col items-center justify-center py-14 text-white text-center">
        <h1 className="text-xl md:text-3xl font-bold">
          Trabalhe com sua equipe.
        </h1>
        <p>Cadastre seus funcionários, gerencie e organize suas rotas.</p>
      </div>

      <footer className="bg-gray-900 flex flex-col md:flex-row md:justify-between items-center p-4">
        <div className="flex flex-col items-center md:items-start mb-4  md:mb-0">
          <h4 className="text-white font-medium">Entrar em contato!</h4>
          <div className="flex items-center space-x-4">
            <a href="" className="text-gray-400 font-medium">
              WhatsApp
            </a>
            <a href="" className="text-gray-400 font-medium">
              althgatechnology@gmail.com
            </a>
          </div>
        </div>
        <div className="text-center md:text-right text-white font-medium">
          Todos os direitos reservados
          <h1>ALTHGA LTDA - 2024</h1>
        </div>
      </footer>
    </div>
  );
}
