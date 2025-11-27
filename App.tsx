import React from 'react';
import { VerificationResult } from './components/VerificationResult';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative font-sans">
      {/* Background Watermark Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
         <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
            alt="Emblem" 
            className="opacity-[0.03] w-3/4 max-w-3xl grayscale"
         />
      </div>

      <div className="z-10 flex flex-col min-h-screen">
        {/* Static Branding (Replaces Navbar) */}
        <div className="pt-8 pb-4 text-center">
            <div className="flex justify-center items-center gap-4 mb-2">
                 <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                  alt="Satyameva Jayate" 
                  className="h-20 w-auto"
                />
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/c/cf/Aadhaar_Logo.svg" 
                  alt="Aadhaar Logo" 
                  className="h-16 w-auto"
                />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
                Government of India
            </h1>
            <h2 className="text-lg font-medium text-gray-600 uppercase">
                Unique Identification Authority of India
            </h2>
        </div>
        
        <main className="flex-grow container mx-auto px-4 py-6 flex justify-center">
          <div className="w-full max-w-4xl">
            <VerificationResult />
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default App;