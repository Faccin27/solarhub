"use client";

import PlanSelector from "@/components/PlanSelector";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

type ProductType = {
  name: string;
  description: string;
  isOperational: boolean;
  specs: string[];
  prices: {
    Diario: string;
    Semanal: string;
    Mensal: string;
  };
};

type PlanType = "Diario" | "Semanal" | "Mensal";

const products: ProductType[] = [
  {
    name: "Solar Aim",
    description: "Descrição do Solar Aim",
    isOperational: true,
    specs: [
      "Precisão aprimorada",
      "Ajuste automático",
      "Compatível com todos os modos",
      "Detecção de recoil",
      "Personalização avançada",
    ],
    prices: {
      Diario: "R$ 25,00",
      Semanal: "R$ 50,00",
      Mensal: "R$ 100,00",
    },
  },
  {
    name: "Solar ESP",
    description: "Descrição do Solar ESP",
    isOperational: true,
    specs: [
      "Visão através de paredes",
      "Detecção de inimigos",
      "Atualização em tempo real",
      "Rastreamento de itens",
      "Alertas sonoros",
    ],
    prices: {
      Diario: "R$ 60,00", // ESP é trial, semanal e mensal, não tem diario.
      Semanal: "R$ 120,00",
      Mensal: "R$ 200,00",
    },
  },
  {
    name: "Solar Spoofer",
    description: "Descrição do Solar Spoofer",
    isOperational: false,
    specs: [
      "Ocultação de HWID",
      "Proteção contra detecção",
      "Atualizações frequentes",
      "Bypass de anti-cheat",
      "Modo stealth",
    ],
    prices: {
      Diario: "R$ 50,00",
      Semanal: "N/A", // remover o semanal do spoofer
      Mensal: "R$ 150,00", // adicionar lifetime (350)
    },
  },
  {
    name: "Solar Changer",
    description: "Descrição do Solar Changer",
    isOperational: true,
    specs: [
      "Troca de skins",
      "Desbloqueio de itens",
      "Personalização avançada",
      "Atualização de inventário em tempo real",
      "Previsualização de skins",
    ],
    prices: {
      Diario: "R$ 15,00",
      Semanal: "R$ 40,00",
      Mensal: "R$ 80,00", //adicionar lifetime (200 rs)
    },
  },
];

export default function ProductPricing() {
  const [selectedPlans, setSelectedPlans] = useState<{
    [key: string]: PlanType;
  }>({
    "Solar Aim": "Diario",
    "Solar ESP": "Diario",
    "Solar Spoofer": "Diario",
    "Solar Changer": "Diario",
  });

  const handlePlanChange = (productName: string, newPlan: PlanType) => {
    setSelectedPlans((prev) => ({
      ...prev,
      [productName]: newPlan,
    }));
  };

  return (
    <div className="w-[90%] sm:w-[95%] max-w-7xl mx-auto my-20">

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
                    <span className="text-green-500 text-sm">
                      100% Indetectavel
                    </span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="text-green-500 mr-1" size={20} />
                    <span className="text-green-500 text-sm">
                      100% Funcional
                    </span>
                  </>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {product.name}
              </h3>
              <p className="text-gray-400 mb-4 text-sm">
                {product.description}
              </p>
              <div className="mb-4">
                <PlanSelector
                  selectedPlan={selectedPlans[product.name]}
                  onChange={(newPlan) =>
                    handlePlanChange(product.name, newPlan)
                  }
                />
              </div>
              <ul className="text-gray-300 mb-4">
                {product.specs.map((spec, index) => (
                  <li key={index} className="mb-2 flex items-center">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0"
                      size={16}
                    />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-2xl font-bold text-orange-400">
                {product.prices[selectedPlans[product.name]]}
              </p>
              <button className="bg-orange-400 text-black font-bold py-2 px-4 rounded hover:bg-orange-500 transition-colors duration-200">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
