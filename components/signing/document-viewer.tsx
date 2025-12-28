export function DocumentViewer() {
  return (
    <section className="lg:col-span-8 flex flex-col gap-6">
      {/* Document Header (Mobile only) */}
      <div className="lg:hidden">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Service Level Agreement</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Please review the document carefully before signing.
        </p>
      </div>

      {/* The Document "Paper" */}
      <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-none border border-slate-200 dark:border-slate-700 min-h-[800px] p-10 sm:p-16 transition-colors">
        {/* Document Content */}
        <div className="relative z-10 space-y-6 text-slate-700 dark:text-slate-300 font-serif leading-relaxed text-lg">
          <div className="flex justify-between items-end border-b-2 border-slate-900 dark:border-slate-100 pb-4 mb-8">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-sans">SERVICE LEVEL AGREEMENT</h3>
            <span className="text-sm font-sans text-slate-500">Q3 2024 • Rev 1.2</span>
          </div>

          <p className="font-bold uppercase tracking-wider text-xs text-slate-400 font-sans mb-2">1. Introduction</p>
          <p>
            This Service Level Agreement ("Agreement") is made and entered into as of October 15, 2024, by and between{" "}
            <strong>Acme Corp Inc.</strong> ("Provider") and <strong>Globex Corporation</strong> ("Client").
          </p>

          <p className="font-bold uppercase tracking-wider text-xs text-slate-400 font-sans mt-8 mb-2">
            2. Scope of Services
          </p>
          <p>
            Provider agrees to deliver the services described in Exhibit A attached hereto (the "Services"). Provider
            warrants that the Services will be performed in a professional and workmanlike manner.
          </p>

          <ul className="list-disc pl-6 space-y-2 marker:text-primary">
            <li>99.9% Uptime Guarantee for all core infrastructure.</li>
            <li>24/7 dedicated support channel access.</li>
            <li>Quarterly security audits and compliance reporting.</li>
          </ul>

          <p className="font-bold uppercase tracking-wider text-xs text-slate-400 font-sans mt-8 mb-2">
            3. Terms and Termination
          </p>
          <p>
            This Agreement shall commence on the Effective Date and shall continue for a period of twelve (12) months.
            Either party may terminate this Agreement upon thirty (30) days written notice.
          </p>
        </div>

        {/* Page Number */}
        <div className="absolute bottom-8 left-0 right-0 text-center text-xs font-mono text-slate-400">Page 1 of 4</div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 py-4">
        <button
          className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 disabled:opacity-50"
          disabled
        >
          ◀
        </button>
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
          Page 1 / 4
        </span>
        <button className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300">
          ▶
        </button>
      </div>
    </section>
  )
}
