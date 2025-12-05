import React, { useState } from 'react';
import TopBar from './components/TopBar';
import AssetCard from './components/AssetCard';
import { CURRENT_TASK } from './constants';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col font-sans text-[#111827]">
      <TopBar />

      <main className="flex-1 relative flex">
        
        {/* Collapsible Sidebar Overlay */}
        <div 
            className={`fixed left-0 top-[90px] h-[calc(100vh-90px)] bg-black text-white transition-all duration-300 ease-in-out z-40 rounded-r-xl shadow-2xl flex flex-col ${sidebarOpen ? 'w-[300px]' : 'w-[50px] overflow-hidden'}`}
        >
            <div className="bg-black p-3 flex justify-between items-center border-b border-gray-800 h-12">
                {sidebarOpen && <span className="text-sm font-semibold truncate">Journey Board</span>}
                <button 
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-1 hover:bg-gray-800 rounded-full ml-auto"
                >
                    {sidebarOpen ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                </button>
            </div>
            
            <div className="p-4 flex-1 overflow-y-auto">
               {sidebarOpen ? (
                   <ul className="list-disc pl-5 space-y-3 text-sm font-light">
                       <li><strong className="font-semibold">Explore the world of management</strong></li>
                       <li>Technical Project Management</li>
                       <li>Threadbuild</li>
                       <li>Structure your pointers</li>
                       <li>4SA Method</li>
                   </ul>
               ) : (
                   <div className="flex flex-col items-center gap-4 mt-4 text-xs font-bold text-gray-500">
                       <div className="w-6 h-6 rounded-full border border-blue-500 text-blue-500 flex items-center justify-center">1</div>
                   </div>
               )}
            </div>
        </div>

        {/* Main Content Area */}
        <div className={`flex-1 transition-all duration-300 p-4 md:p-8 lg:px-24 xl:px-32 ${sidebarOpen ? 'ml-[300px]' : 'ml-[50px]'}`}>
          
          {/* Header Section */}
          <div className="flex justify-between items-start mb-10">
            <div>
                 <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{CURRENT_TASK.title}</h1>
                 <div className="bg-[#E9ECEF] p-4 rounded-lg max-w-3xl shadow-sm border border-gray-200">
                    <h3 className="font-bold text-sm mb-1 text-gray-800">Explore the world of management</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?
                    </p>
                 </div>
            </div>
            
            <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 shadow-md transition-transform active:scale-95">
                Submit Task
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
             {CURRENT_TASK.assets.map(asset => (
                 <AssetCard key={asset.id} asset={asset} />
             ))}
          </div>

          {/* Floating Action Buttons (Bottom Right) */}
          <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
             <button className="w-12 h-12 bg-blue-600 rounded-full text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
             </button>
             <button className="w-12 h-12 bg-blue-600 rounded-full text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
             </button>
             <button className="w-12 h-12 bg-blue-600 rounded-full text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
             </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;