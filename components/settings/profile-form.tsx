
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileForm() {
    return (
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-dark overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800/50">
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Profile Information</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Update your photo and personal details.</p>
            </div>

            <div className="p-6 space-y-6">
                {/* Avatar Section */}
                <div className="flex items-center gap-6">
                    <Avatar className="h-20 w-20 border-2 border-white dark:border-slate-700 shadow-md">
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback className="text-lg bg-slate-100 dark:bg-slate-800">JD</AvatarFallback>
                    </Avatar>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-8">Change</Button>
                        <Button variant="outline" size="sm" className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 border-red-200 dark:border-red-900/30">Remove</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input id="firstName" defaultValue="John" className="bg-white dark:bg-slate-900/50" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input id="lastName" defaultValue="Doe" className="bg-white dark:bg-slate-900/50" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" defaultValue="john@iconcur.com" className="bg-white dark:bg-slate-900/50" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input id="jobTitle" defaultValue="Senior Contract Manager" className="bg-white dark:bg-slate-900/50" />
                </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/30 flex justify-end gap-3 border-t border-slate-100 dark:border-slate-800/50">
                <Button variant="ghost">Cancel</Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Save Changes</Button>
            </div>
        </div>
    )
}
