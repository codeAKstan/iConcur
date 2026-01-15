
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function NotificationSettings() {
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
                    <Switch defaultChecked />
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/50 flex items-center justify-between">
                    <div className="space-y-0.5">
                        <Label className="text-base font-medium text-slate-900 dark:text-white">Mentioned in Comments</Label>
                        <p className="text-sm text-slate-500 dark:text-slate-400">Get notified when someone @mentions you in a draft.</p>
                    </div>
                    <Switch defaultChecked />
                </div>
            </div>
        </div>
    )
}
