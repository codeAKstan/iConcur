"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Eye, EyeOff } from "lucide-react"

export function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

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
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Invalid credentials")
      }

      // Success
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = '/api/auth/google'
  }

  return (
    <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
      <div className="max-w-[400px] mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">Welcome back</h1>
          <p className="text-slate-600 dark:text-gray-400 text-base">
            Please enter your details to access your contracts.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
            {error}
          </div>
        )}

        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-900 dark:text-white" htmlFor="email">
              Email Address
            </label>
            <div className="relative">
              <input
                className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
                id="email"
                placeholder="name@company.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-slate-900 dark:text-white" htmlFor="password">
                Password
              </label>
              <a className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors" href="/forgot-password">
                Forgot Password?
              </a>
            </div>
            <div className="relative group">
              <input
                className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400 pr-10"
                id="password"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
          {/* Login Button */}
          <button
            className="mt-2 w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <span>Logging In...</span>
            ) : (
              <>
                <span>Log In</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 3H7v10h6V3zm0 16H7v-4h6v4zm4-8h-2V7h-2v4h2v2h2v-2z"></path>
                </svg>
              </>
            )}
          </button>
        </form>
        {/* Social Login Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-400 font-medium">
              Or continue with
            </span>
          </div>
        </div>
        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button 
            type="button"
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-2 h-10 px-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white font-medium text-sm"
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
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              ></path>
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              ></path>
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 h-10 px-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-slate-900 dark:text-white font-medium text-sm">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h23v23H0z" fill="#f3f3f3"></path>
              <path d="M1 1h10v10H1z" fill="#f35325"></path>
              <path d="M12 1h10v10H12z" fill="#81bc06"></path>
              <path d="M1 12h10v10H1z" fill="#05a6f0"></path>
              <path d="M12 12h10v10H12z" fill="#ffba08"></path>
            </svg>
            Microsoft
          </button>
        </div>
      </div>
    </div>
  )
}
