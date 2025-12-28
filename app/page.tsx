import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesGrid } from "@/components/landing/features-grid"
import { HowItWorks } from "@/components/landing/how-it-works"
import { SecurityBanner } from "@/components/landing/security-banner"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
        <SecurityBanner />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
