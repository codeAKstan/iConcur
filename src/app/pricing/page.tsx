import MarketingHeader from '@/components/MarketingHeader';
import MarketingFooter from '@/components/MarketingFooter';
import PricingCard from '@/components/PricingCard';
import Faq from '@/components/Faq';

const PricingPage = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <MarketingHeader />
      <main className="flex-grow">
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-background-light dark:from-background-dark dark:to-background-dark">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
            <h1 className="text-text-main-light dark:text-text-main-dark text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Simple pricing for <span className="text-primary">powerful contracts</span>
            </h1>
            <p className="text-text-sub-light dark:text-text-sub-dark text-lg md:text-xl max-w-2xl leading-relaxed">
              Choose the plan that fits your legal workflow. Transparent pricing, no hidden fees. Scale as your team grows.
            </p>
            <div className="mt-8 flex items-center justify-center p-1.5 rounded-full border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark shadow-sm">
              <div className="flex items-center gap-4 px-4 py-2">
                <span className="text-text-main-light dark:text-text-main-dark text-sm font-semibold">Monthly</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                </label>
                <span className="text-text-main-light dark:text-text-main-dark text-sm font-semibold flex items-center gap-2">
                  Yearly
                  <span className="hidden sm:inline-block text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Save 20%</span>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 pb-20 -mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                plan="Starter"
                description="For freelancers & individuals"
                price="$0"
                priceSuffix="/mo"
                buttonText="Get Started Free"
                features={[
                  '3 contracts/mo',
                  'Basic eSign',
                  'PDF Export',
                ]}
                disabledFeatures={['AI Analysis']}
              />
              <PricingCard
                plan="Professional"
                description="For growing teams"
                price="$29"
                priceSuffix="/mo"
                buttonText="Start 14-Day Free Trial"
                features={[
                  'Unlimited contracts',
                  'AI Legal Analysis',
                  'Team workflows',
                  'Audit trails',
                  'Priority Support',
                ]}
                highlighted
              />
              <PricingCard
                plan="Enterprise"
                description="For large organizations"
                price="Custom"
                buttonText="Contact Sales"
                features={[
                  'Unlimited contracts',
                  'API Access',
                  'SSO & SAML',
                  'Dedicated Success Manager',
                  'Custom SLA',
                ]}
              />
            </div>
            <div className="mt-12 text-center">
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-semibold transition-colors group">
                Compare all features in detail
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white dark:bg-card-dark border-y border-border-light dark:border-border-dark">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-text-sub-light dark:text-text-sub-dark uppercase tracking-wider mb-8">Trusted by legal teams at modern companies</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2 font-display text-xl font-bold text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-2xl">rocket_launch</span> AcmeCorp
              </div>
              <div className="flex items-center gap-2 font-display text-xl font-bold text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-2xl">diamond</span> GemStone
              </div>
              <div className="flex items-center gap-2 font-display text-xl font-bold text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-2xl">bolt</span> VoltGrid
              </div>
              <div className="flex items-center gap-2 font-display text-xl font-bold text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-2xl">water_drop</span> FlowState
              </div>
              <div className="flex items-center gap-2 font-display text-xl font-bold text-gray-600 dark:text-gray-400">
                <span className="material-symbols-outlined text-2xl">forest</span> EcoLogic
              </div>
            </div>
          </div>
        </section>
        <Faq />
      </main>
      <MarketingFooter />
    </div>
  );
};

export default PricingPage;
