"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function Navigation() {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-solid border-[#e7ebf3] dark:border-[#2a3441] bg-white dark:bg-surface-dark/95 backdrop-blur-sm px-10">
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
      <div className="flex flex-1 justify-end gap-8">
        <div className="hidden md:flex items-center gap-9">
          <Link
            href="#features"
            className="text-[#0d121b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-[#0d121b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            How it Works
          </Link>
          <Link
            href="/pricing"
            className="text-[#0d121b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            Pricing
          </Link>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => router.push("/login")}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-[#0d121b] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all"
          >
            Login
          </button>
          <button
            onClick={() => router.push("/get-started")}
            className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all shadow-md hover:shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
