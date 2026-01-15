
import { Bell, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function ContractsHeader() {
    return (
        <div className="flex flex-col border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark p-4 sm:px-6 lg:px-8 shrink-0 gap-4">
            {/* Top Bar with Search and Actions */}
            <div className="flex items-center justify-between gap-4">
                <div className="flex-1 max-w-2xl relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search contracts, clients, or templates..."
                        className="pl-9 bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 w-full"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <button className="relative p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
                        <Bell className="h-5 w-5" />
                        <span className="absolute top-1.5 right-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-surface-dark"></span>
                    </button>
                    <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                        <Plus className="h-4 w-4" />
                        Create New Contract
                    </Button>
                </div>
            </div>
        </div>
    )
}
