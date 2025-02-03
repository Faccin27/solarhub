import background from '@/assets/background.jpg';
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-[70vh] sm:h-[80vh] md:h-[70vh] w-[90%] sm:w-[95%] max-w-7xl rounded-xl mx-auto flex flex-col justify-between bg-[#121212] bg-opacity-80 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Image
          src={background}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 py-8 flex flex-col justify-center flex-grow">
        {/* Minimal text above main text */}
        <p className="text-orange-400 mb-2 text-sm md:text-base font-semibold">
          Seu melhor amigo no valorant
        </p>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white mb-6 max-w-4xl">
          Ajustamos a sua <span className="text-orange-400">mira</span>, mostramos seus <span className="text-orange-400">inimigos</span> e removemos seus <span className="text-red-600"> banimentos</span>
        </h1>

        {/* CTA Button */}
        <div>
          <Link
            href="/learn-more"
            className="inline-block bg-[#f69f3b] hover:bg-[#e7cd37] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl transition duration-300 ease-in-out text-sm sm:text-base"
          >
            Compre agora
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end">
          {/* Policy Links */}
          <div className="bg-black bg-opacity-50 rounded-t-xl sm:rounded-tr-xl p-3 sm:p-4 inline-block border-t-2 border-orange-400/60 w-full sm:w-auto">
            <div className="flex flex-wrap justify-center sm:justify-start space-x-2 sm:space-x-4">
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                Refund Policy
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white hover:underline text-xs sm:text-sm"
              >
                Contact Rescuers
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="bg-black bg-opacity-50 rounded-full p-2 mt-4 sm:mt-0 sm:mb-2 sm:mr-4 animate-bounce cursor-pointer">
            <ChevronDown className="text-white" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}
