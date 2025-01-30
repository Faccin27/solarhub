"use client"

import { useState } from "react"
import { CheckCircle, XCircle } from "lucide-react"

interface PlanPrices {
  Diario: string
  Semanal: string
  Mensal: string
}

interface Product {
  name: string
  prices: PlanPrices
  specs: string[]
  isOperational: boolean
  description: string
}

const products: Product[] = [
  {
    name: "Solar Aim",
    prices: { Diario: "R$9,99", Semanal: "R$49,99", Mensal: "R$149,99" },
    specs: [
      "Precisão aprimorada",
      "Ajuste automático",
      "Compatível com todos os modos",
      "Detecção de recoil",
      "Personalização avançada",
    ],
    isOperational: true,
    description:
      "Melhore sua mira com nosso assistente de pontaria avançado. Ajuste-se automaticamente a diferentes situações de jogo.",
  },
  {
    name: "Solar ESP",
    prices: { Diario: "R$14,99", Semanal: "R$74,99", Mensal: "R$224,99" },
    specs: [
      "Visão através de paredes",
      "Detecção de inimigos",
      "Atualização em tempo real",
      "Rastreamento de itens",
      "Alertas sonoros",
    ],
    isOperational: true,
    description:
      "Obtenha informações cruciais sobre seus oponentes e o ambiente de jogo. Veja através de obstáculos e antecipe movimentos inimigos.",
  },
  {
    name: "Solar Spoofer",
    prices: { Diario: "R$19,99", Semanal: "R$99,99", Mensal: "R$299,99" },
    specs: [
      "Ocultação de HWID",
      "Proteção contra detecção",
      "Atualizações frequentes",
      "Bypass de anti-cheat",
      "Modo stealth",
    ],
    isOperational: false,
    description:
      "Proteja sua conta com nossa tecnologia de spoofing avançada. Evite detecções e mantenha seu perfil seguro.",
  },
  {
    name: "Solar Changer",
    prices: { Diario: "R$7,99", Semanal: "R$39,99", Mensal: "R$119,99" },
    specs: [
      "Troca de skins",
      "Desbloqueio de itens",
      "Personalização avançada",
      "Atualização de inventário em tempo real",
      "Previsualização de skins",
    ],
    isOperational: true,
    description:
      "Desbloqueie e use qualquer skin do jogo. Personalize sua experiência visual com nosso avançado trocador de skins.",
  },
]

type PlanType = "Diario" | "Semanal" | "Mensal"

export default function ProductPricing() {
  const [selectedPlans, setSelectedPlans] = useState<{ [key: string]: PlanType }>({
    "Solar Aim": "Diario",
    "Solar ESP": "Diario",
    "Solar Spoofer": "Diario",
    "Solar Changer": "Diario",
  })

  const handlePlanChange = (productName: string) => {
    setSelectedPlans((prev) => ({
      ...prev,
      [productName]: prev[productName] === "Diario" ? "Semanal" : prev[productName] === "Semanal" ? "Mensal" : "Diario",
    }))
  }

  return (
    <div className="w-[90%] sm:w-[95%] max-w-7xl mx-auto my-20">
      <h2 className="text-3xl font-bold text-white mb-16 text-center">Nossos Produtos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-zinc-900 rounded-xl p-6 border border-orange-400/30 hover:border-orange-400/60 transition-all duration-300 relative flex flex-col justify-between min-h-[500px]"
          >
            <div>
              <div className="absolute top-2 right-2 flex items-center">
                {product.isOperational ? (
                  <>
                    <CheckCircle className="text-green-500 mr-1" size={20} />
                    <span className="text-green-500 text-sm">100% Indetectavel</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="text-green-500 mr-1" size={20} />
                    <span className="text-green-500 text-sm">100% Funcional</span>
                  </>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-4 text-sm">{product.description}</p>
              <button
                onClick={() => handlePlanChange(product.name)}
                className="bg-zinc-800 text-white text-sm py-2 px-4 rounded mb-4 w-full relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {selectedPlans[product.name].charAt(0).toUpperCase() + selectedPlans[product.name].slice(1)}
                </span>
                <span className="absolute inset-0 bg-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-orange-400 opacity-0 animate-pulse-slow"></span>
              </button>
              <ul className="text-gray-300 mb-4">
                {product.specs.map((spec, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-2xl font-bold text-orange-400">{product.prices[selectedPlans[product.name]]}</p>
              <button className="bg-orange-400 text-black font-bold py-2 px-4 rounded hover:bg-orange-500 transition-colors duration-200">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

