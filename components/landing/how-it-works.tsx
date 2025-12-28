export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Draft or Upload",
      description: "Use our rich text editor or simply upload your existing PDF contracts.",
      icon: "upload_file",
    },
    {
      number: 2,
      title: "Review with AI",
      description: "Get instant, actionable insights on potential risks and clarity issues.",
      icon: "analytics",
    },
    {
      number: 3,
      title: "Sign & Share",
      description: "Send for secure digital signature and track the status in real-time.",
      icon: "send",
    },
  ]

  return (
    <section className="px-4 py-20 layout-container">
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
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S15.33 8 14.5 8 13 8.67 13 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S8.33 8 7.5 8 6 8.67 6 9.5 6.67 11 7.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
                </svg>
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
