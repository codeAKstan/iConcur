"use client"

import { useState } from "react"
import { ContractDraftingLayout } from "@/components/contract/contract-drafting-layout"
import { ContractDraftingForm } from "@/components/contract/contract-drafting-form"
import { ContractPreview } from "@/components/contract/contract-preview"
import { SignatureModal } from "@/components/contract/signature-modal"
import { useToast } from "@/hooks/use-toast"

export default function ContractDraftingPage() {
  const { toast } = useToast()
  const [isSignatureModalOpen, setIsSignatureModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    template: "Business Agreement",
    lenderName: "Alpha Corp",
    borrowerName: "",
    relationshipPurpose: "Evaluation of potential business partnership",
    confidentialityTerm: "3 Years",
    returnInformation: "Destroy or Return",
    effectiveDate: new Date().toISOString().split('T')[0],
    country: "",
    jurisdiction: "",
    // Service specific fields
    paymentTerms: "Fixed Price",
    amountRate: "",
    startDate: "",
    completionDate: "",
    scopeOfWork: "",
    // Business Agreement specific fields
    agreementType: "General Business",
    disputeResolution: "Arbitration",
    termDuration: "",
    agreementPurpose: "",
    obligations: "",
    // Loan specific fields (kept for switching templates)
    loanAmount: "",
    interestRate: "5.0",
    currency: "USD", // Default currency
    signature: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSendForSignature = () => {
    setIsSignatureModalOpen(true)
  }

  const handleConfirmSignature = (signature: string) => {
    // Update form data with the signature
    setFormData(prev => ({ ...prev, signature }))
    
    toast({
      title: "Contract Signed Successfully!",
      description: "Your signature has been added to the document.",
    })
  }

  return (
    <>
      <ContractDraftingLayout
        form={<ContractDraftingForm formData={formData} onChange={handleChange} onSendForSignature={handleSendForSignature} />}
        preview={<ContractPreview formData={formData} />}
      />
      <SignatureModal 
        isOpen={isSignatureModalOpen}
        onClose={() => setIsSignatureModalOpen(false)}
        onConfirm={handleConfirmSignature}
        partyName={formData.lenderName || "Party A"}
      />
    </>
  )
}
