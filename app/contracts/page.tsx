"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { ContractsHeader } from "@/components/contracts/contracts-header"
import { ContractFilters } from "@/components/contracts/contract-filters"
import { ContractList } from "@/components/contracts/contract-list"

export default function ContractsPage() {
    return (
        <DashboardLayout>
            <div className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark">
                <ContractsHeader />
                <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    <div className="mx-auto max-w-6xl space-y-6">
                        <ContractFilters />
                        <ContractList />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
