export function ContractPreview() {
  return (
    <section className="hidden lg:flex flex-1 bg-gray-100 dark:bg-[#0c1018] relative flex-col items-center justify-start pt-8 pb-8 overflow-y-auto px-4 lg:px-12">
      {/* Toolbar */}
      <div className="sticky top-4 z-10 mb-6 flex items-center gap-2 bg-white dark:bg-surface-dark p-1.5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <button
          className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
          title="Zoom Out"
        >
          −
        </button>
        <span className="text-xs font-medium w-12 text-center text-gray-600 dark:text-gray-300">100%</span>
        <button
          className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
          title="Zoom In"
        >
          +
        </button>
        <div className="w-px h-4 bg-gray-200 dark:bg-gray-700 mx-1"></div>
        <button
          className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
          title="Download PDF"
        >
          ⬇
        </button>
        <button
          className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
          title="Print"
        >
          🖨
        </button>
      </div>

      {/* Paper Document */}
      <div className="bg-white text-black w-full max-w-[800px] min-h-[1130px] p-16 rounded-sm relative origin-top transform transition-transform duration-200 shadow-lg">
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
          <div className="text-8xl font-black -rotate-45 uppercase">Draft</div>
        </div>

        {/* Content */}
        <div className="space-y-8 font-serif leading-relaxed text-[15px]">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-2xl font-bold uppercase tracking-widest border-b-2 border-black pb-4 inline-block">
              Loan Agreement
            </h1>
            <p className="text-sm font-bold text-gray-500">Contract #LN-2023-8492</p>
          </div>

          <p className="text-justify">
            This Loan Agreement (the "Agreement") is entered into as of{" "}
            <span className="bg-blue-50 text-blue-800 px-1 py-0.5 rounded border border-blue-200 font-medium">
              October 24, 2023
            </span>{" "}
            (the "Effective Date"), by and between:
          </p>

          <div className="pl-8 space-y-4">
            <div className="flex gap-2">
              <span className="font-bold min-w-[80px]">Lender:</span>
              <span className="bg-blue-50 text-blue-800 px-2 rounded border border-blue-200 font-medium w-full max-w-md">
                Acme Financial Corp.
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-bold min-w-[80px]">Borrower:</span>
              <span className="bg-yellow-50 text-yellow-800 px-2 rounded border border-yellow-200 border-dashed font-medium w-full max-w-md italic flex items-center gap-1">
                ✏ Enter Borrower Name...
              </span>
            </div>
          </div>

          <div className="border-t-2 border-black pt-6 mt-12">
            <h3 className="font-bold mb-4">1. LOAN AMOUNT AND TERMS</h3>
            <p className="mb-4">
              The Lender agrees to provide the Borrower with a loan in the amount of the principal sum specified in the
              schedule attached hereto...
            </p>
          </div>

          <p className="italic text-gray-600 text-sm">[ Document continues... ]</p>
        </div>
      </div>
      <div className="h-20"></div>
    </section>
  )
}
