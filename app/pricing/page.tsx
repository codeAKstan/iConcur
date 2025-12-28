import { PricingHeader } from "@/components/pricing/pricing-header"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { PricingFAQ } from "@/components/pricing/pricing-faq"
import { TrustIndicators } from "@/components/pricing/trust-indicators"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "iConcur - Pricing",
  description: "Simple pricing for powerful contracts. Transparent pricing, no hidden fees.",
}

export default function PricingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navigation />
      <main className="flex-grow">
        <PricingHeader />
        <PricingCards />
        <TrustIndicators />
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  )
}
