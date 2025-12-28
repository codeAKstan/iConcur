"use client"

import Image from "next/image"
import Link from "next/link"

export function DashboardSidebar() {
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
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-2h2v20h-2zm4 4h2v16h-2z"></path>
          </svg>
          <span>Dashboard</span>
        </Link>
        <Link
          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium"
          href="/contracts"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
          </svg>
          <span>My Contracts</span>
        </Link>
        <Link
          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium"
          href="/contract-drafting"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"></path>
            <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
          </svg>
          <span>Draft Contract</span>
        </Link>
        <Link
          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium"
          href="/contract-analyzer"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 13h2v8H3zm4-8h2v16H7zm4-2h2v18h-2zm4-2h2v20h-2zm4 4h2v16h-2z"></path>
          </svg>
          <span>Analyze Contract</span>
        </Link>
        <Link
          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium"
          href="/signing"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path>
          </svg>
          <span>Sign Requests</span>
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-[10px] font-bold text-orange-600">
            3
          </span>
        </Link>
        <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
          <Link
            className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium"
            href="/settings"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.62l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.48.1.62l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.1.62l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.48-.12-.62l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
            </svg>
            <span>Settings</span>
          </Link>
        </div>
      </nav>
      {/* User Profile */}
      <div className="border-t border-slate-200 dark:border-slate-800 p-4">
        <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200 relative">
            <img alt="Profile picture of John Doe" className="h-full w-full object-cover" src="/profile-john-doe.jpg" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">John Doe</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">john@iconcur.com</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
