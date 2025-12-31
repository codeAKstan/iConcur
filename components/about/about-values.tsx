import { Shield, Zap, Eye } from "lucide-react"

export function AboutValues() {
  const values = [
    {
      icon: Eye,
      title: "Transparency",
      description:
        "Clear terms. No hidden clauses. We prioritize trust by ensuring our processes are open and understandable.",
    },
    {
      icon: Shield,
      title: "Security First",
      description:
        "Bank-grade protection for every document. Your data privacy is the cornerstone of our products.",
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description:
        "Draft, review, and sign in minutes. We automate the mundane so you can move faster.",
    },
  ]
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[#0d121b] dark:text-white text-2xl font-black tracking-tight mb-8">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-[#e7ebf3] dark:border-[#2a3441] bg-white dark:bg-[#1a2230] p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 text-primary mb-3">
                <v.icon className="w-6 h-6" />
                <span className="text-sm font-semibold">{v.title}</span>
              </div>
              <p className="text-[#4c669a] dark:text-gray-400">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
