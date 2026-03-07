"use client"

import { User, Bell, Lock, Blocks, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

export type SettingsTab = "profile" | "notifications" | "security" | "integrations" | "billing"

interface SettingsSidebarProps {
    activeTab: SettingsTab
    onTabChange: (tab: SettingsTab) => void
}

const NAV_ITEMS: { label: string; icon: any; id: SettingsTab }[] = [
    { id: "profile", label: "My Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Lock },
    { id: "integrations", label: "Integrations", icon: Blocks },
    { id: "billing", label: "Billing", icon: CreditCard },
]

export function SettingsSidebar({ activeTab, onTabChange }: SettingsSidebarProps) {
    return (
        <nav className="space-y-1">
            {NAV_ITEMS.map((item) => (
                <button
                    key={item.id}
                    onClick={() => onTabChange(item.id)}
                    className={cn(
                        "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        activeTab === item.id
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                    )}
                >
                    <item.icon className={cn("h-4 w-4", activeTab === item.id ? "text-blue-600 dark:text-blue-400" : "text-slate-400 dark:text-slate-500")} />
                    {item.label}
                    {activeTab === item.id && <div className="ml-auto w-1 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />}
                </button>
            ))}
        </nav>
    )
}
