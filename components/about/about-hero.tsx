export function AboutHero() {
  return (
    <section className="layout-container flex flex-col gap-8 items-center py-12 lg:py-20 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 max-w-6xl w-full items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-[#0d121b] dark:text-white text-4xl lg:text-5xl font-black leading-[1.1] tracking-[-0.03em]">
            Simplifying Agreements for <span className="text-primary">Everyone</span>
          </h1>
          <p className="text-[#4c669a] dark:text-gray-300 text-lg leading-relaxed">
            We are iConcur. Bringing clarity to contracts with intelligent drafting and analysis, so you can focus on
            building relationships, not deciphering legalese.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="btn-primary h-11 px-6 rounded-xl" href="/careers">
              Join Our Team
            </a>
            <a className="btn-secondary h-11 px-6 rounded-xl" href="/contact">
              Contact Sales
            </a>
          </div>
        </div>
        <div className="relative w-full h-[280px] md:h-[340px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-primary to-indigo-600 opacity-10" />
          <div className="absolute inset-0 bg-[url('/about-us.png')] bg-center" />
         
        </div>
      </div>
    </section>
  )
}
