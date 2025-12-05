import React from 'react';
import { Home, Binoculars, Wrench, Bell, MoreVertical, UserCircle } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <header className="w-full h-[90px] bg-[#F0F0F0] flex items-center justify-between px-4 md:px-8 shadow-sm sticky top-0 z-50">
      {/* Left Section: Logo */}
      <div className="flex items-center gap-4">
        <img 
          src="https://deepthought.education/assets/images/logo/logo.svg" 
          alt="Deep Thought Logo" 
          className="w-100 h-50"
        />
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-4">
            <button className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors" aria-label="Home">
                <Home size={18} />
            </button>
            <button className="p-2 bg-blue-600/10 rounded-full text-blue-600 hover:bg-blue-600/20 transition-colors" aria-label="Tools">
                <Binoculars size={18} />
            </button>
            <button className="p-2 bg-blue-600/10 rounded-full text-blue-600 hover:bg-blue-600/20 transition-colors" aria-label="Settings">
                <Wrench size={18} />
            </button>
            <button className="p-2 bg-blue-600/10 rounded-full text-blue-600 hover:bg-blue-600/20 transition-colors" aria-label="Notifications">
                <Bell size={18} />
            </button>
        </nav>
        
        <div className="flex items-center gap-2">
             <button className="p-1 hover:bg-gray-200 rounded-full md:hidden">
                <MoreVertical size={20} className="text-gray-600"/>
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
               {/* Placeholder Avatar */}
               <UserCircle className="w-full h-full text-gray-500" />
            </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;