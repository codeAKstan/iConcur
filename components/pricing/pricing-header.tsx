export function PricingHeader() {
  return (
    <section className="layout-container flex flex-col items-center text-center pt-12 lg:pt-20 pb-4 lg:pb-8 px-4">
      <h1 className="text-[#0d121b] dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em] mb-4 text-balance">
        Simple pricing for <span className="text-primary">powerful contracts</span>
      </h1>
      <p className="text-[#4c669a] dark:text-gray-300 text-lg font-normal leading-relaxed max-w-2xl text-balance">
        Choose the plan that fits your legal workflow. Transparent pricing, no hidden fees. Scale as your team grows.
      </p>
    </section>
  )
}
