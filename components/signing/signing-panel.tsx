export function SigningPanel() {
  return (
    <aside className="lg:col-span-4 relative h-full">
      <div className="sticky top-24 space-y-4">
        {/* Main Signing Card */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Card Header */}
          <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Sign Document</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Please adopt your signature below.</p>
          </div>

          <div className="p-6 space-y-6">
            {/* Tabs */}
            <div className="grid grid-cols-2 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg">
              <button className="flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md bg-white dark:bg-slate-700 text-primary shadow-sm transition-all">
                ✏ Draw
              </button>
              <button className="flex items-center justify-center gap-2 py-2 text-sm font-medium rounded-md text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all">
                ⌨ Type
              </button>
            </div>

            {/* Canvas Area */}
            <div className="space-y-2">
              <div className="h-40 w-full bg-slate-50 dark:bg-slate-900 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center cursor-crosshair hover:border-primary/50 hover:bg-primary/5 transition-all overflow-hidden relative">
                <div className="text-center pointer-events-none">
                  <span className="text-slate-400 text-3xl mb-1">✒</span>
                  <p className="text-xs text-slate-400 font-medium">Draw your signature here</p>
                </div>
              </div>
              <button className="absolute top-2 right-2 p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
                ↻
              </button>
            </div>

            {/* Agreement Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 p-3 rounded-lg border border-transparent hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer group">
                <input
                  className="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary dark:focus:ring-offset-slate-800 dark:ring-offset-slate-800 focus:ring-2 dark:bg-slate-700 dark:border-slate-600 cursor-pointer mt-1"
                  type="checkbox"
                />
                <div className="text-sm">
                  <span className="text-slate-700 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    I agree to be legally bound
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-xs mt-0.5 leading-relaxed">
                    By checking this box, I agree to the{" "}
                    <a className="text-primary hover:underline underline-offset-2 decoration-primary/30" href="#">
                      Terms of Use
                    </a>{" "}
                    and consent to use electronic records and signatures.
                  </p>
                </div>
              </label>
            </div>

            {/* Primary Action */}
            <button className="w-full group relative flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-lg shadow-[0_4px_14px_0_rgba(17,82,212,0.39)] hover:shadow-[0_6px_20px_rgba(17,82,212,0.23)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              <span>Sign & Complete</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Helper Card */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 flex gap-3">
          <span className="text-primary text-[20px] mt-0.5 shrink-0">ℹ️</span>
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-white">Need corrections?</p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              If you find errors in the document, please decline to sign and notify the sender immediately.
            </p>
            <button className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-2 hover:text-red-600 dark:hover:text-red-400 transition-colors">
              Decline to Sign
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
