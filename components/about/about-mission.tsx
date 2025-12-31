import { BadgeCheck } from "lucide-react"

export function AboutMission() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-6xl mx-auto bg-[#0f1c35] dark:bg-[#0f1c35] text-white rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="relative z-10 flex items-start gap-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
            <BadgeCheck className="w-4 h-4" />
            Our Mission
          </div>
        </div>
        <div className="relative z-10 mt-6">
          <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2">Democratizing legal security.</h3>
          <p className="text-blue-100 text-lg max-w-3xl">
            We believe that powerful contract analysis shouldn&apos;t be reserved for large corporations. Our mission is
            to make contract drafting, intelligent analysis, and transparent workflows accessible for businesses of all
            sizes.
          </p>
        </div>
      </div>
    </section>
  )
}
