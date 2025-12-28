const RecentActivityTable = () => {
  return (
    <div className="rounded-xl bg-white dark:bg-surface-dark shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
      <div className="flex items-center justify-between p-6">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h2>
        <a href="#" className="text-sm font-medium text-primary hover:text-primary-hover">View all</a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
          <thead className="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase text-slate-500 dark:text-slate-400">
            <tr>
              <th scope="col" className="px-6 py-4 font-semibold">Contract Name</th>
              <th scope="col" className="px-6 py-4 font-semibold">Recipient</th>
              <th scope="col" className="px-6 py-4 font-semibold">Last Action</th>
              <th scope="col" className="px-6 py-4 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded flex items-center justify-center bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                    <span className="material-symbols-outlined text-[18px]">description</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">SaaS Master Agreement</div>
                    <div className="text-xs text-slate-400">v2.4 - Legal Dept</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
                    <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6ty1tvjVKx5mfCgS8qxcpMmzCmBAQlLQuQOiGce7Mb8KxWvvIN3hHDGxCMeIuDr-4C34rBzDUs5ooS0DiVO1g-z9mygopUtlnHYe3OE9CyWuAB2xaG5o4GS_OBDtGlH8y1pc8H8BTVd2JYbnDeCnavoKo0hKRMI0D9g5TGXtDoi-4ook8taSFVO8rm68fMTEDgqstFEmdTCMsRWE1vpvX0VFfF35ibgNBrVgtnL-6WnFppkQXuwi1uQKnm-WJYEnIX19vFIrE" alt="Recipient" />
                  </div>
                  <span>Acme Corp</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="block text-slate-900 dark:text-white">Sent for signature</span>
                <span className="text-xs">2 hours ago</span>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 dark:bg-orange-900/20 dark:text-orange-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-600 dark:bg-orange-400"></span>
                  Pending
                </span>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded flex items-center justify-center bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                    <span className="material-symbols-outlined text-[18px]">handshake</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">NDA - Freelancer</div>
                    <div className="text-xs text-slate-400">Standard Template</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-pink-100 flex items-center justify-center text-[10px] font-bold text-pink-600">JS</div>
                  <span>Jane Smith</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="block text-slate-900 dark:text-white">Viewed by recipient</span>
                <span className="text-xs">5 hours ago</span>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                  Viewed
                </span>
              </td>
            </tr>
            <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded flex items-center justify-center bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white">Service Agreement</div>
                    <div className="text-xs text-slate-400">Project Alpha</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">GS</div>
                  <span>Global Sol.</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="block text-slate-900 dark:text-white">Signed by both parties</span>
                <span className="text-xs">Yesterday</span>
              </td>
              <td className="px-6 py-4 text-right">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/20 dark:text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                  Signed
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivityTable;
