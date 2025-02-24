"use client"

import {
  ArrowUp,
  Crosshair,
  Eye,
  Layers,
  Monitor,
  MousePointer,
  Palette,
  Save,
  Settings,
  Shield,
  Users,
  Video,
  Zap
} from "lucide-react"

import type React from "react"

export default function VideoShowcase() {
  const aimFeatures = [
    {
      icon: Crosshair,
      title: "AIMBOT",
      description: "Features como Smooth Humanized, FOV X & Y, e muito mais para um aimbot personalizado",
      videoUrl: "https://www.youtube.com/embed/Zm3OEfb9dWY?start=0&autoplay=0&mute=1"
    },
    {
      icon: Palette,
      title: "Color Selector",
      description: "Escolha cores personalizadas para o aimbot",
    },
    {
      icon: MousePointer,
      title: "Triggerbot",
      description: "Ativa o tiro automaticamente quando o alvo está na mira",
    },
    {
      icon: ArrowUp,
      title: "Recoil Control System",
      description: "Reduz o recuo das armas para tiros mais estáveis",
    },
    {
      icon: Settings,
      title: "CONFIG",
      description: "Configurações avançadas para uma experiência personalizada",
    },
    {
      icon: Eye,
      title: "Stream Proof",
      description: "Oculta recursos do cheat para uma experiência sem detecção ao vivo",
    },
    {
      icon: Monitor,
      title: "Custom Resolution",
      description: "Ajuste a resolução para um visual personalizado",
    },
    {
      icon: Save,
      title: "Save Configs",
      description: "Salve suas configurações preferidas para uso futuro",
    },
  ]

  const espFeatures = [
    {
      icon: Users,
      title: "Player ESP",
      description: "Visualize jogadores através de paredes e obstáculos",
      videoUrl: "https://www.youtube.com/embed/vZ7jt95FYFc?autoplay=0&mute=1"
    },
    {
      icon: Crosshair,
      title: "Aimbot",
      description: "Features como Smooth Humanized, FOV X & Y, e muito mais para um aimbot personalizado",
    },
    {
      icon: Shield,
      title: "External",
      description: "Sistema totalmente externo incluindo o esp.",
    },
    {
      icon: Zap,
      title: "Performance Optimized",
      description: "ESP otimizado para mínimo impacto no desempenho",
    },
    {
      icon: Layers,
      title: "Customizable Overlays",
      description: "Personalize as informações exibidas no ESP",
    },
    {
      icon: Eye,
      title: "Stream Proof",
      description: "Oculta recursos do cheat para uma experiência sem detecção ao vivo",
    },
    {
      icon: Monitor,
      title: "Custom Resolution",
      description: "Ajuste a resolução para um visual personalizado",
    },
    {
      icon: Save,
      title: "Save Configs",
      description: "Salve suas configurações preferidas para uso futuro",
    },
  ]

  return (
    <div className="space-y-16 p-2 max-w-7xl mx-auto">
      <ProductSection title="Solar Aim" features={aimFeatures} videoOnLeft={true} />
      <ProductSection title="Solar ESP" features={espFeatures} videoOnLeft={false} />
    </div>
  )
}

function ProductSection({ title, features, videoOnLeft }: { title: string; features: any[]; videoOnLeft: boolean }) {
  return (
    <div className={`grid lg:grid-cols-2 mt-12 gap-8 ${videoOnLeft ? "" : "lg:grid-flow-col"}`}>
      <div className={videoOnLeft ? "mb-24" : "lg:order-last"}>
        <div className="relative aspect-video bg-zinc-900 rounded-lg overflow-hidden mb-4 group">
          {features[0].videoUrl && (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={features[0].videoUrl}
              title="Feature Video"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button className="px-6 py-2 bg-orange-400 text-black font-bold rounded-lg hover:bg-orange-500 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
      <div className="space-y-6">
        <h3 className="text-xl font-semibold mb-4">Key Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 rounded-lg bg-zinc-800 flex-shrink-0">
        <Icon className="w-5 h-5 text-orange-400" />
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  )
}