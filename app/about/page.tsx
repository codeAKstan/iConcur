import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStats } from "@/components/about/about-stats"
import { AboutMission } from "@/components/about/about-mission"
import { AboutValues } from "@/components/about/about-values"
import { AboutLeadership } from "@/components/about/about-leadership"
import { CTASection } from "@/components/landing/cta-section"

export const metadata = {
  title: "iConcur - About Us",
  description: "Learn about iConcur's mission, values, and leadership",
}

export default function AboutPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navigation />
      <main className="flex-grow">
        <AboutHero />
        <AboutStats />
        <AboutMission />
        <AboutValues />
        <AboutLeadership />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
