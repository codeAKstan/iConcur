import { FileText, PenLine, BrainCircuit, ShieldCheck } from "lucide-react"

export function FeaturesGrid() {
  const features = [
    {
      icon: FileText,
      title: "Smart Templates",
      description: "Start with pre-vetted legal templates designed for speed and protection.",
    },
    {
      icon: PenLine,
      title: "Digital Signatures",
      description: "Legally binding e-signatures compliant with global standards (eIDAS, ESIGN).",
    },
    {
      icon: BrainCircuit,
      title: "AI Analysis",
      description: "Automatically detect risks, vague clauses, and unfavorable terms instantly.",
    },
    {
      icon: ShieldCheck,
      title: "Audit-Ready",
      description: "Full digital audit trails for every document modification and signature.",
    },
  ]

  return (
    <section className="px-4 py-20 bg-white dark:bg-[#151c2a] border-y border-[#e7ebf3] dark:border-[#2a3441]">
      <div className="max-w-[1000px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center items-center">
          <h2 className="text-[#0d121b] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight max-w-[720px]">
            Everything you need to agree
          </h2>
          <p className="text-[#4c669a] dark:text-gray-400 text-lg font-normal leading-normal max-w-[600px]">
            Secure, intelligent, and legally binding tools for modern agreements. We handle the complexity so you can
            focus on the deal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group flex flex-col gap-4 rounded-xl border border-[#cfd7e7] dark:border-gray-700 bg-white dark:bg-[#1a2230] p-6 transition-all hover:shadow-lg hover:border-primary/50"
            >
              <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <feature.icon className="w-7 h-7" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d121b] dark:text-white text-lg font-bold leading-tight">{feature.title}</h3>
                <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
