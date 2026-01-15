
import { Bell, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SettingsHeader() {
    return (
        <div className="flex flex-col border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark p-4 sm:px-6 lg:px-8 shrink-0">
            <div className="flex items-center justify-between gap-4">
                <div className="flex-1 max-w-xl relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search settings..."
                        className="pl-9 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 w-full rounded-md"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-1.5 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-surface-dark"></span>
                    </button>
                    <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline-block">Last login: Today, 9:41 AM</span>
                </div>
            </div>
        </div>
    )
}
