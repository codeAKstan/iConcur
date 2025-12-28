"use client"

import { useRouter } from "next/navigation"

export function CTASection() {
  const router = useRouter()

  return (
    <section className="py-20 px-4">
      <div className="max-w-[960px] mx-auto bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
        {/* Decorative background circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Ready to streamline your contracts?</h2>
          <p className="text-blue-100 text-lg max-w-[600px]">
            Join thousands of freelancers and businesses who trust iConcur for their agreements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button
              onClick={() => router.push("/get-started")}
              className="flex items-center justify-center h-14 px-8 bg-white text-primary text-lg font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Started Free
            </button>
            <button className="flex items-center justify-center h-14 px-8 bg-transparent border-2 border-white/30 text-white text-lg font-bold rounded-xl hover:bg-white/10 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
