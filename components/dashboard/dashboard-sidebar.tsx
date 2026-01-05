"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useUser } from "@/hooks/use-user"
import { LogOut, LayoutDashboard, FileText, PenTool, BarChart, Settings } from "lucide-react"

export function DashboardSidebar() {
  const { user, loading } = useUser()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" })
      if (res.ok) {
        router.push("/login")
      }
    } catch (error) {
      console.error("Logout failed", error)
    }
  }

  const userInitials = user ? `${user.firstName[0]}${user.lastName[0]}`.toUpperCase() : ""

  return (
    <aside className="flex w-64 flex-col border-r border-slate-200 bg-white dark:bg-surface-dark dark:border-slate-800 transition-all duration-300 ease-in-out shrink-0 h-full">
      {/* Logo Area */}
      <div className="flex h-20 items-center px-6 border-b border-slate-100 dark:border-slate-800/50">
        <div className="relative h-[40px] w-[160px]">
          <Image
            src="/logo.png"
            alt="iConcur Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </div>
      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
        <Link
          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 bg-primary/10 text-primary font-medium transition-colors"
          href="/dashboard"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium"
          href="/contracts"
        >
          <FileText className="w-5 h-5" />
          <span>My Contracts</span>
        </Link>
        <Link
          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium"
          href="/contract-drafting"
        >
          <PenTool className="w-5 h-5" />
          <span>Draft Contract</span>
        </Link>
        <Link
          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium"
          href="/contract-analyzer"
        >
          <BarChart className="w-5 h-5" />
          <span>Analyze Contract</span>
        </Link>
        <Link
          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium"
          href="/settings"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </nav>
      {/* User Profile */}
      <div className="border-t border-slate-200 dark:border-slate-800 p-4 space-y-2">
        {!loading && user ? (
          <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
              {userInitials}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                {user.firstName} {user.lastName}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 truncate">
                {user.email}
              </span>
            </div>
          </div>
        ) : (
          <div className="h-14 w-full bg-slate-100 dark:bg-slate-800 animate-pulse rounded-lg" />
        )}
        
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors font-medium text-sm"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}
