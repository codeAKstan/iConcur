"use client"

import { Landmark, Shield, Briefcase, User, Building2, Calendar, MapPin, Sparkles, Save, Send, Handshake, Scale, Clock, Globe } from "lucide-react"
import { Country, State }  from 'country-state-city';

interface ContractDraftingFormProps {
  formData: any
  onChange: (field: string, value: string) => void
}

export function ContractDraftingForm({ formData, onChange }: ContractDraftingFormProps) {
  const allCountries = Country.getAllCountries();
  const selectedCountry = allCountries.find(c => c.name === formData.country);
  const countryStates = selectedCountry ? State.getStatesOfCountry(selectedCountry.isoCode) : [];
  return (
    <section className="w-full lg:w-[40%] xl:w-[35%] flex flex-col bg-white dark:bg-surface-dark border-r border-gray-200 dark:border-gray-800 z-10 shadow-sm overflow-y-auto">
      {/* Breadcrumbs & Heading */}
      <div className="px-6 pt-6 pb-2">
        <div className="flex flex-wrap gap-2 items-center mb-4 text-xs">
          <a className="text-gray-500 dark:text-gray-400 font-medium hover:text-primary" href="#">
            Home
          </a>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <a className="text-gray-500 dark:text-gray-400 font-medium hover:text-primary" href="#">
            Contracts
          </a>
          <span className="text-gray-300 dark:text-gray-600">/</span>
          <span className="text-gray-900 dark:text-white font-bold">New Draft</span>
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Drafting New Contract</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Fill in the details below to generate your legal document.
        </p>
      </div>

      {/* Template Selector */}
      <div className="px-6 py-6">
        <h3 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
          <div className="w-1 h-4 bg-primary rounded-full"></div> 1. Select Template
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <button 
            onClick={() => onChange("template", "Loan Agreement")}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
              formData.template === "Loan Agreement" 
                ? "bg-blue-50 dark:bg-blue-900/20 border-primary text-primary shadow-sm ring-1 ring-primary" 
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
          >
            <Landmark className="w-4 h-4" />
            <span className="text-sm font-bold whitespace-nowrap">Loan Agreement</span>
          </button>
          <button 
            onClick={() => onChange("template", "NDA")}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
              formData.template === "NDA" 
                ? "bg-blue-50 dark:bg-blue-900/20 border-primary text-primary shadow-sm ring-1 ring-primary" 
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
          >
            <Shield className="w-4 h-4" />
            <span className="text-sm font-bold whitespace-nowrap">NDA</span>
          </button>
          <button 
            onClick={() => onChange("template", "Service Contract")}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
              formData.template === "Service Contract" 
                ? "bg-blue-50 dark:bg-blue-900/20 border-primary text-primary shadow-sm ring-1 ring-primary" 
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-bold whitespace-nowrap">Service Contract</span>
          </button>
          <button 
            onClick={() => onChange("template", "Business Agreement")}
            className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${
              formData.template === "Business Agreement" 
                ? "bg-blue-50 dark:bg-blue-900/20 border-primary text-primary shadow-sm ring-1 ring-primary" 
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-slate-600 dark:text-slate-300 hover:border-gray-300 dark:hover:border-gray-600"
            }`}
          >
            <Handshake className="w-4 h-4" />
            <span className="text-sm font-bold whitespace-nowrap">Business Agreement</span>
          </button>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-6 py-2 flex-1 space-y-8 pb-32">
        {/* Section 2: Parties */}
        <div className="space-y-5">
          <h3 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <div className="w-1 h-4 bg-primary rounded-full"></div> 2. Parties Involved
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                {formData.template === "NDA" ? "Disclosing Party (Party A)" : 
                 formData.template === "Service Contract" ? "Client (Party A)" : 
                 formData.template === "Business Agreement" ? "First Party (Party A)" : 
                 "Lender (Party A)"}
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  {formData.template === "NDA" || formData.template === "Service Contract" || formData.template === "Business Agreement" ? (
                    <Building2 className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                  ) : (
                    <User className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                  )}
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-gray-50 dark:bg-gray-800 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm font-medium"
                  placeholder={
                    formData.template === "NDA" ? "Company Name" : 
                    formData.template === "Business Agreement" ? "Alpha Corp" : 
                    "Full Legal Name"
                  }
                  type="text"
                  value={formData.lenderName}
                  onChange={(e) => onChange("lenderName", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                {formData.template === "NDA" ? "Receiving Party (Party B)" : 
                 formData.template === "Service Contract" ? "Service Provider (Party B)" : 
                 formData.template === "Business Agreement" ? "Second Party (Party B)" : 
                 "Borrower (Party B)"}
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm font-medium"
                  placeholder={
                    formData.template === "NDA" ? "Recipient Name / Company" : 
                    formData.template === "Business Agreement" ? "Full Legal Name / Company" : 
                    "Full Legal Name / Company"
                  }
                  type="text"
                  value={formData.borrowerName}
                  onChange={(e) => onChange("borrowerName", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Terms */}
        <div className="space-y-5">
          <h3 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <div className="w-1 h-4 bg-primary rounded-full"></div> {formData.template === "NDA" || formData.template === "Service Contract" || formData.template === "Business Agreement" ? "3. Agreement Terms" : "3. Terms & Conditions"}
          </h3>
          <div className="grid grid-cols-2 gap-5">
            {formData.template === "NDA" ? (
              <>
                <div className="col-span-2">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Relationship Purpose
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm font-medium"
                      placeholder="e.g. Evaluation of potential business partnership"
                      type="text"
                      value={formData.relationshipPurpose}
                      onChange={(e) => onChange("relationshipPurpose", e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Confidentiality Term
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <select
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none shadow-sm cursor-pointer font-medium"
                      value={formData.confidentialityTerm}
                      onChange={(e) => onChange("confidentialityTerm", e.target.value)}
                    >
                      <option value="1 Year">1 Year</option>
                      <option value="2 Years">2 Years</option>
                      <option value="3 Years">3 Years</option>
                      <option value="5 Years">5 Years</option>
                      <option value="Indefinite">Indefinite</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Return of Information
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                    </div>
                    <select
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none shadow-sm cursor-pointer font-medium"
                      value={formData.returnInformation}
                      onChange={(e) => onChange("returnInformation", e.target.value)}
                    >
                      <option value="Destroy">Destroy</option>
                      <option value="Return">Return</option>
                      <option value="Destroy or Return">Destroy or Return</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </>
            ) : formData.template === "Service Contract" ? (
              <>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Payment Terms
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-400 font-bold group-focus-within:text-primary transition-colors text-xs">
                        <Briefcase className="h-4 w-4" />
                      </span>
                    </div>
                    <select
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none shadow-sm cursor-pointer font-medium"
                      value={formData.paymentTerms}
                      onChange={(e) => onChange("paymentTerms", e.target.value)}
                    >
                      <option value="Fixed Price">Fixed Price</option>
                      <option value="Hourly Rate">Hourly Rate</option>
                      <option value="Milestone Based">Milestone Based</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Amount / Rate
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center z-10">
                      <select
                        value={formData.currency}
                        onChange={(e) => onChange("currency", e.target.value)}
                        className="h-full bg-transparent border-none text-gray-500 font-bold text-xs focus:ring-0 cursor-pointer pr-1 py-0 pl-0 appearance-none"
                        style={{ pointerEvents: 'auto' }}
                      >
                        <option value="USD">$</option>
                        <option value="GBP">£</option>
                        <option value="NGN">₦</option>
                      </select>
                    </div>
                    <input
                      className="block w-full pl-12 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm font-medium"
                      placeholder="0.00"
                      type="text"
                      value={formData.amountRate}
                      onChange={(e) => onChange("amountRate", e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Start Date
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm font-medium"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => onChange("startDate", e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Completion Date
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm font-medium"
                      type="date"
                      value={formData.completionDate}
                      onChange={(e) => onChange("completionDate", e.target.value)}
                    />
                  </div>
                </div>
              </>
            ) : formData.template === "Business Agreement" ? (
              <>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Agreement Type
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <select
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none shadow-sm cursor-pointer font-medium"
                      value={formData.agreementType}
                      onChange={(e) => onChange("agreementType", e.target.value)}
                    >
                      <option value="General Business">General Business</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Joint Venture">Joint Venture</option>
                      <option value="Employment">Employment</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Dispute Resolution
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Scale className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <select
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none shadow-sm cursor-pointer font-medium"
                      value={formData.disputeResolution}
                      onChange={(e) => onChange("disputeResolution", e.target.value)}
                    >
                      <option value="Arbitration">Arbitration</option>
                      <option value="Litigation">Litigation</option>
                      <option value="Mediation">Mediation</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Term Duration
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm font-medium"
                      placeholder="e.g. 1 Year, Indefinite"
                      type="text"
                      value={formData.termDuration}
                      onChange={(e) => onChange("termDuration", e.target.value)}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Loan Amount
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center z-10">
                      <select
                        value={formData.currency}
                        onChange={(e) => onChange("currency", e.target.value)}
                        className="h-full bg-transparent border-none text-gray-500 font-bold text-xs focus:ring-0 cursor-pointer pr-1 py-0 pl-0 appearance-none"
                        style={{ pointerEvents: 'auto' }}
                      >
                        <option value="USD">$</option>
                        <option value="GBP">£</option>
                        <option value="NGN">₦</option>
                      </select>
                    </div>
                    <input
                      className="block w-full pl-12 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm font-medium"
                      placeholder="0.00"
                      type="text"
                      value={formData.loanAmount}
                      onChange={(e) => onChange("loanAmount", e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Interest Rate (%)
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-400 font-bold group-focus-within:text-primary transition-colors">%</span>
                    </div>
                    <input
                      className="block w-full pl-8 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm font-medium"
                      placeholder="5.0"
                      step="0.1"
                      type="number"
                      value={formData.interestRate}
                      onChange={(e) => onChange("interestRate", e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                    Effective Date
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                      className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm font-medium"
                      type="date"
                      value={formData.effectiveDate}
                      onChange={(e) => onChange("effectiveDate", e.target.value)}
                    />
                  </div>
                </div>
              </>
            )}
            {formData.template !== "Service Contract" && formData.template !== "Loan Agreement" && !formData.template && (
              <div className="col-span-2">
                <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                  Effective Date
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary shadow-sm font-medium"
                    type="date"
                    value={formData.effectiveDate}
                    onChange={(e) => onChange("effectiveDate", e.target.value)}
                  />
                </div>
              </div>
            )}
            <div className="col-span-1">
              <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                Country
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Globe className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                </div>
                <select 
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none shadow-sm cursor-pointer font-medium"
                  value={formData.country}
                  onChange={(e) => {
                    onChange("country", e.target.value);
                    onChange("jurisdiction", "");
                  }}
                >
                  <option value="">Select Country</option>
                  {allCountries.map(country => (
                    <option key={country.isoCode} value={country.name}>{country.name}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                Jurisdiction / State
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-4 w-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                </div>
                <select 
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none shadow-sm cursor-pointer font-medium"
                  value={formData.jurisdiction}
                  onChange={(e) => onChange("jurisdiction", e.target.value)}
                  disabled={!formData.country}
                >
                  <option value="">Select State</option>
                  {countryStates.map((state) => (
                    <option key={state.isoCode} value={state.name}>{state.name}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {formData.template === "Service Contract" && (
          <div className="space-y-5">
            <h3 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full"></div> 4. Scope & Deliverables
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                  Scope of Work
                </label>
                <textarea
                  className="block w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm font-medium min-h-[100px]"
                  placeholder="Detailed description of services to be provided..."
                  value={formData.scopeOfWork}
                  onChange={(e) => onChange("scopeOfWork", e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {formData.template === "Business Agreement" && (
          <div className="space-y-5">
            <h3 className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-4 bg-primary rounded-full"></div> 4. Purpose & Terms
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                  Agreement Purpose
                </label>
                <textarea
                  className="block w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm font-medium min-h-[80px]"
                  placeholder="Detailed description of the mutual goal and purpose..."
                  value={formData.agreementPurpose}
                  onChange={(e) => onChange("agreementPurpose", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">
                  Key Terms & Obligations
                </label>
                <textarea
                  className="block w-full px-4 py-3 border border-gray-200 dark:border-gray-700 rounded-xl text-sm bg-white dark:bg-gray-900 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm font-medium min-h-[100px]"
                  placeholder="Enter Key Terms & Obligations..."
                  value={formData.obligations}
                  onChange={(e) => onChange("obligations", e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {/* Section 4: AI Actions */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800/50 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            <Sparkles className="w-24 h-24 text-primary" />
          </div>
          <div className="flex items-start gap-4 relative z-10">
            <div className="p-2.5 bg-white dark:bg-indigo-950 rounded-xl shadow-sm text-primary dark:text-indigo-300 ring-1 ring-indigo-100 dark:ring-indigo-900">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">AI Contract Assistant</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-4 leading-relaxed font-medium">
                Let our AI analyze the risk factors and suggest improvements based on recent legal precedents.
              </p>
              <button className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 dark:text-indigo-300 dark:hover:text-indigo-200 transition-colors group/btn">
                Analyze Contract
                <svg className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer Actions */}
      <div className="sticky bottom-0 left-0 w-full p-4 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 flex items-center gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] z-20">
        <button className="flex-1 h-12 flex items-center justify-center gap-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl text-slate-700 dark:text-slate-200 text-sm font-bold hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all">
          <Save className="w-4 h-4" />
          Save Draft
        </button>
        <button className="flex-[1.5] h-12 flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 transform active:scale-[0.98]">
          <Send className="w-4 h-4" />
          Send for Signature
        </button>
      </div>
    </section>
  )
}