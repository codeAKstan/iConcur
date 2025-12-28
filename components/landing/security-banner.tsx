export function SecurityBanner() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-[#151c2a] border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-[960px] mx-auto px-4 flex flex-col items-center text-center gap-6">
        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
          </svg>
          Security First
        </div>
        <h3 className="text-[#0d121b] dark:text-white text-2xl font-bold">Bank-grade Security Standard</h3>
        <p className="text-[#4c669a] dark:text-gray-400 max-w-[600px] text-sm leading-relaxed">
          Your data is encrypted at rest and in transit. We adhere to the strictest privacy protocols to ensure your
          confidential documents remain confidential.
        </p>
        <div className="mt-4 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-900/30 text-xs text-yellow-800 dark:text-yellow-500 max-w-[500px]">
          <strong>Disclaimer:</strong> iConcur provides contract management and analysis tools, not legal advice. Always
          consult with a qualified attorney for legal matters.
        </div>
      </div>
    </section>
  )
}
