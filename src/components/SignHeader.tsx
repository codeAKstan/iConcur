const SignHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-8 rounded-lg bg-primary/10 text-primary">
              <span className="material-symbols-outlined text-2xl">history_edu</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">iConcur</span>
            <div className="hidden md:block h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <h1 className="hidden md:block text-sm font-medium text-slate-500 dark:text-slate-400">Service Level Agreement - Q3 2024</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span>Download PDF</span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 dark:text-white leading-none">John Doe</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">john.doe@example.com</p>
              </div>
              <div className="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center border-2 border-white dark:border-slate-600 shadow-sm" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfWWUNkjeZIIbK0fHF_7iq_MLZjS_AU4hdT-fzfvjqZKkIi-MBb8gm-zDn43xiFVTAKLIkkYoFb8fMtiogMOk0T-1rpgabI-ielQtRFUMwaRFBwjC5XRrKQBmI6uJrSQpZmf3PHWtIHKCapKY9MOgyRQqkWLGh01IvVAAP7jLV8_445q7MaTXt4Y5tfmOrMXqTkzkXVxdnGp7JVkI6jY4BjyvpEXh7pe_TSDVdPOyfgWCoAlyYsBwW6uIVisFwyHq-XE9C36PM')" }}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SignHeader;
