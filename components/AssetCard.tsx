import React, { useState } from 'react';
import { Asset, AssetType } from '../types';
import { Info, ChevronUp, ChevronDown, Lightbulb, MessageSquare, Plus } from 'lucide-react';

interface AssetCardProps {
  asset: Asset;
}

const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  // Helper to render specific body content based on type
  const renderBody = () => {
    switch (asset.type) {
      case AssetType.VIDEO:
        return (
          <div className="relative w-full pt-[56.25%] bg-black rounded-md overflow-hidden shadow-inner">
             <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src={asset.content || "https://www.youtube.com/watch?v=WNwkhFi6JFs&t=2s"} 
                title={asset.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
          </div>
        );

      case AssetType.THREAD:
        return (
          <div className="flex flex-col gap-4">
            <div className="bg-[#FEFFC0]/20 border border-[#FEFFC0] p-2 rounded-md flex items-start gap-2">
                <ChevronUp className="w-5 h-5 text-gray-500 mt-1" />
                <div className="flex-1">
                    <span className="font-bold text-gray-700 text-sm">Thread A</span>
                    <p className="text-xs text-gray-500 mt-1">
                        How do you organize your project files?
                    </p>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
                 <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 shadow-sm">
                    <label className="text-[10px] uppercase font-bold text-gray-500 mb-1 block">Sub thread 1</label>
                    <textarea 
                        className="w-full bg-transparent text-sm resize-none focus:outline-none h-16"
                        placeholder="Enter your thoughts here..."
                    />
                 </div>
                 <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 shadow-sm">
                    <label className="text-[10px] uppercase font-bold text-gray-500 mb-1 block">Sub Interpretation 1</label>
                    <textarea 
                        className="w-full bg-transparent text-sm resize-none focus:outline-none h-16"
                        placeholder="Enter your interpretation..."
                    />
                 </div>
            </div>

            <div className="flex justify-end gap-2 text-gray-500">
                <Lightbulb size={16} />
                <MessageSquare size={16} />
                <Info size={16} />
            </div>
            
            <button className="self-start flex items-center gap-2 bg-blue-600 text-white text-xs px-3 py-2 rounded-md shadow-sm hover:bg-blue-700 transition">
                <Plus size={14} />
                <span>Sub-thread</span>
            </button>

             <div className="bg-gray-50 rounded-lg p-2 border border-gray-100 shadow-sm mt-2">
                <label className="text-[10px] uppercase font-bold text-gray-500 mb-1 block">Summary for Thread A</label>
                <textarea 
                    className="w-full bg-transparent text-sm resize-none focus:outline-none h-16"
                    placeholder="Summarize the discussion..."
                />
             </div>
          </div>
        );

      case AssetType.INPUT:
        return (
          <div className="flex flex-col gap-4 h-full">
            <div className="flex flex-col gap-1">
                <label className="font-semibold text-sm text-gray-700">Title</label>
                <input 
                    type="text" 
                    className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                    placeholder="Project structure..."
                />
            </div>
             <div className="flex flex-col gap-1 flex-1">
                <label className="font-semibold text-sm text-gray-700">Content</label>
                <div className="border border-gray-300 rounded-md overflow-hidden shadow-sm flex-1 flex flex-col">
                    <div className="bg-gray-50 border-b border-gray-200 px-3 py-2 flex gap-4 text-xs text-gray-600">
                        <span>File</span>
                        <span>Edit</span>
                        <span>View</span>
                        <span>Insert</span>
                        <span>Format</span>
                        <span>Tools</span>
                    </div>
                    <textarea 
                        className="w-full p-3 text-sm resize-none focus:outline-none flex-1 min-h-[120px]"
                        placeholder="Write your structured pointers here..."
                    />
                </div>
            </div>
          </div>
        );

      case AssetType.ARTICLE:
        return (
          <div className="text-sm text-gray-700 space-y-3">
             <div className="bg-gray-50 p-3 rounded-md border-l-4 border-gray-400">
                <h4 className="font-bold mb-1">Introduction</h4>
                <p>The 4SA Method , How to bring a idea into progress ?</p>
             </div>
             <div className="bg-gray-50 p-3 rounded-md border-l-4 border-gray-400">
                <h4 className="font-bold mb-1">Thread A</h4>
                <p>How are you going to develop your strategy ? Which method are you going to use to develop a strategy ? What if the project is lengthy?</p>
             </div>
              <div className="bg-white p-3 rounded-md border border-gray-200">
                <h4 className="font-bold mb-1 text-gray-800">Example 1</h4>
                <p className="text-gray-600">You have a concept , How will you put into progress?</p>
             </div>
          </div>
        );
      
      default:
        return <div className="p-4 text-gray-400 italic">Content not available</div>;
    }
  };

  return (
    <div className="bg-white rounded-[15px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] overflow-hidden border border-transparent hover:border-blue-100 transition-all duration-300 flex flex-col h-fit">
      {/* Header */}
      <div className="bg-black text-white px-4 py-3 flex justify-between items-center relative">
        <h3 className="font-semibold text-sm tracking-wide flex-1 text-center pr-6">
            {asset.title}
        </h3>
        <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white/10 hover:bg-white/20 rounded-full p-1 transition-colors"
        >
            <Info size={16} />
        </button>
      </div>

      {/* Description Strip */}
      <div className="bg-white p-4 border-b border-gray-100 shadow-sm relative z-10">
        <p className="text-xs text-gray-600 leading-relaxed">
            <span className="font-bold text-black mr-1">Description:</span>
            {asset.description}
        </p>
      </div>

      {/* Body Content */}
      <div className={`transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100 max-h-[800px]' : 'opacity-50 max-h-32 overflow-hidden'}`}>
        <div className="p-4">
            {renderBody()}
        </div>
      </div>
    </div>
  );
};

export default AssetCard;