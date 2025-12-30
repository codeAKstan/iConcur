export function GetStartedTestimonial() {
  return (
    <div className="flex flex-col justify-center space-y-8 lg:order-1 order-2">
      <div className="space-y-4">
        <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-[1.1]">
          Draft, analyze, and sign contracts <span className="text-primary">10x faster</span>.
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
          Join 10,000+ legal teams automating their workflow. Start your 14-day free trial today. No credit card
          required.
        </p>
      </div>
      {/* Features List */}
      <ul className="space-y-4">
        {["AI-powered contract analysis", "Collaborative redlining in real-time", "Legally binding e-signatures"].map(
          (feature, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <div className="flex-shrink-0 size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
                </svg>
              </div>
              <span className="text-gray-700 dark:text-gray-200 font-medium">{feature}</span>
            </li>
          ),
        )}
      </ul>
      {/* Testimonial */}
      <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.708-5-7-5C5.37 5.308 3 7.547 3 5.793c0 1.758 4.571 4.772 4.571 4.772.6-.282 1.282-.574 1.428-1.14-.771-.427-4.744-2.234-4.75-3.456.007-2.318 4.433-4.409 7.662-4.409 4.868 0 7.658 2.vestib 7.658 5.143 0 7-1 15-7 15zm15-1c-3.763 0-7.694-1.273-9.693-3.352a3.3 3.3 0 1 1 3.562-5.4c1.379 1.294 4.267 2.383 6.953 2.383 3.768 0 5.21-2.188 5.21-4.6 0-4.444-4.926-8.75-8.882-8.75C8.5 5.75 5.8 11.757 5.8 15.398c0 2.326 1.263 4.618 2.886 5.817 1.622 1.198 4.54 2.185 7.122 2.185 3.708 0 5.192-1.667 5.192-3.75 0-2.592-1.341-4.116-3.922-4.116-1.381 0-2.587.894-2.587 2.143 0 1.25 1.206 2.143 2.587 2.143.96 0 1.518-.42 1.767-1.133.249-.713.416-1.514.416-2.294 0-3.635-3.203-6.328-7.004-6.328-3.801 0-7.003 2.693-7.003 6.328 0 3.935 3.134 7.394 7.003 7.394z"></path>
          </svg>
        </div>
        <blockquote className="relative z-10">
          <p className="text-gray-600 dark:text-gray-300 italic mb-4">
            "iConcur has completely transformed how we handle NDAs and Service Agreements. The AI suggestions are
            surprisingly accurate."
          </p>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <img
                alt="Professional woman in business suit smiling"
                className="object-cover w-full h-full"
                src="/serah.png"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Sarah Jenkins</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">General Counsel, TechFlow</p>
            </div>
          </div>
        </blockquote>
      </div>
    </div>
  )
}
