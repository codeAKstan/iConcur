import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"

export const metadata = {
  title: "iConcur Dashboard",
  description: "Manage your contracts and workflows",
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back, John</h1>
            <p className="text-slate-500 dark:text-slate-400">Here is an overview of your contract pipeline today.</p>
          </div>
          <StatsCards />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
            <QuickActions />
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
