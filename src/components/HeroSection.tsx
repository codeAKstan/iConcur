const HeroSection = () => {
  return (
    <section className="layout-container flex flex-col justify-center py-12 lg:py-20 px-4 lg:px-40">
      <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto w-full">
        <div className="@container">
          <div className="flex flex-col gap-10 lg:flex-row items-center">
            <div className="flex flex-col gap-6 flex-1 lg:max-w-[50%]">
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-[#0d121b] dark:text-white text-4xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                  Create, Understand, and Sign Agreements in <span className="text-primary">Minutes</span>
                </h1>
                <h2 className="text-[#4c669a] dark:text-gray-300 text-lg font-normal leading-relaxed">
                  Draft simple contracts, analyze risks with AI, and securely sign with confidence. No legal jargon overload.
                </h2>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg transition-transform hover:-translate-y-0.5">
                  <span className="truncate">Create a Contract</span>
                </button>
                <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-[#0d121b] dark:text-white text-base font-bold leading-normal tracking-[0.015em] transition-transform hover:-translate-y-0.5">
                  <span className="truncate">See How It Works</span>
                </button>
              </div>
              <div className="flex items-center gap-2 pt-2 text-sm text-[#4c669a] dark:text-gray-400">
                <span className="material-symbols-outlined text-green-500" style={{ fontSize: '18px' }}>check_circle</span>
                <span>No credit card required</span>
                <span className="mx-2">•</span>
                <span className="material-symbols-outlined text-green-500" style={{ fontSize: '18px' }}>check_circle</span>
                <span>SOC2 Compliant Security</span>
              </div>
            </div>
            <div className="flex-1 w-full mt-8 lg:mt-0">
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-[#e7ebf3] dark:border-gray-700 group">
                <div
                  className="absolute inset-0 bg-center bg-cover bg-no-repeat transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDzg1KpTFQC2HXJtzl5PkYKCodjrsAyytaTEchrXkdyEckL-IP4xzhSSjxYtvbulCmIyB1o6ZwvHktu02U-nWPGIho74_OE0iVzVe6gidlHReMHVLoEF_jWil5mC-N9bFVNZqPlMdRoisWPVAgxBeTX0JcNhqpBnL8_EINM97IA3sDg7_kt-FV0699Sq2pz02iYRKQf0iCHwEQv4eFd_oDhsHPv5_OzvoMdUoNSHVy10tZyaglOC2-7dPHsiacrTzcOJ4LNZldt")' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-light/20 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white dark:bg-[#1a2230] rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  <div className="size-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">AI Insight</span>
                    <span className="text-sm font-medium text-[#0d121b] dark:text-white">Clause 4.2 contains ambiguous liability terms.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
