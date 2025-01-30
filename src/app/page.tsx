import Hero from '@/components/Hero'
import Pricing from '@/components/Pricing'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-yellow-300/30 overflow-hidden">
      <Hero />
      <Pricing />
    </div>
  );
}
