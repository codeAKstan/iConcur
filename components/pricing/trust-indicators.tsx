export function TrustIndicators() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-[#151b28]">
      <div className="layout-container px-4">
        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Trusted by innovative teams
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholders for logos */}
          <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
