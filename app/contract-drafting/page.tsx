"use client"

import { useState } from "react"
import { ContractDraftingLayout } from "@/components/contract/contract-drafting-layout"
import { ContractDraftingForm } from "@/components/contract/contract-drafting-form"
import { ContractPreview } from "@/components/contract/contract-preview"

export default function ContractDraftingPage() {
  const [formData, setFormData] = useState({
    template: "NDA",
    lenderName: "TechStart Inc.",
    borrowerName: "",
    relationshipPurpose: "Evaluation of potential business partnership",
    confidentialityTerm: "3 Years",
    returnInformation: "Destroy or Return",
    effectiveDate: "",
    jurisdiction: "California",
    // Loan specific fields (kept for switching templates)
    loanAmount: "",
    interestRate: "5.0",
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
