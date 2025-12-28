import { SigningLayout } from "@/components/signing/signing-layout"
import { DocumentViewer as SigningDocumentViewer } from "@/components/signing/document-viewer"
import { SigningPanel } from "@/components/signing/signing-panel"

export const metadata = {
  title: "iConcur - Sign Document",
  description: "Securely sign your contracts with digital signatures",
}

export default function SigningPage() {
  return (
    <SigningLayout>
      <SigningDocumentViewer />
      <SigningPanel />
    </SigningLayout>
  )
}
