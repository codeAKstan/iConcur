import Link from 'next/link';

const AppHeader = () => {
  return (
    <header className="flex-none flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark px-6 py-3 z-20">
      <div className="flex items-center gap-4 text-text-main dark:text-white">
        <div className="size-8 text-primary">
          {/* SVG Icon */}
        </div>
        <h2 className="text-text-main dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">iConcur</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8 items-center">
        <nav className="hidden md:flex items-center gap-9">
          <Link href="/dashboard" className="text-text-main dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
          <Link href="#" className="text-text-main dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors">Contracts</Link>
          <Link href="#" className="text-text-main dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors">Templates</Link>
          <Link href="#" className="text-text-main dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors">Reports</Link>
        </nav>
        <div className="flex gap-3 items-center">
          <button className="flex items-center justify-center overflow-hidden rounded-lg h-9 w-9 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-text-main dark:text-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-1"></div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-gray-200 dark:border-gray-700 shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6wGK5HEarbYvQ3NeYUOud_90c9e8KmltyJHKAfJi9tHfsQ5mXFwX2snoSNDHOT3abpOTVuyYyw8tEOxPDL_bWaZy8dX3Tocg3xzTCHu38N3McXeH05gkMj-efSXVv0VJSr9xGSvGnUX0kf1a0GOAUxnnYFDWxHRS5D6ZOe3aO9ZePaICa0Kz0txryMqrgK-qVQ9VrGrzVQIM_osOxIPC5db0JBxeQafLZ0HIjn6P4VsnpraXJKCqfrtGN70TwbakLDLXUfVcO")' }}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
