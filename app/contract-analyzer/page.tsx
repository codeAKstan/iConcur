import { ContractAnalyzerLayout } from "@/components/contract/contract-analyzer-layout"
import { DocumentViewer } from "@/components/contract/document-viewer"
import { AIAnalysisPanel } from "@/components/contract/ai-analysis-panel"

export const metadata = {
  title: "iConcur Contract Analyzer",
  description: "Analyze contracts with AI-powered insights",
}

export default function ContractAnalyzerPage() {
  return (
    <ContractAnalyzerLayout>
      <DocumentViewer />
      <AIAnalysisPanel />
    </ContractAnalyzerLayout>
  )
}
