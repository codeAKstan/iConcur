import AppHeader from '@/components/AppHeader';
import DraftingForm from '@/components/DraftingForm';
import LivePreview from '@/components/LivePreview';

const DraftContractPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-main dark:text-gray-100 font-display antialiased overflow-hidden h-screen flex flex-col transition-colors duration-200">
      <AppHeader />
      <main className="flex-1 flex overflow-hidden">
        <DraftingForm />
        <LivePreview />
      </main>
    </div>
  );
};

export default DraftContractPage;
