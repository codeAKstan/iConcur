"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function ForgotPasswordForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset logic here
    console.log("Password reset requested for:", email)
  }

  return (
    <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center">
      <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl border-t-4 border-t-primary p-8 w-full max-w-[480px]">
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">
          Forgot Password?
        </h1>
        
        <p className="text-center text-slate-600 dark:text-gray-400 text-sm mb-8 leading-relaxed">
          No worries, we'll help you get back to your contracts. Enter your email and we'll send you a reset link.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-900 dark:text-white" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <input
                className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                id="email"
                placeholder="name@company.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <button
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2"
            type="submit"
          >
            <span>Send Reset Link</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 text-center">
          <Link 
            href="/login"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Log In
          </Link>
        </div>
      </div>
      
      <p className="mt-8 text-center text-sm text-slate-500 dark:text-gray-400">
        Can't access your email? <a href="#" className="text-primary hover:underline font-medium">Contact Support</a>
      </p>
    </div>
  )
}