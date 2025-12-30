"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export function LoginHeader() {
  const router = useRouter()

  return (
    <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-surface-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
      <Link href="/" className="flex items-center gap-4 text-[#0d121b] dark:text-white">
          <div className="relative h-[56px] w-[160px]">
                    <Image
                      src="/logo.png"
                      alt="iConcur Logo"
                      fill
                      className="object-contain object-left"
                      priority
                    />
                  </div>
                  </Link>
          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-sm text-gray-500 dark:text-gray-400">Don't have an account?</span>
            <button
              onClick={() => router.push("/get-started")}
              className="flex items-center justify-center rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm font-bold transition-colors"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
