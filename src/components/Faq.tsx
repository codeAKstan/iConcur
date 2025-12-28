const Faq = () => {
  return (
    <section className="py-20 px-4 bg-background-light dark:bg-background-dark">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-text-main-light dark:text-text-main-dark text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-text-sub-light dark:text-text-sub-dark">Everything you need to know about the product and billing.</p>
        </div>
        <div className="space-y-4">
          <details className="group rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-main-light dark:text-text-main-dark font-medium">
              <span className="text-lg font-semibold">Is my contract data secure?</span>
              <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 leading-relaxed text-text-sub-light dark:text-text-sub-dark">
              Absolutely. We use bank-grade 256-bit encryption for all data in transit and at rest. We are SOC2 Type II compliant and conduct regular security audits to ensure your sensitive legal documents are protected.
            </p>
          </details>
          <details className="group rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-main-light dark:text-text-main-dark font-medium">
              <span className="text-lg font-semibold">Can I change plans later?</span>
              <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 leading-relaxed text-text-sub-light dark:text-text-sub-dark">
              Yes, you can upgrade or downgrade your plan at any time from your account settings. Prorated charges will be applied automatically for mid-cycle upgrades.
            </p>
          </details>
          <details className="group rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-main-light dark:text-text-main-dark font-medium">
              <span className="text-lg font-semibold">Do you offer discounts for non-profits?</span>
              <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 leading-relaxed text-text-sub-light dark:text-text-sub-dark">
              Yes! We are proud to support non-profit organizations. Please contact our sales team with proof of your non-profit status to receive a 20% discount on all annual plans.
            </p>
          </details>
          <details className="group rounded-xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-text-main-light dark:text-text-main-dark font-medium">
              <span className="text-lg font-semibold">What happens after my trial ends?</span>
              <span className="material-symbols-outlined text-text-sub-light dark:text-text-sub-dark transition-transform duration-300 group-open:rotate-180">expand_more</span>
            </summary>
            <p className="mt-4 leading-relaxed text-text-sub-light dark:text-text-sub-dark">
              If you don't choose a plan by the end of your 14-day trial, your account will be automatically downgraded to the Free Starter plan. Your data remains safe, but access to premium features like AI Analysis will be locked.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
