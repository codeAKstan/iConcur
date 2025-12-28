const DocumentViewer = () => {
  return (
    <section className="flex-1 flex flex-col bg-[#f0f2f5] dark:bg-[#0d121b] relative z-10 min-w-0 transition-all duration-300">
      <div className="h-14 bg-white dark:bg-[#1a202c] border-b border-gray-200 dark:border-slate-700 flex items-center justify-between px-6 shadow-sm z-10 flex-none">
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-slate-800 p-1 rounded-lg">
          <button className="p-1.5 rounded-md hover:bg-white dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-primary hover:shadow-sm transition-all" title="Zoom Out">
            <span className="material-symbols-outlined text-[20px]">remove</span>
          </button>
          <span className="text-xs font-medium w-12 text-center text-slate-600 dark:text-slate-300">100%</span>
          <button className="p-1.5 rounded-md hover:bg-white dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-primary hover:shadow-sm transition-all" title="Zoom In">
            <span className="material-symbols-outlined text-[20px]">add</span>
          </button>
        </div>
        <div className="flex items-center gap-4 text-slate-500">
          <div className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-900/30">
            <span className="material-symbols-outlined text-[16px] fill-current">history</span>
            <span>v2.4 (Current)</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-2 text-slate-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors" title="Search">
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>
          <button className="p-2 text-slate-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors" title="Print">
            <span className="material-symbols-outlined text-[20px]">print</span>
          </button>
          <button className="p-2 text-slate-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors" title="Download">
            <span className="material-symbols-outlined text-[20px]">download</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-8 flex justify-center bg-[#f0f2f5] dark:bg-[#0d121b]">
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
              This Service Agreement ("Agreement") is made and entered into by and between <strong>Acme Corp</strong>, a Delaware corporation ("Client"), and <strong>TechSolutions Inc.</strong>, a California corporation ("Provider").
            </p>
            <div className="relative group cursor-pointer transition-colors duration-200 hover:bg-green-50 dark:hover:bg-green-900/10 rounded px-1 -mx-1 border-l-2 border-transparent hover:border-green-500">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">1. SCOPE OF SERVICES</h3>
              <p>Provider agrees to perform the services described in <span className="text-primary font-medium underline decoration-dotted underline-offset-4">Exhibit A</span> attached hereto (the "Services"). Provider shall perform the Services in a professional and workmanlike manner.</p>
            </div>
            <div className="relative group cursor-pointer bg-yellow-50 dark:bg-yellow-900/10 border-l-4 border-yellow-400 rounded-r px-3 py-2 -mx-3 my-2">
              <div className="absolute -right-12 top-0 flex items-center justify-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 shadow-sm ring-4 ring-[#f0f2f5] dark:ring-[#0d121b]">
                  <span className="material-symbols-outlined text-[18px]">warning</span>
                </span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">2. COMPENSATION</h3>
              <p>Client shall pay Provider at the rate of $150 per hour. Payment terms are Net-60 days from receipt of invoice. Late payments shall incur interest at a rate of 1.5% per month.</p>
            </div>
            <div className="relative group cursor-pointer bg-red-50 dark:bg-red-900/10 border-l-4 border-red-400 rounded-r px-3 py-2 -mx-3 my-2">
              <div className="absolute -right-12 top-0 flex items-center justify-center">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 shadow-sm ring-4 ring-[#f0f2f5] dark:ring-[#0d121b]">
                  <span className="material-symbols-outlined text-[18px]">error</span>
                </span>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">3. INDEMNIFICATION</h3>
              <p>Provider agrees to indemnify, defend, and hold harmless Client from any and all claims, damages, liabilities, costs, and expenses arising out of or related to Provider's services, regardless of negligence or fault.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">4. CONFIDENTIALITY</h3>
              <p>Both parties agree to keep all proprietary information confidential. This obligation shall survive the termination of this Agreement for a period of 5 years.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">5. TERMINATION</h3>
              <p>Either party may terminate this Agreement with 30 days written notice. In the event of termination, Client shall pay Provider for all services rendered through the date of termination.</p>
            </div>
            <div className="opacity-50 blur-[1px]">
              <h3 className="font-bold text-slate-900 dark:text-white mb-1">6. GOVERNING LAW</h3>
              <p>This Agreement shall be governed by the laws of the State of California. Any disputes arising hereunder shall be resolved in the courts of San Francisco County.</p>
              <br />
              <p>IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first above written.</p>
            </div>
          </div>
        </div>
        <div className="h-20"></div>
      </div>
    </section>
  );
};

export default DocumentViewer;
