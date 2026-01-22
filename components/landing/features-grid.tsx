import { Zap, ShieldCheck, Users } from "lucide-react"

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Instant Redlining</h3>
            <p className="text-slate-600 dark:text-slate-400">AI automatically detects unfavorable clauses and suggests market-standard alternatives.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">SOC2 Compliant</h3>
            <p className="text-slate-600 dark:text-slate-400">Bank-level security ensures your sensitive legal data is encrypted and private at all times.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Team Collaboration</h3>
            <p className="text-slate-600 dark:text-slate-400">Streamlined approval workflows that keep legal, sales, and finance in sync.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
