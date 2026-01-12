"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface ResetPasswordFormProps {
    token: string
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
    const router = useRouter()
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setStatus("error")
            setMessage("Passwords do not match")
            return
        }

        if (password.length < 8) {
            setStatus("error")
            setMessage("Password must be at least 8 characters")
            return
        }

        setStatus("loading")
        setMessage("")

        try {
            const res = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, password }),
            })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong")
            }

            setStatus("success")
            setMessage("Password reset successfully. You can now log in.")
        } catch (error: any) {
            setStatus("error")
            setMessage(error.message)
        }
    }

    return (
        <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center">
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-xl border-t-4 border-t-primary p-8 w-full max-w-[480px]">
                <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-2">
                    Reset Password
                </h1>

                <p className="text-center text-slate-600 dark:text-gray-400 text-sm mb-8 leading-relaxed">
                    Enter your new password below.
                </p>

                {status === "success" ? (
                    <div className="flex flex-col gap-4">
                        <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 p-4 rounded-lg text-center">
                            {message}
                        </div>
                        <Link
                            href="/login"
                            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            Go to Login
                        </Link>
                    </div>

                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {status === "error" && (
                            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 p-3 rounded-lg text-sm text-center">
                                {message}
                            </div>
                        )}

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-900 dark:text-white" htmlFor="password">
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                                    id="password"
                                    placeholder="••••••••"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    disabled={status === "loading"}
                                    minLength={8}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-slate-900 dark:text-white" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    className="w-full h-12 px-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500"
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                    disabled={status === "loading"}
                                    minLength={8}
                                />
                            </div>
                        </div>

                        <button
                            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Resetting...
                                </span>
                            ) : (
                                <span>Reset Password</span>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    )
}
