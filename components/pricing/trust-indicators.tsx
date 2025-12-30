import { Rocket, Diamond, Zap, Droplet, Trees } from "lucide-react"

const companies = [
  { name: "AcmeCorp", icon: Rocket },
  { name: "GemStone", icon: Diamond },
  { name: "VoltGrid", icon: Zap },
  { name: "FlowState", icon: Droplet },
  { name: "EcoLogic", icon: Trees },
]

export function TrustIndicators() {
  return (
    <section className="py-16 bg-white dark:bg-[#1a2230] border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <p className="text-center text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-12">
          Trusted by legal teams at modern companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {companies.map((company) => (
            <div key={company.name} className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400 transition-colors">
              <company.icon className="h-6 w-6" strokeWidth={2.5} />
              <span className="text-xl font-bold">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
