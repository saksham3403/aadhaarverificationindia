import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b-4 border-[#FF9933]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left: Govt of India */}
          <div className="flex items-center gap-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
              alt="Satyameva Jayate" 
              className="h-16 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 text-sm md:text-base uppercase tracking-wide">
                Government of India
              </span>
              <span className="font-medium text-gray-600 text-xs md:text-sm uppercase">
                Unique Identification Authority of India
              </span>
            </div>
          </div>

          {/* Right: Aadhaar Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/c/cf/Aadhaar_Logo.svg" 
              alt="Aadhaar Logo" 
              className="h-14 w-auto"
            />
          </div>
        </div>
      </div>
      {/* Tricolor Strip */}
      <div className="h-1 w-full flex">
        <div className="w-1/3 bg-[#FF9933]"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-[#138808]"></div>
      </div>
    </header>
  );
};