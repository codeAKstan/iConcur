const AiPanel = () => {
  return (
    <aside className="w-[400px] bg-white dark:bg-[#1a202c] border-l border-gray-200 dark:border-slate-700 flex flex-col z-20 shadow-xl">
      <div className="p-5 border-b border-gray-100 dark:border-slate-800 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-slate-800 dark:to-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl animate-pulse">auto_awesome</span>
            <h3 className="font-bold text-lg text-slate-800 dark:text-white">AI Analysis</h3>
          </div>
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase rounded tracking-wider">Completed</span>
        </div>
        <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-slate-600 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Risk Level</p>
            <p className="text-xl font-bold text-slate-800 dark:text-white">Medium Risk</p>
          </div>
          <div className="relative size-12 flex items-center justify-center">
            <svg className="size-full -rotate-90" viewBox="0 0 36 36">
              <path className="text-gray-100 dark:text-slate-600" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
              <path className="text-yellow-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="60, 100" strokeWidth="3"></path>
            </svg>
            <span className="absolute text-sm font-bold text-yellow-600 dark:text-yellow-400">60</span>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-5 space-y-6">
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">summarize</span> Summary
          </h4>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border border-slate-100 dark:border-slate-700">
            <ul className="list-disc pl-4 space-y-2">
              <li>This is a Service Agreement for a fixed rate of $150/hr.</li>
              <li>The contract outlines strict one-sided indemnification clauses favoring the Client.</li>
              <li>Payment terms are extended (Net-60) which deviates from standard Net-30.</li>
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">flag</span> Flagged Items
            </h4>
            <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold px-2 py-0.5 rounded-full">2</span>
          </div>
          <div className="group relative rounded-lg border border-red-200 dark:border-red-900/50 bg-white dark:bg-slate-800 p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-lg"></div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">High Risk</span>
              <span className="text-xs text-slate-400">Clause 3</span>
            </div>
            <h5 className="font-bold text-slate-800 dark:text-white mb-1">Unilateral Indemnification</h5>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">Provider is solely responsible for all liabilities regardless of fault. This is non-standard.</p>
            <div className="flex gap-2">
              <button className="flex-1 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs py-1.5 rounded hover:bg-gray-50 dark:hover:bg-slate-600 font-medium">Ignore</button>
              <button className="flex-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-xs py-1.5 rounded hover:bg-red-100 dark:hover:bg-red-900/30 font-medium">Suggest Edit</button>
            </div>
          </div>
          <div className="group relative rounded-lg border border-yellow-200 dark:border-yellow-900/50 bg-white dark:bg-slate-800 p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400 rounded-l-lg"></div>
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded">Review</span>
              <span className="text-xs text-slate-400">Clause 2</span>
            </div>
            <h5 className="font-bold text-slate-800 dark:text-white mb-1">Extended Payment Terms</h5>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Net-60 days is longer than the industry standard of Net-30 days.</p>
            <div className="flex gap-2">
              <button className="flex-1 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs py-1.5 rounded hover:bg-gray-50 dark:hover:bg-slate-600 font-medium">Accept</button>
              <button className="flex-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 text-xs py-1.5 rounded hover:bg-yellow-100 dark:hover:bg-yellow-900/30 font-medium">Negotiate</button>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">playlist_add</span> Missing Clauses
          </h4>
          <div className="rounded-lg border border-dashed border-gray-300 dark:border-slate-600 p-3 bg-gray-50 dark:bg-slate-800/30 flex items-center justify-between group cursor-pointer hover:bg-white dark:hover:bg-slate-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">add</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Force Majeure</p>
                <p className="text-xs text-slate-500">Standard protection missing.</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">chevron_right</span>
          </div>
          <div className="rounded-lg border border-dashed border-gray-300 dark:border-slate-600 p-3 bg-gray-50 dark:bg-slate-800/30 flex items-center justify-between group cursor-pointer hover:bg-white dark:hover:bg-slate-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">add</span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-200">Non-Solicitation</p>
                <p className="text-xs text-slate-500">Consider adding for protection.</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">chevron_right</span>
          </div>
        </div>
        <div className="h-6"></div>
      </div>
      <div className="p-5 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-[#151b26]">
        <div className="flex gap-2 mb-4 bg-blue-50 dark:bg-blue-900/10 p-3 rounded border border-blue-100 dark:border-blue-900/20">
          <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-lg flex-none mt-0.5">info</span>
          <p className="text-xs text-blue-800 dark:text-blue-200 leading-normal">
            <strong>Disclaimer:</strong> AI insights are for assistance only and do not constitute legal advice. Please review with a qualified attorney.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="w-full h-11 flex items-center justify-center gap-2 rounded-lg bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-[1.02] transition-all">
            <span>Proceed to Sign</span>
            <span className="material-symbols-outlined text-[20px]">ink_pen</span>
          </button>
          <button className="text-slate-500 dark:text-slate-400 text-xs font-medium hover:text-slate-800 dark:hover:text-slate-200 transition-colors text-center">
            Generate Audit Report
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AiPanel;
