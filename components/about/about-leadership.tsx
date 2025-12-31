import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const leaders = [
  { name: "Sarah Jenkins", role: "CEO & Co-founder", initials: "SJ" },
  { name: "David Chen", role: "CTO", initials: "DC" },
  { name: "Elena Rodriguez", role: "Chief Legal Officer", initials: "ER" },
  { name: "Marcus Johnson", role: "Head of Product", initials: "MJ" },
]

export function AboutLeadership() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[#0d121b] dark:text-white text-2xl font-black tracking-tight text-center mb-8">
          Meet the Leadership
        </h3>
        <p className="text-[#4c669a] dark:text-gray-400 text-center max-w-2xl mx-auto mb-8">
          The diverse team of legal experts and engineers driving the future of contracts.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {leaders.map((l) => (
            <div key={l.name} className="flex flex-col items-center gap-3">
              <Avatar className="w-20 h-20">
                <AvatarFallback className="bg-primary/10 text-primary font-bold">{l.initials}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-[#0d121b] dark:text-white font-bold">{l.name}</div>
                <div className="text-[#4c669a] dark:text-gray-400 text-sm">{l.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
