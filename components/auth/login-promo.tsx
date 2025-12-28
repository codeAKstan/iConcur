export function LoginPromo() {
  return (
    <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-primary to-[#052c7a] p-12 text-white flex-col justify-between overflow-hidden">
      {/* Abstract Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
          <path d="M0 100 C 20 20 50 20 100 0 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
          <path d="M0 50 C 40 10 60 90 100 50 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
        </svg>
      </div>
      <div className="relative z-10 mt-auto mb-10">
        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mb-6">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"></path>
          </svg>
        </div>
        <blockquote className="text-2xl font-bold leading-snug mb-4">
          "iConcur has revolutionized how we handle legal agreements. The automated analysis saves us hours every week."
        </blockquote>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
            JD
          </div>
          <div>
            <p className="font-bold text-sm">Jane Doe</p>
            <p className="text-white/70 text-xs">General Counsel, TechFlow Inc.</p>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex gap-4 text-xs font-medium text-white/50">
        <span>© 2025 iConcur</span>
        <a className="hover:text-white transition-colors" href="#">
          Privacy Policy
        </a>
        <a className="hover:text-white transition-colors" href="#">
          Terms of Service
        </a>
      </div>
    </div>
  )
}
