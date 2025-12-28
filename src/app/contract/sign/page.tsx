import SignHeader from '@/components/SignHeader';
import SignDocument from '@/components/SignDocument';
import SignPanel from '@/components/SignPanel';
import SignFooter from '@/components/SignFooter';

const SignPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white antialiased selection:bg-primary/20 selection:text-primary min-h-screen flex flex-col">
      <SignHeader />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <nav className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">visibility</span>
              Review
            </a>
            <span className="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
            <span className="flex items-center gap-1 text-primary font-semibold bg-primary/10 px-2 py-1 rounded-md">
              <span className="material-symbols-outlined text-[18px]">edit_document</span>
              Sign
            </span>
            <span className="material-symbols-outlined text-[16px] text-slate-300">chevron_right</span>
            <span className="flex items-center gap-1 text-slate-400">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              Complete
            </span>
          </nav>
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Secure Connection
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <SignDocument />
          <SignPanel />
        </div>
      </main>
      <SignFooter />
    </div>
  );
};

export default SignPage;
