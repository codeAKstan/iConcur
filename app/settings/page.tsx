"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { SettingsHeader } from "@/components/settings/settings-header"
import { SettingsSidebar, SettingsTab } from "@/components/settings/settings-sidebar"
import { ProfileForm } from "@/components/settings/profile-form"
import { NotificationSettings } from "@/components/settings/notification-settings"
import { BillingSettings } from "@/components/settings/billing-settings"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Lock, Blocks } from "lucide-react"

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<SettingsTab>("profile")

    const renderTabContent = () => {
        switch (activeTab) {
            case "profile":
                return <ProfileForm />
            case "notifications":
                return <NotificationSettings />
            case "billing":
                return <BillingSettings />
            case "security":
                return (
                    <Card className="border-slate-200 dark:border-slate-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Lock className="h-5 w-5 text-primary" />
                                Security Settings
                            </CardTitle>
                            <CardDescription>Manage your password and security preferences.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Security settings are coming soon.</p>
                        </CardContent>
                    </Card>
                )
            case "integrations":
                return (
                    <Card className="border-slate-200 dark:border-slate-800">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Blocks className="h-5 w-5 text-primary" />
                                Integrations
                            </CardTitle>
                            <CardDescription>Connect iConcur with your favorite tools.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">Integrations are coming soon.</p>
                        </CardContent>
                    </Card>
                )
            default:
                return <ProfileForm />
        }
    }

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
                                <SettingsSidebar activeTab={activeTab} onTabChange={setActiveTab} />
                            </div>
                            <div className="lg:col-span-3 space-y-8">
                                {renderTabContent()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
