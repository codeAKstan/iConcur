export function StatsCards() {
  const stats = [
    {
      label: "Drafts in Progress",
      value: "12",
      icon: "edit_document",
      badge: "Updated 1h ago",
      color: "blue",
    },
    {
      label: "Pending Signatures",
      value: "5",
      icon: "hourglass_top",
      badge: "Action Required",
      color: "orange",
    },
    {
      label: "Signed Contracts",
      value: "24",
      icon: "check_circle",
      badge: "+3 this week",
      color: "green",
    },
    {
      label: "Archived & Completed",
      value: "108",
      icon: "inventory_2",
      badge: "",
      color: "purple",
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="rounded-xl bg-white dark:bg-surface-dark p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                stat.color === "blue"
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : stat.color === "orange"
                    ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400"
                    : stat.color === "green"
                      ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                      : "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
              }`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {stat.icon === "edit_document" && <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"></path>}
                {stat.icon === "hourglass_top" && (
                  <path d="M6 2v6h.01L6 15c0 2.76 2.24 5 5 5s5-2.24 5-5l-.01-7H18V2H6z"></path>
                )}
                {stat.icon === "check_circle" && (
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                )}
                {stat.icon === "inventory_2" && <path d="M20 2H4v20h16V2zm-2 18H6v-2h12v2zm0-7H6V9h12v4z"></path>}
              </svg>
            </div>
            {stat.badge && (
              <span
                className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${
                  stat.color === "blue"
                    ? "text-blue-600 bg-blue-50 dark:bg-blue-900/20"
                    : stat.color === "orange"
                      ? "text-orange-600 bg-orange-50 dark:bg-orange-900/20"
                      : stat.color === "green"
                        ? "text-green-600 bg-green-50 dark:bg-green-900/20"
                        : "text-purple-600 bg-purple-50 dark:bg-purple-900/20"
                }`}
              >
                {stat.badge}
              </span>
            )}
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
            <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
