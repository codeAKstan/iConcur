const HowItWorksSection = () => {
  return (
    <section className="px-4 py-20 layout-container">
      <div className="max-w-[960px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#0d121b] dark:text-white text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            How It Works
          </h2>
          <p className="text-[#0d121b] dark:text-gray-300 text-lg font-normal leading-normal">
            Three simple steps to your next agreement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative flex flex-col gap-6 p-6 rounded-2xl bg-white dark:bg-[#1a2230] shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="absolute -top-3 -right-3 size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">1</div>
            <div className="h-40 rounded-lg bg-blue-50 dark:bg-blue-900/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{ fontSize: '64px' }}>upload_file</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d121b] dark:text-white text-xl font-bold">Draft or Upload</h3>
              <p className="text-[#4c669a] dark:text-gray-400 text-base">Use our rich text editor or simply upload your existing PDF contracts.</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-6 p-6 rounded-2xl bg-white dark:bg-[#1a2230] shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="absolute -top-3 -right-3 size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">2</div>
            <div className="h-40 rounded-lg bg-blue-50 dark:bg-blue-900/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{ fontSize: '64px' }}>analytics</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d121b] dark:text-white text-xl font-bold">Review with AI</h3>
              <p className="text-[#4c669a] dark:text-gray-400 text-base">Get instant, actionable insights on potential risks and clarity issues.</p>
            </div>
          </div>
          <div className="relative flex flex-col gap-6 p-6 rounded-2xl bg-white dark:bg-[#1a2230] shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="absolute -top-3 -right-3 size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">3</div>
            <div className="h-40 rounded-lg bg-blue-50 dark:bg-blue-900/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined" style={{ fontSize: '64px' }}>send</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#0d121b] dark:text-white text-xl font-bold">Sign & Share</h3>
              <p className="text-[#4c669a] dark:text-gray-400 text-base">Send for secure digital signature and track the status in real-time.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
