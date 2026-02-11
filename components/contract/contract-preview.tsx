"use client"

import { Minus, Plus } from "lucide-react"
import { useState } from "react"

interface ContractPreviewProps {
  formData: any
}

export function ContractPreview({ formData }: ContractPreviewProps) {
  const [zoomLevel, setZoomLevel] = useState(100)

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 10, 200))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 10, 50))
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return null
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCurrencySymbol = (currency: string) => {
    switch (currency) {
      case 'GBP': return '£'
      case 'NGN': return '₦'
      default: return '$'
    }
  }

  const getJurisdictionPrefix = (country: string) => {
    switch (country) {
      case 'United Kingdom': return 'laws of'
      case 'Canada': return 'laws of the Province of'
      default: return 'laws of the State of'
    }
  }

  const Highlight = ({ value, placeholder, type = "text" }: { value: string, placeholder: string, type?: "text" | "number" }) => {
    if (!value) {
      return (
        <span className="bg-yellow-50 text-yellow-800 px-2 py-0.5 rounded border border-yellow-200 border-dashed font-medium italic inline-flex items-center gap-1 mx-1">
          ✏ {placeholder}
        </span>
      )
    }
    return (
      <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded border border-blue-200 font-medium mx-1">
        {type === "number" ? value : value}
      </span>
    )
  }

  return (
    <section className="flex flex-1 bg-gray-100 dark:bg-[#0c1018] relative flex-col items-center justify-start pt-8 pb-8 overflow-y-auto px-4 lg:px-12">
      {/* Toolbar */}
      <div className="sticky top-4 z-10 mb-6 flex items-center gap-2 bg-white dark:bg-surface-dark p-1.5 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <button
          className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
          title="Zoom Out"
          onClick={handleZoomOut}
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="text-xs font-medium w-12 text-center text-gray-600 dark:text-gray-300">{zoomLevel}%</span>
        <button
          className="p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
          title="Zoom In"
          onClick={handleZoomIn}
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>

      {/* Paper Document */}
      <div 
        className="bg-white text-black w-full max-w-[800px] min-h-[1130px] p-16 rounded-sm relative origin-top transform transition-transform duration-200 shadow-lg"
        style={{ transform: `scale(${zoomLevel / 100})` }}
      >
        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
          <div className="text-8xl font-black -rotate-45 uppercase">Draft</div>
        </div>

        {/* Content */}
        <div className="space-y-8 font-serif leading-relaxed text-[15px]">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-2xl font-bold uppercase tracking-widest border-b-2 border-black pb-4 inline-block">
              {formData.template === "NDA" ? "NON-DISCLOSURE AGREEMENT" :
                formData.template === "Service Contract" ? "SERVICE CONTRACT AGREEMENT" :
                  formData.template === "Business Agreement" ? "BUSINESS AGREEMENT" :
                    (formData.template || "LOAN AGREEMENT")}
            </h1>
            <p className="text-sm font-bold text-gray-500">
              Contract #{formData.template === "NDA" ? "NDA" : formData.template === "Service Contract" ? "SC" : formData.template === "Business Agreement" ? "BA" : "LN"}-2023-8492
            </p>
          </div>

          <p className="text-justify leading-loose">
            This {formData.template === "NDA" ? "Non-Disclosure Agreement" : formData.template === "Service Contract" ? "Service Contract Agreement" : formData.template} (the "Agreement") is entered into as of
            <Highlight value={formatDate(formData.effectiveDate)} placeholder="Select Date" />
            (the "Effective Date"), by and between:
          </p>

          <div className="pl-8 space-y-4 my-8">
            <div className="flex gap-2 items-baseline">
              <span className="font-bold min-w-[140px] text-gray-900">
                {formData.template === "NDA" ? "Disclosing Party:" :
                  formData.template === "Service Contract" ? "Client:" :
                    formData.template === "Business Agreement" ? "Party A:" :
                      "Lender:"}
              </span>
              <div className="flex-1">
                <Highlight
                  value={formData.lenderName}
                  placeholder={
                    formData.template === "NDA" ? "Enter Disclosing Party..." :
                      formData.template === "Service Contract" ? "Enter Client Name..." :
                        formData.template === "Business Agreement" ? "Alpha Corp" :
                          "Enter Lender Name..."
                  }
                />
              </div>
            </div>
            <div className="flex gap-2 items-baseline">
              <span className="font-bold min-w-[140px] text-gray-900">
                {formData.template === "NDA" ? "Receiving Party:" :
                  formData.template === "Service Contract" ? "Service Provider:" :
                    formData.template === "Business Agreement" ? "Party B:" :
                      "Borrower:"}
              </span>
              <div className="flex-1">
                <Highlight
                  value={formData.borrowerName}
                  placeholder={
                    formData.template === "NDA" ? "Enter Recipient Name..." :
                      formData.template === "Service Contract" ? "Enter Provider Name..." :
                        formData.template === "Business Agreement" ? "Enter Party B Name..." :
                          "Enter Borrower Name..."
                  }
                />
              </div>
            </div>
          </div>

          {formData.template === "NDA" ? (
            <div className="space-y-6 mt-12">
              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">1. Purpose</h3>
                <p className="mb-4 leading-loose text-justify">
                  The Receiving Party understands that the Disclosing Party may disclose certain Confidential Information for the purpose of
                  <Highlight value={formData.relationshipPurpose} placeholder="Evaluation of potential business partnership" />
                  (the "Purpose").
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">2. Confidential Information</h3>
                <p className="mb-4 leading-loose text-justify">
                  "Confidential Information" means all information, whether written or oral, and in any form (including, without limitation, engineering documents, research and development, business plans, and financial information) furnished to the Receiving Party by the Disclosing Party.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">3. Term</h3>
                <p className="mb-4 leading-loose text-justify">
                  The obligations of this Agreement shall remain in effect for a period of
                  <Highlight value={formData.confidentialityTerm} placeholder="3 Years" />
                  from the Effective Date. Upon termination, the Receiving Party shall
                  <Highlight value={formData.returnInformation} placeholder="Destroy or Return" />
                  all Confidential Information.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">4. Governing Law</h3>
                <p className="mb-4 leading-loose text-justify">
                  This Agreement shall be governed by and construed in accordance with the {getJurisdictionPrefix(formData.country)}
                  <Highlight value={formData.jurisdiction} placeholder="Select Jurisdiction..." />.
                </p>
              </div>
            </div>
          ) : formData.template === "Service Contract" ? (
            <div className="space-y-6 mt-12">
              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">1. Scope of Services</h3>
                <p className="mb-4 leading-loose text-justify">
                  The Service Provider agrees to perform the following services for the Client (the "Services"):
                  <br />
                  <Highlight value={formData.scopeOfWork} placeholder="Describe the scope of work, deliverables, and expectations..." />
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">2. Payment Terms</h3>
                <p className="mb-4 leading-loose text-justify">
                  Client agrees to pay the Service Provider for the Services as follows:
                  <br />
                  <span className="font-semibold">Structure:</span> <Highlight value={formData.paymentTerms} placeholder="Fixed Price / Hourly" />
                  <br />
                  <span className="font-semibold">Rate/Amount:</span> <Highlight value={formData.amountRate ? `${getCurrencySymbol(formData.currency)}${formData.amountRate}` : ""} placeholder="0.00" type="number" />
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">3. Term of Agreement</h3>
                <p className="mb-4 leading-loose text-justify">
                  This Agreement shall commence on <Highlight value={formatDate(formData.startDate)} placeholder="Start Date" />
                  and shall continue until <Highlight value={formatDate(formData.completionDate)} placeholder="Completion Date" />,
                  unless terminated earlier in accordance with this Agreement.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">4. Governing Law</h3>
                <p className="mb-4 leading-loose text-justify">
                  This Agreement shall be governed by and construed in accordance with the {getJurisdictionPrefix(formData.country)}
                  <Highlight value={formData.jurisdiction} placeholder="Select Jurisdiction..." />.
                </p>
              </div>
            </div>
          ) : formData.template === "Business Agreement" ? (
            <div className="space-y-6 mt-12">
              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">1. Purpose of Agreement</h3>
                <p className="mb-4 leading-loose text-justify">
                  The parties agree to enter into this relationship for the following primary purpose:
                  <br />
                  <Highlight value={formData.agreementPurpose} placeholder="[Enter Detailed Purpose of Agreement...]" />
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">2. Terms & Conditions</h3>
                <p className="mb-4 leading-loose text-justify">
                  Both parties agree to adhere to the specific obligations and conditions set forth herein:
                  <br />
                  <Highlight value={formData.obligations} placeholder="[Enter Key Terms & Obligations...]" />
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">3. Term & Termination</h3>
                <p className="mb-4 leading-loose text-justify">
                  This Agreement shall be effective as of the Effective Date and shall continue for a period of
                  <Highlight value={formData.termDuration} placeholder="[Term Duration]" />
                  , unless terminated earlier in accordance with the provisions of this Agreement.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">4. Governing Law</h3>
                <p className="mb-4 leading-loose text-justify">
                  This Agreement shall be governed by and construed in accordance with the {getJurisdictionPrefix(formData.country)}
                  <Highlight value={formData.jurisdiction} placeholder="Select Jurisdiction..." />.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 mt-12">
              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">1. Loan Amount & Interest</h3>
                <p className="mb-4 leading-loose text-justify">
                  The Lender agrees to loan the Borrower the principal sum of
                  <Highlight value={formData.loanAmount ? `${getCurrencySymbol(formData.currency)}${formData.loanAmount}` : ""} placeholder="Enter Amount" />
                  (the "Loan"). The unpaid principal shall bear interest at the rate of
                  <Highlight value={formData.interestRate ? `${formData.interestRate}%` : ""} placeholder="0.0%" type="number" />
                  per annum.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">2. Payment Schedule</h3>
                <p className="mb-4 leading-loose text-justify">
                  Borrower agrees to repay the Loan in monthly installments beginning on
                  <Highlight value={formatDate(formData.effectiveDate)} placeholder="[Date]" />
                  and continuing until the Principal and Interest are paid in full.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">3. Governing Law</h3>
                <p className="mb-4 leading-loose text-justify">
                  This Agreement shall be governed by and construed in accordance with the {getJurisdictionPrefix(formData.country)}
                  <Highlight value={formData.jurisdiction} placeholder="Select Jurisdiction..." />.
                </p>
              </div>
            </div>
          )}

          <div className="mt-20 grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-b border-black w-full"></div>
              <div>
                <p className="font-bold text-sm uppercase">
                  {formData.template === "NDA" ? "Disclosing Party Signature" :
                    formData.template === "Service Contract" ? "Client Signature" :
                      formData.template === "Business Agreement" ? "Party A Signature" :
                        "Lender Signature"}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formData.lenderName || (
                    formData.template === "NDA" ? "[Company Name]" :
                      formData.template === "Service Contract" ? "[Client Name]" :
                        formData.template === "Business Agreement" ? "[Party A Name]" :
                          "[Lender Name]"
                  )}
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="border-b border-black w-full"></div>
              <div>
                <p className="font-bold text-sm uppercase">
                  {formData.template === "NDA" ? "Receiving Party Signature" :
                    formData.template === "Service Contract" ? "Service Provider Signature" :
                      formData.template === "Business Agreement" ? "Party B Signature" :
                        "Borrower Signature"}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {formData.borrowerName || (
                    formData.template === "NDA" ? "[Recipient Name]" :
                      formData.template === "Service Contract" ? "[Provider Name]" :
                        formData.template === "Business Agreement" ? "[Party B Name]" :
                          "[Borrower Name]"
                  )}
                </p>
              </div>
            </div>
          </div>

          <p className="italic text-gray-400 text-xs text-center mt-12 border-t border-gray-100 pt-8">
            Generated via iConcur Legal AI • {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
      <div className="h-20"></div>
    </section>
  )
}
