import type React from "react"

type PlanType = "Diario" | "Semanal" | "Mensal"

interface PlanSelectorProps {
  selectedPlan: PlanType
  onChange: (plan: PlanType) => void
}

const PlanSelector: React.FC<PlanSelectorProps> = ({ selectedPlan, onChange }) => {
  const plans: PlanType[] = ["Diario", "Semanal", "Mensal"]

  return (
    <div className="flex bg-zinc-800 rounded overflow-hidden">
      {plans.map((plan) => (
        <button
          key={plan}
          onClick={() => onChange(plan)}
          className={`flex-1 py-2 px-3 text-sm transition-all duration-300 ${
            plan === selectedPlan ? "bg-orange-400 text-black font-bold" : "text-gray-400 hover:bg-zinc-700"
          }`}
        >
          {plan}
        </button>
      ))}
    </div>
  )
}

export default PlanSelector

