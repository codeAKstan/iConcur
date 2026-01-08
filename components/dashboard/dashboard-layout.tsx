"use client"

import type { ReactNode } from "react"
import { DashboardSidebar } from "./dashboard-sidebar"

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 h-screen flex overflow-hidden font-display antialiased">
      <DashboardSidebar className="hidden lg:flex" />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">{children}</main>
    </div>
  )
}
