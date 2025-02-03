"use client"

import { FaDiscord, FaYoutube, FaTiktok } from "react-icons/fa";
import Image from "next/image"
import logo from '@/assets/solar.png'

export default function ProfileSection() {
  return (

    <div className="relative h-[70vh] sm:h-[80vh] md:h-[70vh] w-[90%] sm:w-[95%] max-w-7xl rounded-xl mx-auto flex flex-col justify-between mt-24">

      <div className="bg-zinc-900/55 text-white rounded-xl p-8 border-t-orange-400 border-t-4">
        <div className="flex flex-col items-center relative">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full overflow-hidden relative mb-4">
            <Image
              src={logo}
              alt="SolarHub Logo"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>

          {/* Description */}
          <p className="text-center text-zinc-300 mb-8 max-w-3xl">
            Bem-vindo à SolarHub, sua loja premium de produtos para Valorant! Oferecemos uma seleção exclusiva de skins,
            pacotes e acessórios para elevar sua experiência de jogo a outro nível. Nossa plataforma foi desenvolvida
            pensando nos jogadores mais exigentes, garantindo segurança e qualidade em todas as transações. Não perca
            tempo e venha descobrir nossa coleção incrível de itens que farão você se destacar em todas as suas
            partidas!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
      <button
        onClick={() => window.open("https://discord.gg/solarhub", "_blank")}
        className="group flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg
          bg-gradient-to-r from-[#5865F2] to-[#7289DA] 
          hover:shadow-lg hover:shadow-[#5865F2]/50
          active:scale-95
          transform transition-all duration-300 ease-in-out"
      >
        <FaDiscord className="h-5 w-5 group-hover:animate-bounce" />
        <span className="group-hover:tracking-wider transition-all">
          DISCORD
        </span>
      </button>

      <button
        onClick={() => window.open("https://youtube.com/@solarhub", "_blank")}
        className="group flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg
          bg-gradient-to-r from-red-600 to-red-500
          hover:shadow-lg hover:shadow-red-500/50
          active:scale-95
          transform transition-all duration-300 ease-in-out"
      >
        <FaYoutube className="h-5 w-5 group-hover:animate-pulse" />
        <span className="group-hover:tracking-wider transition-all">
          YOUTUBE
        </span>
      </button>

      <button
        onClick={() => window.open("https://tiktok.com/@solarhub", "_blank")}
        className="group flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg
          bg-gradient-to-r from-black via-[#2cabff6b] to-black
          hover:shadow-lg hover:shadow-blue-400/30
          active:scale-95
          transform transition-all duration-300 ease-in-out"
      >
        <FaTiktok className="h-5 w-5 group-hover:animate-spin" />
        <span className="group-hover:tracking-wider transition-all">
          TIKTOK
        </span>
      </button>
    </div>
        </div>
      </div>
    </div>
  )
}

