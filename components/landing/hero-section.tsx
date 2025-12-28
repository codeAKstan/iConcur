"use client"

import { useRouter } from "next/navigation"

export function HeroSection() {
  const router = useRouter()

  return (
    <section className="layout-container flex flex-col justify-center py-12 lg:py-20 px-4 lg:px-40">
      <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto w-full">
        <div className="@container">
          <div className="flex flex-col gap-10 lg:flex-row items-center">
            {/* Hero Content */}
            <div className="flex flex-col gap-6 flex-1 lg:max-w-[50%]">
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-[#0d121b] dark:text-white text-4xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                  Create, Understand, and Sign Agreements in <span className="text-primary">Minutes</span>
                </h1>
                <h2 className="text-[#4c669a] dark:text-gray-300 text-lg font-normal leading-relaxed">
                  Draft simple contracts, analyze risks with AI, and securely sign with confidence. No legal jargon
                  overload.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => router.push("/contract-drafting")}
                  className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Create a Contract
                </button>
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-[#0d121b] dark:text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:-translate-y-0.5">
                  See How It Works
                </button>
              </div>
              <div className="flex items-center gap-2 pt-2 text-sm text-[#4c669a] dark:text-gray-400">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
                <span>No credit card required</span>
                <span className="mx-2">•</span>
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
                <span>SOC2 Compliant Security</span>
              </div>
            </div>
            {/* Hero Image */}
            <div className="flex-1 w-full mt-8 lg:mt-0">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-[#e7ebf3] dark:border-gray-700 group">
                <img
                  alt="Modern dashboard interface showing a digital contract with AI analysis highlights"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/modern-dashboard-interface-showing-digital-contrac.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-light/20 to-transparent pointer-events-none"></div>
                {/* Floating Element Mockup */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white dark:bg-[#1a2230] rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-4">
                  <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">AI Insight</span>
                    <span className="text-sm font-medium text-[#0d121b] dark:text-white">
                      Clause 4.2 contains ambiguous liability terms.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
