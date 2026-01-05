"use client"

import { useState } from "react"
import { ContractDraftingLayout } from "@/components/contract/contract-drafting-layout"
import { ContractDraftingForm } from "@/components/contract/contract-drafting-form"
import { ContractPreview } from "@/components/contract/contract-preview"

export default function ContractDraftingPage() {
  const [formData, setFormData] = useState({
    template: "Loan Agreement",
    lenderName: "Acme Financial Corp.",
    borrowerName: "",
    loanAmount: "",
    interestRate: "5.0",
    effectiveDate: "2023-10-24",
    jurisdiction: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <ContractDraftingLayout>
      <ContractDraftingForm formData={formData} onChange={handleChange} />
      <ContractPreview formData={formData} />
    </ContractDraftingLayout>
  )
}
