const Testimonial = () => {
  return (
    <div className="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <span className="material-symbols-outlined text-6xl">format_quote</span>
      </div>
      <blockquote className="relative z-10">
        <p className="text-gray-600 dark:text-gray-300 italic mb-4">
          "iConcur has completely transformed how we handle NDAs and Service Agreements. The AI suggestions are surprisingly accurate."
        </p>
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
            <img
              alt="Professional woman in business suit smiling"
              className="object-cover w-full h-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxHLdiTy0ioYu07CFptseMzuOV0mX2vOkY-vRpzHPPcJJ19NU7ybLK9v3wLBNEc95Dxb4v_As5psU3fVWRaQU7HU0DEHkHp4v7JcEFLU6YrB6I0oBbceOIBL-jSIlWLVeuaqNB9XRGU19tAD7r8kd8SfcLijfOZzdyyc6zUZ3SjYnAnla0hHGdYPoaqbZ-2q9iD7buuvEm4kCXKcdOit9-P6N6rFYI8mSQZF9rvo9xUfuX9lFQa1Zni7SEfV2N3hRT8DixLwK3"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 dark:text-white">Sarah Jenkins</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">General Counsel, TechFlow</p>
          </div>
        </div>
      </blockquote>
    </div>
  );
};

export default Testimonial;
