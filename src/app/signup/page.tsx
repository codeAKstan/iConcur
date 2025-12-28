import Link from 'next/link';
import Testimonial from '@/components/Testimonial';

const SignupPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-gray-100 antialiased flex flex-col min-h-screen">
      <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="text-primary">
                <span className="material-symbols-outlined text-3xl">contract_edit</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">iConcur</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:block text-sm text-gray-500 dark:text-gray-400">Already using iConcur?</span>
              <Link href="/login" className="flex items-center justify-center rounded-lg px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white text-sm font-bold transition-colors">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col justify-center space-y-8 lg:order-1 order-2">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.1]">
                Draft, analyze, and sign contracts <span className="text-primary">10x faster</span>.
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
                Join 10,000+ legal teams automating their workflow. Start your 14-day free trial today. No credit card required.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <span className="text-gray-700 dark:text-gray-200 font-medium">AI-powered contract analysis</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <span className="text-gray-700 dark:text-gray-200 font-medium">Collaborative redlining in real-time</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex-shrink-0 size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-sm font-bold">check</span>
                </div>
                <span className="text-gray-700 dark:text-gray-200 font-medium">Legally binding e-signatures</span>
              </li>
            </ul>
            <Testimonial />
          </div>
          <div className="flex flex-col lg:order-2 order-1">
            <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">Step 1 of 3</span>
                  <span className="text-xs text-primary font-medium">Create Account</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/3 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Create your account</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  {/* Google SVG */}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  {/* Microsoft SVG */}
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Microsoft</span>
                </button>
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-surface-light dark:bg-surface-dark text-gray-500">Or continue with email</span>
                </div>
              </div>
              <form className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="firstName">First Name</label>
                    <input className="w-full h-11 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary text-sm shadow-sm" id="firstName" placeholder="Jane" type="text" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="lastName">Last Name</label>
                    <input className="w-full h-11 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary text-sm shadow-sm" id="lastName" placeholder="Doe" type="text" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">Work Email</label>
                  <input className="w-full h-11 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary text-sm shadow-sm" id="email" placeholder="jane@company.com" type="email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="password">Password</label>
                  <input className="w-full h-11 rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-primary focus:border-primary text-sm shadow-sm" id="password" placeholder="••••••••" type="password" />
                  <p className="mt-1 text-xs text-gray-500">Must be at least 8 characters.</p>
                </div>
                <button className="w-full flex justify-center items-center py-3 px-4 rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary mt-4 transition-all" type="button">
                  Create Account
                  <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                </button>
              </form>
              <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                By clicking "Create Account", you agree to our
                <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and
                <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-center items-center gap-4 grayscale opacity-70">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-lg">lock</span>
                  <span className="text-xs font-semibold">256-bit Encryption</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-lg">verified_user</span>
                  <span className="text-xs font-semibold">GDPR Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-6 border-t border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            © 2023 iConcur Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SignupPage;
