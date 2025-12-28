export function RecentActivity() {
  const activities = [
    {
      id: 1,
      name: "SaaS Master Agreement",
      version: "v2.4 - Legal Dept",
      recipient: "Acme Corp",
      action: "Sent for signature",
      time: "2 hours ago",
      status: "Pending",
    },
    {
      id: 2,
      name: "NDA - Freelancer",
      version: "Standard Template",
      recipient: "Jane Smith",
      action: "Viewed by recipient",
      time: "5 hours ago",
      status: "Viewed",
    },
    {
      id: 3,
      name: "Service Agreement",
      version: "Project Alpha",
      recipient: "Global Sol.",
      action: "Signed by both parties",
      time: "Yesterday",
      status: "Signed",
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h2>
        <a className="text-sm font-medium text-primary hover:text-primary/80" href="#">
          View all
        </a>
      </div>
      <div className="rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase text-slate-500 dark:text-slate-400">
              <tr>
                <th className="px-6 py-4 font-semibold" scope="col">
                  Contract Name
                </th>
                <th className="px-6 py-4 font-semibold" scope="col">
                  Recipient
                </th>
                <th className="px-6 py-4 font-semibold" scope="col">
                  Last Action
                </th>
                <th className="px-6 py-4 font-semibold text-right" scope="col">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {activities.map((activity) => (
                <tr key={activity.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded flex items-center justify-center bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">{activity.name}</div>
                        <div className="text-xs text-slate-400">{activity.version}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span>{activity.recipient}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="block text-slate-900 dark:text-white">{activity.action}</span>
                    <span className="text-xs">{activity.time}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                        activity.status === "Pending"
                          ? "bg-orange-50 px-2 py-1 text-orange-700 ring-1 ring-inset ring-orange-600/20 dark:bg-orange-900/20 dark:text-orange-400"
                          : activity.status === "Viewed"
                            ? "bg-blue-50 px-2 py-1 text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400"
                            : "bg-green-50 px-2 py-1 text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/20 dark:text-green-400"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          activity.status === "Pending"
                            ? "bg-orange-600 dark:bg-orange-400"
                            : activity.status === "Viewed"
                              ? "bg-blue-600 dark:bg-blue-400"
                              : "bg-green-600 dark:bg-green-400"
                        }`}
                      ></span>
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
