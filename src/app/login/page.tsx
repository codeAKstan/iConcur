import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col text-text-main-light dark:text-text-main-dark antialiased">
      <header className="w-full border-b border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 text-text-main-light dark:text-text-main-dark">
            <div className="w-8 h-8 text-primary flex items-center justify-center">
              {/* SVG Icon */}
            </div>
            <h2 className="text-xl font-extrabold tracking-tight">iConcur</h2>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm font-medium">
            <span className="text-text-secondary-light dark:text-text-secondary-dark">Don't have an account?</span>
            <Link href="/signup" className="text-primary hover:text-primary-hover font-bold transition-colors">Sign Up</Link>
          </div>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[1000px] flex flex-col lg:flex-row bg-surface-light dark:bg-surface-dark rounded-2xl shadow-soft overflow-hidden border border-border-light dark:border-border-dark min-h-[600px]">
          <div className="flex-1 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <div className="max-w-[400px] mx-auto w-full">
              <div className="mb-8">
                <h1 className="text-3xl font-black text-text-main-light dark:text-text-main-dark tracking-tight mb-3">Welcome back</h1>
                <p className="text-text-secondary-light dark:text-text-secondary-dark text-base">Please enter your details to access your contracts.</p>
              </div>
              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-text-main-light dark:text-text-main-dark" htmlFor="email">Email Address</label>
                  <div className="relative">
                    <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-text-secondary-light/60 dark:placeholder:text-text-secondary-dark/60" id="email" placeholder="name@company.com" type="email" />
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary-light dark:text-text-secondary-dark pointer-events-none text-[20px]">mail</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-semibold text-text-main-light dark:text-text-main-dark" htmlFor="password">Password</label>
                    <Link href="#" className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors">Forgot Password?</Link>
                  </div>
                  <div className="relative group">
                    <input className="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main-light dark:text-text-main-dark focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-text-secondary-light/60 dark:placeholder:text-text-secondary-dark/60 pr-10" id="password" placeholder="Enter your password" type="password" />
                    <button className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark hover:text-text-main-light dark:hover:text-text-main-dark transition-colors focus:outline-none" type="button">
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                    </button>
                  </div>
                </div>
                <button className="mt-2 w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-[0.98] flex items-center justify-center gap-2" type="button">
                  <span>Log In</span>
                  <span className="material-symbols-outlined text-[20px]">login</span>
                </button>
              </form>
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border-light dark:border-border-dark"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-surface-light dark:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark font-medium">Or continue with</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 h-10 px-4 border border-border-light dark:border-border-dark rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors text-text-main-light dark:text-text-main-dark font-medium text-sm">
                  {/* Google SVG */}
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 h-10 px-4 border border-border-light dark:border-border-dark rounded-lg hover:bg-background-light dark:hover:bg-background-dark transition-colors text-text-main-light dark:text-text-main-dark font-medium text-sm">
                  {/* Microsoft SVG */}
                  Microsoft
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-primary to-[#052c7a] p-12 text-white flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-10">{/* Abstract Pattern SVG */}</div>
            <div className="relative z-10 mt-auto mb-10">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <blockquote className="text-2xl font-bold leading-snug mb-4">
                "iConcur has revolutionized how we handle legal agreements. The automated analysis saves us hours every week."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">JD</div>
                <div>
                  <p className="font-bold text-sm">Jane Doe</p>
                  <p className="text-white/70 text-xs">General Counsel, TechFlow Inc.</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex gap-4 text-xs font-medium text-white/50">
              <span>© 2023 iConcur</span>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </main>
      <div className="sm:hidden py-6 text-center text-sm bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark">
        <span className="text-text-secondary-light dark:text-text-secondary-dark">Don't have an account?</span>
        <Link href="/signup" className="text-primary font-bold ml-1">Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginPage;
