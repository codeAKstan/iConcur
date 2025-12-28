export function QuickActions() {
  return (
    <div className="flex flex-col gap-6">
      {/* Quick Actions */}
      <div className="rounded-xl bg-white dark:bg-surface-dark p-6 shadow-sm border border-slate-100 dark:border-slate-800">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-left">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.96-3.83c-.3-.38-.94-.42-1.3-.1-.36.32-.39.98-.09 1.36l3.63 4.72c.25.33.64.52 1.04.52s.79-.19 1.04-.52l4.08-5.2c.3-.38.27-1.04-.09-1.36-.36-.32-1-.31-1.3.08z"></path>
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary">
                Upload for Analysis
              </span>
            </div>
            <svg className="w-5 h-5 text-slate-400 text-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
          </button>
          <button className="w-full group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-left">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                </svg>
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary">
                Use Template
              </span>
            </div>
            <svg className="w-5 h-5 text-slate-400 text-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-[#0A369D] p-6 text-white shadow-md">
        <div className="relative z-10 flex flex-col gap-3">
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
            </svg>
          </div>
          <h3 className="font-bold text-lg">Pro Tip</h3>
          <p className="text-sm text-blue-100 leading-relaxed">
            Did you know? You can analyze risks in third-party contracts using our AI assistant in seconds.
          </p>
          <button className="mt-2 w-fit rounded-lg bg-white px-4 py-2 text-xs font-bold text-primary hover:bg-blue-50 transition-colors">
            Try AI Analysis
          </button>
        </div>
        {/* Decorational circles */}
        <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-white/5 blur-xl"></div>
      </div>
    </div>
  )
}
