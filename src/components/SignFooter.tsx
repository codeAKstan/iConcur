const SignFooter = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark mt-auto py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500 dark:text-slate-400">© 2024 iConcur Inc. All rights reserved.</p>
        <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-400">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Security</a>
          <a href="#" className="hover:text-primary transition-colors">Help Center</a>
        </div>
      </div>
    </footer>
  );
};

export default SignFooter;
