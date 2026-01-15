
import { User, Bell, Lock, Blocks, CreditCard } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
    { label: "My Profile", icon: User, active: true },
    { label: "Notifications", icon: Bell, active: false },
    { label: "Security", icon: Lock, active: false },
    { label: "Integrations", icon: Blocks, active: false },
    { label: "Billing", icon: CreditCard, active: false },
]

export function SettingsSidebar() {
    return (
        <nav className="space-y-1">
            {NAV_ITEMS.map((item) => (
                <button
                    key={item.label}
                    className={cn(
                        "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        item.active
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
                    )}
                >
                    <item.icon className={cn("h-4 w-4", item.active ? "text-blue-600 dark:text-blue-400" : "text-slate-400 dark:text-slate-500")} />
                    {item.label}
                    {item.active && <div className="ml-auto w-1 h-4 rounded-full bg-blue-600 dark:bg-blue-400" />}
                </button>
            ))}
        </nav>
    )
}
