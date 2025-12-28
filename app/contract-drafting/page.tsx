import { ContractDraftingLayout } from "@/components/contract/contract-drafting-layout"
import { ContractDraftingForm } from "@/components/contract/contract-drafting-form"
import { ContractPreview } from "@/components/contract/contract-preview"

export const metadata = {
  title: "iConcur - Contract Drafting",
  description: "Draft new contracts with AI assistance",
}

export default function ContractDraftingPage() {
  return (
    <ContractDraftingLayout>
      <ContractDraftingForm />
      <ContractPreview />
    </ContractDraftingLayout>
  )
}
