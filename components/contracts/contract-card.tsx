
import { MoreHorizontal, FileText, PenTool, CheckCircle2, Bot, Pencil, Search, Send, Eye, Download, Activity } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface ContractCardProps {
    id: string
    title: string
    type: string
    typeLabel: string
    clientName: string
    clientInitials: string
    clientImage?: string
    status: string
    statusColor: string
    updatedAt?: string
    signedDate?: string
    uploadedAt?: string
    iconType: string
}

export function ContractCard({
    id, title, type, typeLabel, clientName, clientInitials, clientImage,
    status, statusColor, updatedAt, signedDate, uploadedAt, iconType
}: ContractCardProps) {

    // Helper for status badge styles
    const getStatusBadge = () => {
        switch (statusColor) {
            case 'success':
                return <Badge className="bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 border-transparent shadow-none gap-1.5 pl-1.5"><div className="h-1.5 w-1.5 rounded-full bg-green-600 dark:bg-green-500" />{status}</Badge>
            case 'warning':
                return <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 border-transparent shadow-none gap-1.5 pl-1.5"><div className="h-1.5 w-1.5 rounded-full bg-orange-600 dark:bg-orange-500" />{status}</Badge>
            case 'purple':
                return <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 border-transparent shadow-none gap-1.5 pl-1.5"><Activity className="h-3 w-3 animate-pulse" />{status}</Badge>
            default:
                return <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-400 border-transparent shadow-none gap-1.5 pl-1.5"><div className="h-1.5 w-1.5 rounded-full bg-slate-500" />{status}</Badge>
        }
    }

    const getIcon = () => {
        switch (iconType) {
            case 'signature': return <PenTool className="h-5 w-5 text-orange-500" />
            case 'success': return <CheckCircle2 className="h-5 w-5 text-green-500" />
            case 'bot': return <Bot className="h-5 w-5 text-purple-500" />
            default: return <FileText className="h-5 w-5 text-blue-500" />
        }
    }

    const getIconBg = () => {
        switch (iconType) {
            case 'signature': return "bg-orange-50 dark:bg-orange-900/20"
            case 'success': return "bg-green-50 dark:bg-green-900/20"
            case 'bot': return "bg-purple-50 dark:bg-purple-900/20"
            default: return "bg-blue-50 dark:bg-blue-900/20"
        }
    }

    return (
        <div className="group flex flex-col lg:flex-row items-start lg:items-center gap-4 p-4 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200">

            {/* Icon */}
            <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center shrink-0", getIconBg())}>
                {getIcon()}
            </div>

            {/* Main Info */}
            <div className="flex-1 min-w-0 grid grid-cols-1 lg:grid-cols-12 gap-4 w-full">

                {/* Title & Metadata */}
                <div className="lg:col-span-5 flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-slate-900 dark:text-white truncate">{title}</h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase tracking-wide border border-slate-200 dark:border-slate-700">{typeLabel}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-mono">{id}</span>
                        <span>•</span>
                        <span>{updatedAt || signedDate || uploadedAt}</span>
                    </div>
                </div>

                {/* Client Info */}
                <div className="lg:col-span-3 flex items-center gap-3">
                    <Avatar className="h-8 w-8 border border-white dark:border-slate-700 shadow-sm">
                        <AvatarImage src={clientImage} />
                        <AvatarFallback className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium">{clientInitials}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">{clientName}</span>
                </div>

                {/* Status */}
                <div className="lg:col-span-2 flex items-center">
                    {getStatusBadge()}
                </div>

                {/* Actions */}
                <div className="lg:col-span-2 flex items-center justify-end gap-1">
                    {status === 'Pending' && (
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white h-8 px-3 text-xs gap-1.5 rounded-full mr-2 shadow-sm shadow-blue-200 dark:shadow-none">
                            <Send className="h-3 w-3" /> Remind
                        </Button>
                    )}

                    {status === 'Signed' ? (
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                            <Download className="h-4 w-4" />
                        </Button>
                    ) : (
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                            <Pencil className="h-4 w-4" />
                        </Button>
                    )}

                    <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                        {status === 'Analyzing' ? <Activity className="h-4 w-4" /> : <Search className="h-4 w-4" />}
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 px-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 text-xs font-medium gap-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                                More <MoreHorizontal className="h-3 w-3" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>History</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

        </div>
    )
}
