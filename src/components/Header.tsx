"use client";

import SolarLogo from '@/assets/solar.png';
import { useHeader } from "@/hooks/useHeader";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useHeader();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 px-4 pt-4 z-50">
      <header className="bg-[#121212] text-white px-4 py-3 rounded-2xl shadow-lg max-w-7xl mx-auto backdrop-blur-sm bg-opacity-90">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <Image src={SolarLogo} alt="SolarHub Logo" width={32} height={32} />
            SolarHub
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('showcase')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Showcases
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contato
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            Fale Conosco
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 px-4 space-y-3 mt-4 border-t border-gray-800">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('showcase')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors"
            >
              Showcases
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 transition-colors text-center mt-4"
            >
              Fale Conosco
            </button>
          </div>
        )}
      </header>
    </div>
  );
} 