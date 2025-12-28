import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="flex w-64 flex-col border-r border-slate-200 bg-surface-light dark:bg-surface-dark dark:border-slate-800 transition-all duration-300 ease-in-out shrink-0 h-full">
      <div className="flex h-20 items-center gap-3 px-6 border-b border-slate-100 dark:border-slate-800/50">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
          <span className="material-symbols-outlined text-2xl">description</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">iConcur</span>
      </div>
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
        <Link href="/dashboard" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 bg-primary/10 text-primary font-medium transition-colors">
          <span className="material-symbols-outlined text-[24px]">dashboard</span>
          <span>Dashboard</span>
        </Link>
        <Link href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium">
          <span className="material-symbols-outlined text-[24px]">folder_open</span>
          <span>My Contracts</span>
        </Link>
        <Link href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium">
          <span className="material-symbols-outlined text-[24px]">edit_document</span>
          <span>Draft Contract</span>
        </Link>
        <Link href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium">
          <span className="material-symbols-outlined text-[24px]">search_check</span>
          <span>Analyze Contract</span>
        </Link>
        <Link href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium">
          <span className="material-symbols-outlined text-[24px]">ink_pen</span>
          <span>Sign Requests</span>
          <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-[10px] font-bold text-orange-600">3</span>
        </Link>
        <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
          <Link href="#" className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-colors font-medium">
            <span className="material-symbols-outlined text-[24px]">settings</span>
            <span>Settings</span>
          </Link>
        </div>
      </nav>
      <div className="border-t border-slate-200 dark:border-slate-800 p-4">
        <div className="flex items-center gap-3 rounded-lg p-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-200 relative">
            <img alt="Profile picture of John Doe" className="h-full w-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900 dark:text-white">John Doe</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">john@iconcur.com</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
