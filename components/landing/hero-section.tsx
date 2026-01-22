"use client"

import { useRouter } from "next/navigation"
import { ArrowRight, FileText, MoreVertical, Sparkles } from "lucide-react"

export function HeroSection() {
  const router = useRouter()

  return (
    <section className="relative pt-32 pb-20 overflow-hidden mesh-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-primary text-sm font-medium mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          AI-Powered Review
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
          Automate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Contract Lifecycle</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Draft, analyze, and manage contracts with enterprise-grade AI. Reduce legal risk and accelerate deal cycles by up to 80% without the heavy lifting.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button 
            onClick={() => router.push('/get-started')}
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/30 hover:bg-blue-700 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
          >
            Start Free Trial
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
            Book a Demo
          </button>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale dark:invert mb-24">
          <span className="font-bold text-xl tracking-tighter italic">FORBES</span>
          <span className="font-bold text-xl tracking-tighter">TechCrunch</span>
          <span className="font-bold text-xl tracking-tighter">VERGE</span>
          <span className="font-bold text-xl tracking-tighter">WIRED</span>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="floating-dashboard bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 md:p-8 overflow-hidden">
            <div className="flex justify-between items-center mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="flex gap-4">
                <div className="h-3 w-24 bg-slate-200 dark:bg-slate-800 rounded"></div>
                <div className="h-3 w-16 bg-slate-100 dark:bg-slate-800 rounded"></div>
              </div>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800"></div>
                <div className="h-8 w-8 rounded-full bg-slate-100 dark:bg-slate-800"></div>
              </div>
            </div>
            
            <div className="space-y-4 text-left">
              <div className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Software Partnership Agreement</h4>
                    <p className="text-sm text-slate-500">Updated 2 hours ago by Sarah L.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full">SIGNED</span>
                  <MoreVertical className="w-5 h-5 text-slate-400" />
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-between p-4 rounded-xl border-2 border-primary/20 bg-primary/5 dark:bg-primary/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">MSA - Acme Corp Enterprise</h4>
                      <p className="text-sm text-slate-500">Awaiting internal review</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-bold rounded-full">PENDING REVIEW</span>
                    <MoreVertical className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
                
                <div className="absolute -top-12 -right-4 md:-right-8 w-72 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-blue-100 dark:border-blue-900 p-4 z-10 animate-bounce-subtle">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">AI Insight</span>
                  </div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                    Clause 4.2 contains <span className="text-red-500 dark:text-red-400">ambiguous liability terms</span> that might conflict with your standard SLA.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <button className="text-xs font-bold text-primary hover:underline">View suggestion</button>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 dark:border-slate-800 opacity-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Mutual NDA Template</h4>
                    <p className="text-sm text-slate-500">Last edited May 12</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs font-bold rounded-full">DRAFT</span>
                  <MoreVertical className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
