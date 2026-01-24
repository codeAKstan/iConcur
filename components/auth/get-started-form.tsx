"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export function GetStartedForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong")
      }

      // Success
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignup = () => {
    window.location.href = '/api/auth/google'
  }

  return (
    <div className="flex flex-col lg:order-2 order-1">
      <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">Step 1 of 3</span>
            <span className="text-xs text-primary font-medium">Create Account</span>
          </div>
          <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-primary w-1/3 rounded-full"></div>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create your account</h3>
        
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Social Sign Up */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button 
            type="button"
            onClick={handleGoogleSignup}
            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              ></path>
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              ></path>
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h23v23H0z" fill="#f3f3f3"></path>
              <path d="M1 1h10v10H1z" fill="#f35325"></path>
              <path d="M12 1h10v10H12z" fill="#81bc06"></path>
              <path d="M1 12h10v10H1z" fill="#05a6f0"></path>
              <path d="M12 12h10v10H12z" fill="#ffba08"></path>
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Microsoft</span>
          </button>
        </div>
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-surface-dark text-gray-500 dark:text-gray-400">
              Or continue with email
            </span>
          </div>
        </div>
        {/* Form Fields */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="firstName">
                First Name
              </label>
              <input
                className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary text-sm shadow-sm"
                id="firstName"
                placeholder="Jane"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary text-sm shadow-sm"
                id="lastName"
                placeholder="Doe"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
              Work Email
            </label>
            <input
              className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary text-sm shadow-sm"
              id="email"
              placeholder="jane@company.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="password">
              Password
            </label>
            <input
              className="w-full h-11 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary text-sm shadow-sm"
              id="password"
              placeholder="••••••••"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
            />
            <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters.</p>
          </div>
          <button
            className="w-full flex justify-center items-center py-3 px-4 rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-4 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
            {!loading && (
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
              </svg>
            )}
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
          By clicking "Create Account", you agree to our{" "}
          <a className="text-primary hover:underline" href="#">
            Terms of Service
          </a>{" "}
          and{" "}
          <a className="text-primary hover:underline" href="#">
            Privacy Policy
          </a>
          .
        </p>
        {/* Trust Signals */}
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-center items-center gap-4 grayscale opacity-70">
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
            </svg>
            <span className="text-xs font-semibold">256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
            </svg>
            <span className="text-xs font-semibold">GDPR Compliant</span>
          </div>
        </div>
      </div>
    </div>
  )
}
