import AppHeader from '@/components/AppHeader';
import DocumentViewer from '@/components/DocumentViewer';
import AiPanel from '@/components/AiPanel';

const AnalysisPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white h-screen flex flex-col overflow-hidden font-display">
      <AppHeader />
      <main className="flex-1 flex overflow-hidden relative">
        <DocumentViewer />
        <AiPanel />
      </main>
    </div>
  );
};

export default AnalysisPage;
