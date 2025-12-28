import Header from '@/components/Header';
import StatsCard from '@/components/StatsCard';
import RecentActivityTable from '@/components/RecentActivityTable';
import QuickActions from '@/components/QuickActions';

const DashboardPage = () => {
  return (
    <>
      <Header />
      <div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Welcome back, John</h1>
            <p className="text-slate-500 dark:text-slate-400">Here is an overview of your contract pipeline today.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCard title="Drafts in Progress" value="12" icon="edit_document" color="blue" meta="Updated 1h ago" />
            <StatsCard title="Pending Signatures" value="5" icon="hourglass_top" color="orange" meta="Action Required" />
            <StatsCard title="Signed Contracts" value="24" icon="check_circle" color="green" meta="+3 this week" />
            <StatsCard title="Archived & Completed" value="108" icon="inventory_2" color="purple" />
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <RecentActivityTable />
            </div>
            <div className="flex flex-col gap-6">
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
