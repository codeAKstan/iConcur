
import { SlidersHorizontal, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function ContractFilters() {
    return (
        <div className="space-y-4">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">My Contracts</h1>
                <p className="text-slate-500 dark:text-slate-400">Manage, track, and analyze all your legal agreements in one place.</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 p-1">
                <div className="flex-1 w-full sm:w-auto">
                    <div className="relative">
                        <Input
                            placeholder="Filter by name or ID..."
                            className="pl-9 bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700"
                        />
                        <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                    <Select defaultValue="all">
                        <SelectTrigger className="w-[140px] bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700">
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Status: All</SelectItem>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="signed">Signed</SelectItem>
                            <SelectItem value="analyzing">Analyzing</SelectItem>
                        </SelectContent>
                    </Select>

                    <Select defaultValue="all">
                        <SelectTrigger className="w-[160px] bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700">
                            <SelectValue placeholder="Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Type: All Types</SelectItem>
                            <SelectItem value="msa">MSA</SelectItem>
                            <SelectItem value="nda">NDA</SelectItem>
                            <SelectItem value="contractor">Contractor</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button variant="outline" className=" bg-white dark:bg-surface-dark border-slate-200 dark:border-slate-700 gap-2">
                        <ArrowUpDown className="h-4 w-4" />
                        Sort by Date
                    </Button>
                </div>
            </div>
        </div>
    )
}
