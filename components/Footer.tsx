import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1b1b1b] text-white py-6 mt-8 border-t-4 border-[#138808]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="text-center md:text-left">
            <p>Copyright © 2024 Unique Identification Authority of India.</p>
            <p className="text-xs mt-1">All rights reserved.</p>
          </div>
          
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Website Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Help</span>
          </div>
        </div>
        
        <div className="mt-6 text-center text-xs text-gray-600">
          This is a verification page generated for verification purposes.
        </div>
      </div>
    </footer>
  );
};
