import { ShieldCheck, Gauge, Building2 } from "lucide-react"

export function AboutStats() {
  const stats = [
    { icon: ShieldCheck, label: "Contracts Signed", value: "1M+", sub: "Increased security across 50+ countries" },
    { icon: Gauge, label: "Uptime", value: "99.9%", sub: "Reliable; you can count on iConcur daily" },
    { icon: Building2, label: "Enterprise Clients", value: "500+", sub: "From startups to Fortune 500 companies" },
  ]
  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-[#e7ebf3] dark:border-[#2a3441] bg-white dark:bg-[#1a2230] p-6 shadow-sm"
          >
            <div className="flex items-center gap-3 text-primary mb-3">
              <s.icon className="w-6 h-6" />
              <span className="text-sm font-semibold">{s.label}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-black text-[#0d121b] dark:text-white">{s.value}</span>
              <span className="text-[#4c669a] dark:text-gray-400 text-sm">{s.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
