"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { SettingsHeader } from "@/components/settings/settings-header"
import { SettingsSidebar } from "@/components/settings/settings-sidebar"
import { ProfileForm } from "@/components/settings/profile-form"
import { NotificationSettings } from "@/components/settings/notification-settings"

export default function SettingsPage() {
    return (
        <DashboardLayout>
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark">
                <SettingsHeader />
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    <div className="mx-auto max-w-6xl space-y-6">
                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h1>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your account information, security preferences, and integration settings.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                            <div className="lg:col-span-1">
                                <SettingsSidebar />
                            </div>
                            <div className="lg:col-span-3 space-y-8">
                                <ProfileForm />
                                <NotificationSettings />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
