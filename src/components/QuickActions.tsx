const QuickActions = () => {
  return (
    <>
      <div className="rounded-xl bg-white dark:bg-surface-dark p-6 shadow-sm border border-slate-100 dark:border-slate-800">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-left">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">upload_file</span>
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary">Upload for Analysis</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-[18px]">chevron_right</span>
          </button>
          <button className="w-full group flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-left">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">content_copy</span>
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary">Use Template</span>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-[#0A369D] p-6 text-white shadow-md">
        <div className="relative z-10 flex flex-col gap-3">
          <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <span className="material-symbols-outlined">lightbulb</span>
          </div>
          <h3 className="font-bold text-lg">Pro Tip</h3>
          <p className="text-sm text-blue-100 leading-relaxed">
            Did you know? You can analyze risks in third-party contracts using our AI assistant in seconds.
          </p>
          <button className="mt-2 w-fit rounded-lg bg-white px-4 py-2 text-xs font-bold text-primary hover:bg-blue-50 transition-colors">
            Try AI Analysis
          </button>
        </div>
        <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-white/5 blur-xl"></div>
      </div>
    </>
  );
};

export default QuickActions;
