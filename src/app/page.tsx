import MarketingHeader from '@/components/MarketingHeader';
import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import HowItWorksSection from '@/components/HowItWorksSection';
import TrustBanner from '@/components/TrustBanner';
import CtaSection from '@/components/CtaSection';
import MarketingFooter from '@/components/MarketingFooter';

export default function LandingPage() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <MarketingHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesGrid />
        <HowItWorksSection />
        <TrustBanner />
        <CtaSection />
      </main>
      <MarketingFooter />
    </div>
  );
}
