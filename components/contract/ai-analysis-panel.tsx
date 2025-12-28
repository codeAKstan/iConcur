export function AIAnalysisPanel() {
  return (
    <aside className="w-[400px] bg-white dark:bg-[#1a202c] border-l border-gray-200 dark:border-slate-700 flex flex-col z-20 shadow-xl">
      {/* AI Header */}
      <div className="p-5 border-b border-gray-100 dark:border-slate-800 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-slate-800 dark:to-slate-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-primary text-2xl">✨</span>
            <h3 className="font-bold text-lg text-slate-800 dark:text-white">AI Analysis</h3>
          </div>
          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold uppercase rounded">
            Completed
          </span>
        </div>

        {/* Risk Score Card */}
        <div className="bg-white dark:bg-slate-700 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-slate-600 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase">Risk Level</p>
            <p className="text-xl font-bold text-slate-800 dark:text-white">Medium Risk</p>
          </div>
          <div className="relative size-12 flex items-center justify-center">
            <svg className="size-full -rotate-90" viewBox="0 0 36 36">
              <circle
                className="text-gray-200 dark:text-slate-600"
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>
              <circle
                className="text-yellow-500"
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="currentColor"
                strokeDasharray="60, 100"
                strokeWidth="3"
              ></circle>
            </svg>
            <span className="absolute text-sm font-bold text-yellow-600 dark:text-yellow-400">60</span>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6">
        {/* Flagged Clauses */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-400 uppercase">Flagged Items</h4>
            <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold px-2 py-0.5 rounded-full">
              2
            </span>
          </div>

          {/* High Risk Item */}
          <div className="rounded-lg border border-red-200 dark:border-red-900/50 bg-white dark:bg-slate-800 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-2 py-1 rounded">
                High Risk
              </span>
              <span className="text-xs text-slate-400">Clause 3</span>
            </div>
            <h5 className="font-bold text-slate-800 dark:text-white mb-1">Unilateral Indemnification</h5>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Provider is solely responsible for all liabilities regardless of fault. This is non-standard.
            </p>
            <div className="flex gap-2">
              <button className="flex-1 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs py-1.5 rounded hover:bg-gray-50 dark:hover:bg-slate-600 font-medium">
                Ignore
              </button>
              <button className="flex-1 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 text-xs py-1.5 rounded hover:bg-red-100 dark:hover:bg-red-900/30 font-medium">
                Suggest Edit
              </button>
            </div>
          </div>

          {/* Medium Risk Item */}
          <div className="rounded-lg border border-yellow-200 dark:border-yellow-900/50 bg-white dark:bg-slate-800 p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded">
                Review
              </span>
              <span className="text-xs text-slate-400">Clause 2</span>
            </div>
            <h5 className="font-bold text-slate-800 dark:text-white mb-1">Extended Payment Terms</h5>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
              Net-60 days is longer than the industry standard of Net-30 days.
            </p>
            <div className="flex gap-2">
              <button className="flex-1 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-xs py-1.5 rounded hover:bg-gray-50 dark:hover:bg-slate-600 font-medium">
                Accept
              </button>
              <button className="flex-1 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 text-xs py-1.5 rounded hover:bg-yellow-100 dark:hover:bg-yellow-900/30 font-medium">
                Negotiate
              </button>
            </div>
          </div>
        </div>

        <div className="h-6"></div>
      </div>

      {/* Footer Disclaimer */}
      <div className="p-5 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-[#151b26]">
        <div className="flex gap-2 p-3 rounded border border-blue-100 dark:border-blue-900/20 bg-blue-50 dark:bg-blue-900/10">
          <span className="text-blue-600 dark:text-blue-400 text-lg">ℹ️</span>
          <p className="text-xs text-blue-800 dark:text-blue-200">
            <strong>Disclaimer:</strong> AI insights are for assistance only and do not constitute legal advice.
          </p>
        </div>
      </div>
    </aside>
  )
}
