const DraftingForm = () => {
  return (
    <section className="w-full lg:w-[40%] xl:w-[35%] flex flex-col bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 z-10 shadow-sm overflow-y-auto">
      <div className="px-6 pt-6 pb-2">
        <div className="flex flex-wrap gap-2 items-center mb-4 text-xs">
          <a href="#" className="text-text-secondary dark:text-gray-400 font-medium hover:text-primary">Home</a>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <a href="#" className="text-text-secondary dark:text-gray-400 font-medium hover:text-primary">Contracts</a>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <span className="text-text-main dark:text-white font-semibold">New Draft</span>
        </div>
        <h1 className="text-3xl font-bold text-text-main dark:text-white tracking-tight mb-2">Drafting New Contract</h1>
        <p className="text-text-secondary dark:text-gray-400 text-sm">Fill in the details below to generate your legal document.</p>
      </div>
      <div className="px-6 py-4">
        <h3 className="text-text-main dark:text-white text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">widgets</span>
          1. Select Template
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <button className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 border border-primary text-primary transition-all">
            <span className="material-symbols-outlined text-[20px]">account_balance</span>
            <span className="text-sm font-semibold whitespace-nowrap">Loan Agreement</span>
          </button>
          <button className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 text-text-main dark:text-gray-300 transition-all opacity-70 hover:opacity-100">
            <span className="material-symbols-outlined text-[20px]">shield</span>
            <span className="text-sm font-medium whitespace-nowrap">NDA</span>
          </button>
          <button className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 text-text-main dark:text-gray-300 transition-all opacity-70 hover:opacity-100">
            <span className="material-symbols-outlined text-[20px]">work</span>
            <span className="text-sm font-medium whitespace-nowrap">Service Contract</span>
          </button>
        </div>
      </div>
      <div className="px-6 py-2 flex-1 space-y-8 pb-32">
        <div className="space-y-4">
          <h3 className="text-text-main dark:text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
            <span className="material-symbols-outlined text-gray-400 text-sm">group</span>
            2. Parties Involved
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary dark:text-gray-400 uppercase mb-1.5">Lender (Party A)</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400 text-[18px]">person</span>
                  </div>
                  <input type="text" className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-gray-50 dark:bg-gray-800 text-text-main dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm" placeholder="Full Legal Name" defaultValue="Acme Financial Corp." />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary dark:text-gray-400 uppercase mb-1.5">Borrower (Party B)</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-gray-400 text-[18px]">badge</span>
                  </div>
                  <input type="text" className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-900 text-text-main dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm" placeholder="Full Legal Name" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-text-main dark:text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-2">
            <span className="material-symbols-outlined text-gray-400 text-sm">gavel</span>
            3. Terms & Conditions
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-semibold text-text-secondary dark:text-gray-400 uppercase mb-1.5">Loan Amount</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 font-bold">$</span>
                </div>
                <input type="number" className="block w-full pl-8 pr-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-900 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="0.00" />
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-xs font-semibold text-text-secondary dark:text-gray-400 uppercase mb-1.5">Interest Rate (%)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-[18px]">percent</span>
                </div>
                <input type="number" step="0.1" className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-900 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" placeholder="5.0" />
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-text-secondary dark:text-gray-400 uppercase mb-1.5">Effective Date</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-[18px]">calendar_today</span>
                </div>
                <input type="date" className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-900 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary shadow-sm" />
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-text-secondary dark:text-gray-400 uppercase mb-1.5">Jurisdiction / State</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-[18px]">location_on</span>
                </div>
                <select className="block w-full pl-10 pr-8 py-2.5 border border-gray-200 dark:border-gray-700 rounded-lg text-sm bg-white dark:bg-gray-900 text-text-main dark:text-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none shadow-sm cursor-pointer">
                  <option>Select State</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Delaware</option>
                  <option>Texas</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-gray-400 text-[20px]">expand_more</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800/50">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white dark:bg-indigo-900 rounded-lg shadow-sm text-primary dark:text-indigo-300">
              <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-text-main dark:text-white mb-1">AI Contract Assistant</h4>
              <p className="text-xs text-text-secondary dark:text-gray-400 mb-3 leading-relaxed">Let our AI analyze the risk factors and suggest improvements based on recent legal precedents.</p>
              <button className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary-dark dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors">
                Analyze Contract <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 left-0 w-full p-4 bg-white/90 dark:bg-surface-dark/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 flex items-center gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <button className="flex-1 h-11 flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-text-main dark:text-white text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <span className="material-symbols-outlined text-[18px]">save</span>
          Save Draft
        </button>
        <button className="flex-[2] h-11 flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-sm font-bold shadow-md shadow-primary/20 transition-all hover:shadow-primary/30 transform active:scale-95">
          <span className="material-symbols-outlined text-[18px]">send</span>
          Send for Signature
        </button>
      </div>
    </section>
  );
};

export default DraftingForm;
