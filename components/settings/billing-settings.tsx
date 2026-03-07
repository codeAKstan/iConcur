"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Download, Check, AlertCircle, Plus } from "lucide-react"

export function BillingSettings() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            description: "Perfect for getting started",
            features: ["5 AI Analyzed Contracts/mo", "Basic PDF Exports", "1 User License"],
            current: true,
        },
        {
            name: "Pro",
            price: "$29",
            description: "Best for growing professionals",
            features: ["Unlimited Analyzed Contracts", "Advanced AI Drafting", "Priority Support", "Team Collaboration"],
            current: false,
        },
        {
            name: "Enterprise",
            price: "Custom",
            description: "Full suite for large organizations",
            features: ["Custom AI Models", "Unlimited Everything", "Dedicated Account Manager", "SSO/SAML Integration"],
            current: false,
        }
    ]

    const history = [
        { id: "INV-001", date: "Oct 24, 2025", amount: "$0.00", status: "Paid" },
        { id: "INV-002", date: "Sep 24, 2025", amount: "$0.00", status: "Paid" },
        { id: "INV-003", date: "Aug 24, 2025", amount: "$0.00", status: "Paid" },
    ]

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Current Plan Summary */}
            <Card className="border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="h-2 bg-primary w-full" />
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle className="text-xl">Current Subscription</CardTitle>
                        <CardDescription>You are currently on the Free plan.</CardDescription>
                    </div>
                    <Badge variant="secondary" className="px-3 py-1 bg-primary/10 text-primary border-none font-semibold">
                        ACTIVE
                    </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-1">
                            <span className="text-sm text-slate-500 dark:text-slate-400">Monthly Usage</span>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-bold">2 / 5</span>
                                <span className="text-sm text-slate-500">contracts</span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <span className="text-sm text-slate-500 dark:text-slate-400">Next Billing Date</span>
                            <div className="text-lg font-semibold">Nov 24, 2025</div>
                        </div>
                        <div className="space-y-1">
                            <span className="text-sm text-slate-500 dark:text-slate-400">Monthly Cost</span>
                            <div className="text-lg font-semibold">$0.00</div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Plan Selector */}
            <div className="space-y-4">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Subscription Plans</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={plan.current ? "border-primary shadow-md" : "border-slate-200 dark:border-slate-800"}>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                                    {plan.current && <Badge className="bg-primary text-white">Current</Badge>}
                                </div>
                                <div className="mt-2">
                                    <span className="text-3xl font-bold">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-slate-500">/mo</span>}
                                </div>
                                <CardDescription className="mt-2">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ul className="space-y-2">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                                            <Check className="h-4 w-4 text-green-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button 
                                    className="w-full mt-4" 
                                    variant={plan.current ? "outline" : "default"}
                                    disabled={plan.current}
                                >
                                    {plan.current ? "Your Plan" : "Upgrade Plan"}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Billing History */}
            <div className="space-y-4">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Billing History</h2>
                <Card className="border-slate-200 dark:border-slate-800">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Invoice ID</th>
                                    <th className="px-6 py-4 font-semibold">Date</th>
                                    <th className="px-6 py-4 font-semibold">Amount</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                {history.map((invoice) => (
                                    <tr key={invoice.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 font-medium">{invoice.id}</td>
                                        <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{invoice.date}</td>
                                        <td className="px-6 py-4 font-semibold">{invoice.amount}</td>
                                        <td className="px-6 py-4">
                                            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400 border-none font-medium">
                                                {invoice.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Button variant="ghost" size="sm" className="h-8 gap-2">
                                                <Download className="h-4 w-4" />
                                                PDF
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>

            {/* Payment Method */}
            <div className="space-y-4 pb-8">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Payment Method</h2>
                <Card className="border-slate-200 dark:border-slate-800">
                    <CardContent className="py-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                    <CreditCard className="h-6 w-6 text-slate-500" />
                                </div>
                                <div>
                                    <p className="font-semibold">No credit card on file</p>
                                    <p className="text-sm text-slate-500">Your plan is free and doesn't require a card.</p>
                                </div>
                            </div>
                            <Button variant="outline" className="gap-2">
                                <Plus className="h-4 w-4" />
                                Add Card
                            </Button>
                        </div>
                    </CardContent>
                </Card>
                <div className="flex items-center gap-2 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                    <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                        Invoices are sent to your email address: <strong>user@example.com</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}
