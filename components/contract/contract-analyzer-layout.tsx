import type { ReactNode } from "react"
import Image from "next/image"

export function ContractAnalyzerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-white h-screen flex flex-col overflow-hidden font-display">
      {/* Top Navigation */}
      <header className="flex-none flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-[#1a202c] px-6 py-3 z-20 shadow-sm">
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="iConcur Logo" width={128} height={128} className="rounded-lg" />
          {/* <h2 className="text-gray-900 dark:text-white text-xl font-bold">iConcur</h2> */}
        </div>
        <div className="flex flex-1 justify-end gap-6 items-center">
          <div className="flex items-center gap-4 text-slate-500">
            <div className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border border-yellow-100 dark:border-yellow-900/30">
              v2.4 (Current)
            </div>
          </div>
          <div className="flex gap-2">
            <button className="h-9 px-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
              Save Draft
            </button>
            <button className="h-9 px-4 bg-primary text-white rounded-lg text-sm font-bold shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors">
              Share
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex overflow-hidden relative">{children}</main>
    </div>
  )
}
