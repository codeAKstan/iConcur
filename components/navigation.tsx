"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Menu, Zap, Wrench, Info, DollarSign } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navigation() {
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 flex h-[72px] items-center justify-between border-b border-solid border-[#e7ebf3] dark:border-[#2a3441] bg-white dark:bg-surface-dark/95 backdrop-blur-sm px-4 md:px-10">
      <Link href="/" className="flex items-center gap-4 text-[#0d121b] dark:text-white">
        <div className="relative h-[56px] w-[160px] shrink-0">
          <Image
            src="/logo.png"
            alt="iConcur Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
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
          <Link
            href="/about"
            className="text-[#0d121b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors"
          >
            About
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

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 text-[#0d121b] dark:text-white lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="text-left text-2xl font-bold">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-8">
              {/* Menu Items */}
              <div className="flex flex-col gap-4">
                <Link
                  href="#features"
                  className="flex items-center gap-4 p-4 rounded-xl bg-blue-100 dark:bg-blue-900/20 text-primary font-bold border border-blue-200 dark:border-blue-800"
                >
                  <Zap className="h-5 w-5 fill-current" />
                  Features
                </Link>
                <Link
                  href="#how-it-works"
                  className="flex items-center gap-4 px-4 py-3 text-slate-600 dark:text-slate-300 font-medium hover:text-primary transition-colors"
                >
                  <Wrench className="h-5 w-5 opacity-70" />
                  How it Works
                </Link>
                <Link
                  href="/pricing"
                  className="flex items-center gap-4 px-4 py-3 text-slate-600 dark:text-slate-300 font-medium hover:text-primary transition-colors"
                >
                  <DollarSign className="h-5 w-5 opacity-70" />
                  Pricing
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-4 px-4 py-3 text-slate-600 dark:text-slate-300 font-medium hover:text-primary transition-colors"
                >
                  <Info className="h-5 w-5 opacity-70" />
                  About
                </Link>
              </div>

              <div className="h-px bg-gray-100 dark:bg-gray-800" />
              
              {/* Auth Buttons */}
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => router.push("/login")}
                  className="flex w-full cursor-pointer items-center justify-center rounded-xl h-12 px-4 bg-transparent border-2 border-primary text-primary text-base font-bold transition-all hover:bg-primary/5"
                >
                  Login
                </button>
                <button
                  onClick={() => router.push("/get-started")}
                  className="flex w-full cursor-pointer items-center justify-center rounded-xl h-12 px-4 bg-primary text-white text-base font-bold transition-all hover:bg-primary/90 shadow-lg shadow-primary/25"
                >
                  Get Started
                </button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
