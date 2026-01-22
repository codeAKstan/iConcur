import type { ReactNode } from "react"
import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ContractDraftingLayoutProps {
  form: ReactNode
  preview: ReactNode
}

export function ContractDraftingLayout({ form, preview }: ContractDraftingLayoutProps) {
  const [activeTab, setActiveTab] = useState<"edit" | "preview">("edit")

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-display antialiased overflow-hidden h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="flex-none flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark px-6 py-3 z-20">
        <div className="flex items-center gap-4 text-gray-900 dark:text-white">
          <Image src="/logo.png" alt="iConcur Logo" width={128} height={128} className="rounded-lg" />
          {/* <h2 className="text-gray-900 dark:text-white text-xl font-bold hidden md:block">iConcur</h2> */}
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("edit")}
            className={cn(
              "px-4 py-1.5 text-sm font-semibold rounded-md transition-all",
              activeTab === "edit"
                ? "bg-white dark:bg-gray-700 text-primary shadow-sm"
                : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
            )}
          >
            Edit
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-4 py-1.5 text-sm font-semibold rounded-md transition-all",
              activeTab === "preview"
                ? "bg-white dark:bg-gray-700 text-primary shadow-sm"
                : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-200"
            )}
          >
            Preview
          </button>
        </div>

        <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
          <nav className="flex items-center gap-9">
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
      <main className="flex-1 flex overflow-hidden lg:flex-row relative">
        <div className={cn(
          "w-full h-full lg:contents",
          activeTab === "edit" ? "flex" : "hidden"
        )}>
          {form}
        </div>
        <div className={cn(
          "w-full h-full lg:contents",
          activeTab === "preview" ? "flex" : "hidden"
        )}>
          {preview}
        </div>
      </main>
    </div>
  )
}
