export function DocumentViewer() {
  return (
    <section className="flex-1 flex flex-col bg-[#f0f2f5] dark:bg-[#0d121b] relative z-10 min-w-0 transition-all duration-300">
      {/* Toolbar */}
      <div className="h-14 bg-white dark:bg-[#1a202c] border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-6 shadow-sm z-10 flex-none">
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-slate-800 p-1 rounded-lg">
          <button className="p-1.5 rounded-md hover:bg-white dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-primary transition-all">
            −
          </button>
          <span className="text-xs font-medium w-12 text-center text-slate-600 dark:text-slate-300">100%</span>
          <button className="p-1.5 rounded-md hover:bg-white dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-primary transition-all">
            +
          </button>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-slate-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            🔍
          </button>
          <button className="p-2 text-slate-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            🖨
          </button>
          <button className="p-2 text-slate-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
            ⬇
          </button>
        </div>
      </div>

      {/* Document Canvas */}
      <div className="flex-1 overflow-y-auto p-8 flex justify-center">
        <div className="bg-white dark:bg-[#1e2533] w-full max-w-[816px] min-h-[1056px] shadow-lg rounded-sm p-[96px] relative text-[#1f2937] dark:text-gray-200">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-slate-900 dark:text-white">SERVICE AGREEMENT</h1>
              <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">Contract ID: #8839-ACME</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-slate-900 dark:text-white">Effective Date</p>
              <p className="text-slate-600 dark:text-slate-400">October 24, 2023</p>
            </div>
          </div>

          <div className="space-y-6 text-[15px] leading-[1.8] font-serif text-justify">
            <p>
              This Service Agreement ("Agreement") is made and entered into by and between <strong>Acme Corp</strong>, a
              Delaware corporation ("Client"), and <strong>TechSolutions Inc.</strong>, a California corporation
              ("Provider").
            </p>

            <div className="border-l-2 border-green-500 pl-4 py-2">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">1. SCOPE OF SERVICES</h3>
              <p>
                Provider agrees to perform the services described in{" "}
                <span className="text-primary font-medium underline">Exhibit A</span> attached hereto (the "Services").
                Provider shall perform the Services in a professional and workmanlike manner.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-4 py-2 bg-yellow-50 dark:bg-yellow-900/10">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">2. COMPENSATION</h3>
              <p>
                Client shall pay Provider at the rate of $150 per hour. Payment terms are Net-60 days from receipt of
                invoice. Late payments shall incur interest at a rate of 1.5% per month.
              </p>
            </div>

            <div className="border-l-4 border-red-400 pl-4 py-2 bg-red-50 dark:bg-red-900/10">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">3. INDEMNIFICATION</h3>
              <p>
                Provider agrees to indemnify, defend, and hold harmless Client from any and all claims, damages,
                liabilities, costs, and expenses arising out of or related to Provider's services, regardless of
                negligence or fault.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
