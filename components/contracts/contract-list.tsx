
import { ContractCard } from "./contract-card"
import { Button } from "@/components/ui/button"

const MOCK_CONTRACTS = [
    {
        id: "CN-2023-884",
        title: "SaaS Master Service Agreement",
        type: "MSA",
        typeLabel: "MSA",
        clientName: "Acme Corp",
        clientInitials: "AC",
        status: "Draft",
        statusColor: "default",
        updatedAt: "Updated 2 hours ago",
        iconType: "default"
    },
    {
        id: "NDA-2023-042",
        title: "Mutual NDA - Global Solutions",
        type: "NDA",
        typeLabel: "NDA",
        clientName: "Global Sol.",
        clientInitials: "GS",
        status: "Pending",
        statusColor: "warning",
        updatedAt: "Updated yesterday",
        iconType: "signature"
    },
    {
        id: "CNT-2023-102",
        title: "Contractor Agreement - J. Smith",
        type: "Contractor",
        typeLabel: "Contractor",
        clientName: "Jane Smith",
        clientInitials: "JS",
        clientImage: "/placeholder-user.jpg", // Assuming we have placeholders or fallback
        status: "Signed",
        statusColor: "success",
        signedDate: "Signed Oct 24, 2023",
        iconType: "success"
    },
    {
        id: "VND-2023-551",
        title: "Vendor Agreement - TechSupplies Inc",
        type: "Vendor",
        typeLabel: "Vendor",
        clientName: "TechSupplies",
        clientInitials: "TS",
        status: "Analyzing",
        statusColor: "purple",
        uploadedAt: "Uploaded 10 mins ago",
        iconType: "bot"
    },
    {
        id: "LSE-2024-001",
        title: "Office Lease Renewal",
        type: "Lease",
        typeLabel: "Lease",
        clientName: "City Properties",
        clientInitials: "CP",
        status: "Draft",
        statusColor: "default",
        updatedAt: "Updated 3 days ago",
        iconType: "default"
    }
]

export function ContractList() {
    return (
        <div className="space-y-4 pb-8">
            {MOCK_CONTRACTS.map((contract) => (
                <ContractCard key={contract.id} {...contract} />
            ))}

            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Showing <span className="font-medium text-slate-900 dark:text-slate-200">1</span> to <span className="font-medium text-slate-900 dark:text-slate-200">5</span> of <span className="font-medium text-slate-900 dark:text-slate-200">42</span> results
                </p>
                <div className="flex items-center gap-2">
                    <Button variant="outline" disabled className="bg-white dark:bg-surface-dark">Previous</Button>
                    <Button variant="outline" className="bg-white dark:bg-surface-dark">Next</Button>
                </div>
            </div>
        </div>
    )
}
