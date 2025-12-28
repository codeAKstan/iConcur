interface StatsCardProps {
  title: string;
  value: string;
  icon: string;
  color: 'blue' | 'orange' | 'green' | 'purple';
  meta?: string;
}

const colorClasses = {
  blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
  green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
};

const metaColorClasses = {
  blue: 'bg-slate-100 dark:bg-slate-800 text-slate-400',
  orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600',
  green: 'bg-green-50 dark:bg-green-900/20 text-green-600',
  purple: '',
};

const StatsCard = ({ title, value, icon, color, meta }: StatsCardProps) => {
  return (
    <div className="rounded-xl bg-white dark:bg-surface-dark p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses[color]}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        {meta && <span className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${metaColorClasses[color]}`}>{meta}</span>}
      </div>
      <div className="mt-4">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
        <p className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
