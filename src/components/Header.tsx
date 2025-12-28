const Header = () => {
  return (
    <header className="h-20 shrink-0 flex items-center justify-between px-8 bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
          </div>
          <input
            type="text"
            className="block w-full rounded-lg border-none bg-slate-100 dark:bg-slate-800/50 py-2.5 pl-10 pr-3 text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Search contracts, clients, or templates..."
          />
        </div>
      </div>
      <div className="flex items-center gap-4 ml-4">
        <button className="relative p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900"></span>
        </button>
        <button className="hidden md:flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all">
          <span className="material-symbols-outlined text-[20px]">add</span>
          Create New Contract
        </button>
      </div>
    </header>
  );
};

export default Header;
