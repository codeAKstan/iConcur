interface PricingCardProps {
  plan: string;
  description: string;
  price: string;
  priceSuffix?: string;
  buttonText: string;
  features: string[];
  disabledFeatures?: string[];
  highlighted?: boolean;
}

const PricingCard = ({
  plan,
  description,
  price,
  priceSuffix,
  buttonText,
  features,
  disabledFeatures,
  highlighted,
}: PricingCardProps) => {
  return (
    <div
      className={`flex flex-col rounded-xl border ${
        highlighted
          ? 'border-2 border-primary'
          : 'border-border-light dark:border-border-dark'
      } bg-card-light dark:bg-card-dark p-8 shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300 ${
        highlighted ? 'md:-mt-4 md:mb-4' : ''
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Most Popular
        </div>
      )}
      <div className="mb-4">
        <h3 className={`text-text-main-light dark:text-text-main-dark text-lg font-bold ${highlighted ? 'text-primary' : ''}`}>{plan}</h3>
        <p className="text-text-sub-light dark:text-text-sub-dark text-sm mt-1">{description}</p>
      </div>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-text-main-light dark:text-text-main-dark text-4xl font-black tracking-tight">{price}</span>
        {priceSuffix && <span className="text-text-sub-light dark:text-text-sub-dark font-medium">{priceSuffix}</span>}
      </div>
      <button
        className={`w-full rounded-lg h-11 px-4 text-sm font-bold transition-colors ${
          highlighted
            ? 'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25'
            : 'bg-background-light dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-text-main-light dark:text-text-main-dark border border-border-light dark:border-border-dark'
        }`}
      >
        {buttonText}
      </button>
      <div className="mt-8 flex flex-col gap-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm text-text-main-light dark:text-text-main-dark">
            <span className="material-symbols-outlined text-primary text-[20px]">check</span>
            <span>{feature}</span>
          </div>
        ))}
        {disabledFeatures?.map((feature) => (
          <div key={feature} className="flex items-center gap-3 text-sm text-text-sub-light dark:text-text-sub-dark opacity-50">
            <span className="material-symbols-outlined text-[20px]">close</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
