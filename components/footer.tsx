import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary pt-16 pb-8 text-white">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col gap-4">
            <div className="relative h-[56px] w-[160px]">
                      <Image
                        src="/logo.png"
                        alt="iConcur Logo"
                        fill
                        className="object-contain object-left"
                        priority
                      />
                    </div>
            <p className="text-blue-200 text-sm leading-relaxed">
              Making contracts simple, understandable, and secure for everyone.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-blue-100">Product</h4>
            <Link href="#features" className="text-blue-200 hover:text-white text-sm transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-blue-200 hover:text-white text-sm transition-colors">
              Pricing
            </Link>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Security
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-blue-100">Company</h4>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              About Us
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Contact
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Careers
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-blue-100">Legal</h4>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
        <div className="border-t border-blue-500/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-300 text-sm">© 2025 iConcur Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-blue-300 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-blue-300 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
