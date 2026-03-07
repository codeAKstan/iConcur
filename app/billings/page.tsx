"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { BillingSettings } from "@/components/settings/billing-settings"

export default function BillingsPage() {
    return (
        <DashboardLayout>
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark p-4 sm:p-6 lg:p-8">
                <div className="mx-auto max-w-6xl space-y-6 w-full">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Billing & Subscription</h1>
                        <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your plan, payment methods, and billing history.</p>
                    </div>
                    <BillingSettings />
                </div>
            </div>
        </DashboardLayout>
    )
}
