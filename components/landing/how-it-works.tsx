import { FileUp, BarChart3, Send } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Draft or Upload",
      description: "Use our rich text editor or simply upload your existing PDF contracts.",
      icon: FileUp,
    },
    {
      number: 2,
      title: "Review with AI",
      description: "Get instant, actionable insights on potential risks and clarity issues.",
      icon: BarChart3,
    },
    {
      number: 3,
      title: "Sign & Share",
      description: "Send for secure digital signature and track the status in real-time.",
      icon: Send,
    },
  ]

  return (
    <section id="how-it-works" className="px-4 py-20 layout-container">
      <div className="max-w-[960px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#0d121b] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            How It Works
          </h2>
          <p className="text-[#0d121b] dark:text-gray-300 text-lg font-normal leading-normal">
            Three simple steps to your next agreement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col gap-6 p-6 rounded-2xl bg-white dark:bg-[#1a2230] shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="absolute -top-3 -right-3 size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                {step.number}
              </div>
              <div className="h-40 rounded-lg bg-blue-50 dark:bg-blue-900/10 flex items-center justify-center text-primary">
                <step.icon className="w-16 h-16" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0d121b] dark:text-white text-xl font-bold">{step.title}</h3>
                <p className="text-[#4c669a] dark:text-gray-400 text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
