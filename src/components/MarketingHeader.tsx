import Link from 'next/link';

const MarketingHeader = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-[#e7ebf3] dark:border-[#2a3441] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-10 py-3">
      <div className="flex items-center gap-4 text-[#0d121b] dark:text-white">
        <div className="size-8 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>contract</span>
        </div>
        <h2 className="text-[#0d121b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">iConcur</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="hidden md:flex items-center gap-9">
          <Link href="#" className="text-[#0d121b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Features</Link>
          <Link href="#" className="text-[#0d121b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">How it Works</Link>
          <Link href="/pricing" className="text-[#0d121b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors">Pricing</Link>
        </div>
        <div className="flex gap-2">
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-[#0d121b] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all">
            <span className="truncate">Login</span>
          </button>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-all shadow-md hover:shadow-lg">
            <span className="truncate">Get Started</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default MarketingHeader;
