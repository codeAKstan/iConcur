"use client"

import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useUser } from "@/hooks/use-user"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export function NotificationSettings() {
    const { user, loading } = useUser()
    const { toast } = useToast()
    const [preferences, setPreferences] = useState({
        contractUpdates: true,
        mentions: true,
    })
    const [updating, setUpdating] = useState<string | null>(null)

    useEffect(() => {
        if (user?.notificationPreferences) {
            setPreferences(user.notificationPreferences)
        }
    }, [user])

    const handleToggle = async (key: keyof typeof preferences, value: boolean) => {
        setPreferences(prev => ({ ...prev, [key]: value }))
        setUpdating(key)

        try {
            const newPreferences = { ...preferences, [key]: value }
            const res = await fetch("/api/auth/me", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    notificationPreferences: newPreferences
                }),
            })

            if (!res.ok) throw new Error("Failed to update preferences")

            toast({
                title: "Settings saved",
                description: "Your notification preferences have been updated.",
            })
        } catch (error) {
            console.error(error)
            // Revert state on error
            setPreferences(prev => ({ ...prev, [key]: !value }))
            toast({
                title: "Error",
                description: "Failed to update settings. Please try again.",
                variant: "destructive",
            })
        } finally {
            setUpdating(null)
        }
    }

    if (loading) {
        return (
            <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark p-12 flex justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
            </div>
        )
    }

    return (
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800/50">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Notification Settings</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Manage what emails and alerts you receive.</p>
            </div>

            <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label className="text-base font-medium text-slate-900 dark:text-white">Contract Updates</Label>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Receive emails when a contract status changes.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {updating === "contractUpdates" && <Loader2 className="h-4 w-4 animate-spin text-slate-400" />}
                        <Switch 
                            checked={preferences.contractUpdates} 
                            onCheckedChange={(checked) => handleToggle("contractUpdates", checked)}
                        />
                    </div>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label className="text-base font-medium text-slate-900 dark:text-white">Mentioned in Comments</Label>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Get notified when someone @mentions you in a draft.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        {updating === "mentions" && <Loader2 className="h-4 w-4 animate-spin text-slate-400" />}
                        <Switch 
                            checked={preferences.mentions} 
                            onCheckedChange={(checked) => handleToggle("mentions", checked)}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
