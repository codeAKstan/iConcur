"use client"

export function ContractDraftingForm() {
  return (
    <section className="w-full lg:w-[40%] xl:w-[35%] flex flex-col bg-white dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 z-10 shadow-sm overflow-y-auto">
      {/* Breadcrumbs & Heading */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex flex-wrap gap-2 items-center mb-4 text-xs">
          <a className="text-gray-600 dark:text-gray-400 font-medium hover:text-primary" href="#">
            Home
          </a>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <a className="text-gray-600 dark:text-gray-400 font-medium hover:text-primary" href="#">
            Contracts
          </a>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <span className="text-gray-900 dark:text-white font-semibold">New Draft</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">Drafting New Contract</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Fill in the details below to generate your legal document.
        </p>
      </div>

      {/* Template Selector */}
      <div className="px-6 py-4">
        <h3 className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
          1. Select Template
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          <button className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary text-primary transition-all">
            <span className="text-sm font-semibold whitespace-nowrap">Loan Agreement</span>
          </button>
          <button className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 text-gray-900 dark:text-gray-300 transition-all opacity-70 hover:opacity-100">
            <span className="text-sm font-medium whitespace-nowrap">NDA</span>
          </button>
          <button className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 text-gray-900 dark:text-gray-300 transition-all opacity-70 hover:opacity-100">
            <span className="text-sm font-medium whitespace-nowrap">Service Contract</span>
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-6 py-2 flex-1 space-y-8 pb-32">
        {/* Section 2: Parties */}
        <div className="space-y-4">
          <h3 className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
            2. Parties Involved
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase mb-1.5">
                  Lender (Party A)
                </label>
                <input
                  className="block w-full px-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                  placeholder="Full Legal Name"
                  type="text"
                  defaultValue="Acme Financial Corp."
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase mb-1.5">
                  Borrower (Party B)
                </label>
                <input
                  className="block w-full px-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                  placeholder="Full Legal Name"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Terms */}
        <div className="space-y-4">
          <h3 className="text-gray-900 dark:text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
            3. Terms & Conditions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase mb-1.5">
                Loan Amount
              </label>
              <input
                className="block w-full px-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                placeholder="0.00"
                type="number"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase mb-1.5">
                Interest Rate (%)
              </label>
              <input
                className="block w-full px-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                placeholder="5.0"
                step="0.1"
                type="number"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase mb-1.5">
                Effective Date
              </label>
              <input
                className="block w-full px-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                type="date"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase mb-1.5">
                Jurisdiction / State
              </label>
              <select className="block w-full px-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none shadow-sm cursor-pointer">
                <option>Select State</option>
                <option>California</option>
                <option>New York</option>
                <option>Delaware</option>
                <option>Texas</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 4: AI Actions */}
        <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800/50">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white dark:bg-indigo-900 rounded-lg shadow-sm text-primary dark:text-indigo-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">AI Contract Assistant</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                Let our AI analyze the risk factors and suggest improvements based on recent legal precedents.
              </p>
              <button className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors">
                Analyze Contract
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer Actions */}
      <div className="sticky bottom-0 left-0 w-full p-4 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 flex items-center gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button className="flex-1 h-11 flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          Save Draft
        </button>
        <button className="flex-[2] h-11 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-bold shadow-md shadow-primary/20 transition-all hover:shadow-primary/30 transform active:scale-95">
          Send for Signature
        </button>
      </div>
    </section>
  )
}
