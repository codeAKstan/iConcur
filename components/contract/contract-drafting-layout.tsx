import type { ReactNode } from "react"

export function ContractDraftingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-display antialiased overflow-hidden h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="flex-none flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark px-6 py-3 z-20">
        <div className="flex items-center gap-4 text-gray-900 dark:text-white">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              {/* Icon content */}
            </svg>
          </div>
          <h2 className="text-gray-900 dark:text-white text-xl font-bold">iConcur</h2>
        </div>
        <div className="flex flex-1 justify-end gap-8 items-center">
          <nav className="hidden md:flex items-center gap-9">
            <a
              className="text-gray-900 dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors"
              href="/dashboard"
            >
              Dashboard
            </a>
            <a
              className="text-gray-900 dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors"
              href="/contracts"
            >
              Contracts
            </a>
            <a
              className="text-gray-900 dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Templates
            </a>
            <a
              className="text-gray-900 dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Reports
            </a>
          </nav>
        </div>
      </header>
      {/* Main Content Area - Split View */}
      <main className="flex-1 flex overflow-hidden">{children}</main>
    </div>
  )
}
