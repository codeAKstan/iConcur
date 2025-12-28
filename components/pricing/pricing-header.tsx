export function PricingHeader() {
  return (
    <section className="layout-container flex flex-col items-center text-center py-12 lg:py-20 px-4">
      <h1 className="text-[#0d121b] dark:text-white text-4xl lg:text-5xl font-black leading-[1.1] tracking-[-0.033em] mb-4">
        Simple, Transparent <span className="text-primary">Pricing</span>
      </h1>
      <p className="text-[#4c669a] dark:text-gray-300 text-lg font-normal leading-relaxed max-w-2xl">
        Choose the plan that fits your needs. No hidden fees, no surprises.
      </p>
    </section>
  )
}
