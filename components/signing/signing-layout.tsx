import type { ReactNode } from "react"

export function SigningLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"></path>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">iConcur</span>
              <div className="hidden md:block h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
              <h1 className="hidden md:block text-sm font-medium text-slate-500 dark:text-slate-400">
                Service Level Agreement - Q3 2024
              </h1>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                ⬇ Download PDF
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">John Doe</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">john.doe@example.com</p>
                </div>
                <div
                  className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center border-2 border-white dark:border-slate-600 shadow-sm"
                  style={{ backgroundImage: "url('/profile-john-doe.jpg')" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">{children}</main>
    </div>
  )
}
