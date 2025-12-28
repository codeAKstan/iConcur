const LivePreview = () => {
  return (
    <section className="hidden lg:flex flex-1 bg-gray-100 dark:bg-[#0c1018] relative flex-col items-center justify-start pt-8 pb-8 overflow-y-auto px-4 lg:px-12">
      <div className="sticky top-4 z-10 mb-6 flex items-center gap-2 bg-surface-light dark:bg-surface-dark p-1.5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors" title="Zoom Out">
          <span className="material-symbols-outlined text-[20px]">remove</span>
        </button>
        <span className="text-xs font-medium w-12 text-center text-text-secondary dark:text-gray-300">100%</span>
        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors" title="Zoom In">
          <span className="material-symbols-outlined text-[20px]">add</span>
        </button>
        <div className="w-px h-4 bg-gray-200 dark:bg-gray-700 mx-1"></div>
        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors" title="Download PDF">
          <span className="material-symbols-outlined text-[20px]">download</span>
        </button>
        <button className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors" title="Print">
          <span className="material-symbols-outlined text-[20px]">print</span>
        </button>
      </div>
      <div className="bg-white text-black w-full max-w-[800px] min-h-[1130px] p-16 paper-shadow rounded-sm relative origin-top transform transition-transform duration-200">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
          <div className="text-8xl font-black -rotate-45 uppercase">Draft</div>
        </div>
        <div className="space-y-8 font-serif leading-relaxed text-[15px]">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-2xl font-bold uppercase tracking-widest border-b-2 border-black pb-4 inline-block">Loan Agreement</h1>
            <p className="text-sm font-bold text-gray-500">Contract #LN-2023-8492</p>
          </div>
          <p className="text-justify">
            This Loan Agreement (the "Agreement") is entered into as of
            <span className="bg-blue-50 text-blue-800 px-1 py-0.5 rounded border border-blue-200 font-medium">October 24, 2023</span>
            (the "Effective Date"), by and between:
          </p>
          <div className="pl-8 space-y-4">
            <div className="flex gap-2">
              <span className="font-bold min-w-[80px]">Lender:</span>
              <span className="bg-blue-50 text-blue-800 px-2 rounded border border-blue-200 font-medium w-full max-w-md">Acme Financial Corp.</span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold min-w-[80px]">Borrower:</span>
              <span className="bg-yellow-50 text-yellow-800 px-2 rounded border border-yellow-200 border-dashed font-medium w-full max-w-md italic flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">edit</span> Enter Borrower Name...
              </span>
            </div>
          </div>
          <div className="space-y-4 mt-8">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1">1. Loan Amount & Interest</h2>
            <p className="text-justify">
              The Lender agrees to loan the Borrower the principal sum of
              <span className="bg-yellow-50 text-yellow-800 px-1 py-0.5 rounded border border-yellow-200 border-dashed italic">___________</span>
              (the "Loan"). The unpaid principal shall bear interest at the rate of
              <span className="bg-yellow-50 text-yellow-800 px-1 py-0.5 rounded border border-yellow-200 border-dashed italic">___%</span>
              per annum.
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1">2. Payment Schedule</h2>
            <p className="text-justify">
              Borrower agrees to repay the Loan in monthly installments beginning on [Date] and continuing until the Principal and Interest are paid in full.
            </p>
          </div>
          <div className="space-y-4 mt-6">
            <h2 className="font-bold text-lg border-b border-gray-300 pb-1">3. Governing Law</h2>
            <p className="text-justify">
              This Agreement shall be governed by and construed in accordance with the laws of the State of
              <span className="bg-yellow-50 text-yellow-800 px-1 py-0.5 rounded border border-yellow-200 border-dashed italic">Select Jurisdiction...</span>.
            </p>
          </div>
          <div className="mt-20 flex justify-between items-end pt-12">
            <div className="w-1/3 border-t border-black pt-2">
              <p className="font-bold text-sm">Lender Signature</p>
              <p className="text-xs text-gray-500 mt-1">Acme Financial Corp.</p>
            </div>
            <div className="w-1/3 border-t border-black pt-2">
              <p className="font-bold text-sm">Borrower Signature</p>
              <p className="text-xs text-gray-500 mt-1">Authorized Representative</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 w-full text-center text-xs text-gray-400 font-sans">
          Page 1 of 1 • Generated via iConcur
        </div>
      </div>
      <div className="bg-white w-full max-w-[800px] h-24 mt-4 paper-shadow rounded-sm opacity-50"></div>
    </section>
  );
};

export default LivePreview;
