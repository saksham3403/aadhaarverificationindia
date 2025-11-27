import React, { useState } from 'react';
import { CheckCircle2, ShieldCheck, Printer } from 'lucide-react';
import { ImageHolder } from './ImageHolder';

export const VerificationResult: React.FC = () => {
  const userData = {
    name: "SAKSHAM SINGH",
    dob: "20/11/2007",
    gender: "MALE",
    issueDate: "16/04/2016",
    aadhaarNumber: "4363 0318 3001"
  };

  // State to handle image loading errors. 
  // If 'photo.jpg' or 'aadhaar_card.jpg' are not found in your public folder,
  // it falls back to the ImageHolder component automatically.
  const [photoError, setPhotoError] = useState(false);
  const [cardError, setCardError] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Status Bar */}
      <div className="bg-[#138808] px-6 py-5 flex items-center justify-between text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-white opacity-10 pattern-grid-lg"></div>
        <div className="flex items-center gap-4 z-10">
          <CheckCircle2 className="h-10 w-10 text-white" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Aadhaar Verified</h1>
            <p className="text-green-50 font-medium opacity-90">Verification Completed Successfully</p>
          </div>
        </div>
        <ShieldCheck className="h-12 w-12 text-white opacity-80 z-10" />
      </div>

      <div className="p-6 md:p-10 space-y-10">
        
        {/* Top Section: Photo and Personal Details */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          
          {/* Photo Holder: 213x262 */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
             <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center">
                    Resident Photo
                </span>
                <div className="p-1 bg-white border border-gray-200 shadow-sm relative">
                    {/* 
                       Logic: Tries to load /photo.jpg from public folder. 
                       If it fails (onError), shows the placeholder.
                    */}
                    {!photoError ? (
                        <img 
                            src="/photo.jpg" 
                            alt="Resident Photo"
                            style={{ width: '213px', height: '262px' }}
                            className="object-cover block"
                            onError={() => setPhotoError(true)}
                        />
                    ) : (
                        <ImageHolder 
                            width={213} 
                            height={262} 
                            label="PHOTO" 
                            className="bg-gray-100"
                        />
                    )}
                </div>
            </div>
          </div>

          {/* Details Table */}
          <div className="flex-grow w-full">
            <div className="flex items-center justify-between border-b-2 border-gray-100 pb-3 mb-6">
                <h2 className="text-2xl font-bold text-[#000080]">
                  Demographic Information
                </h2>
                <span className="bg-blue-50 text-[#000080] text-xs font-bold px-3 py-1 rounded-full border border-blue-100">
                    SECURE RECORD
                </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
              <div className="group">
                <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Name</label>
                <div className="text-lg font-bold text-gray-900 border-b border-gray-200 pb-1 group-hover:border-gray-300 transition-colors">
                    {userData.name}
                </div>
              </div>

              <div className="group">
                <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Aadhaar Number</label>
                <div className="text-lg font-bold text-gray-900 tracking-wider font-mono border-b border-gray-200 pb-1 group-hover:border-gray-300 transition-colors">
                  {userData.aadhaarNumber}
                </div>
              </div>

              <div className="group">
                <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Date of Birth</label>
                <div className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-1 group-hover:border-gray-300 transition-colors">
                    {userData.dob}
                </div>
              </div>

              <div className="group">
                <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Gender</label>
                <div className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-1 group-hover:border-gray-300 transition-colors">
                    {userData.gender}
                </div>
              </div>

               <div className="group">
                <label className="block text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Date of Issue</label>
                <div className="text-lg font-medium text-gray-800 border-b border-gray-200 pb-1 group-hover:border-gray-300 transition-colors">
                    {userData.issueDate}
                </div>
              </div>
              
              <div className="flex items-end pb-1">
                 <div className="flex items-center gap-2 text-green-700 bg-green-50 px-3 py-1.5 rounded-md w-full border border-green-100">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-bold text-sm uppercase tracking-wide">Active & Valid</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Large Card Holder */}
        <div className="space-y-6 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-[#000080]">
                        Aadhaar Card Document
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">Digital copy of the issued card</p>
                </div>
                <button className="flex items-center gap-2 text-sm text-white bg-[#000080] hover:bg-blue-900 px-4 py-2 rounded shadow transition-colors font-medium">
                    <Printer size={16} />
                    Print Summary
                </button>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-xl border-2 border-dashed border-slate-300 flex justify-center">
                <div className="w-full max-w-[1071px] shadow-lg bg-white rounded-lg overflow-hidden transition-transform hover:scale-[1.01] duration-300">
                    {/* 
                        Dimensions: 1071x682 
                        Wrapper for responsiveness 
                    */}
                    <div className="w-full relative" style={{ paddingBottom: `${(682 / 1071) * 100}%` }}>
                         <div className="absolute inset-0 bg-white">
                            {/* 
                               Logic: Tries to load /aadhaar_card.jpg from public folder. 
                               If it fails (onError), shows the placeholder.
                            */}
                            {!cardError ? (
                                <img 
                                    src="/aadhaar_card.jpg" 
                                    alt="Aadhaar Card Document"
                                    className="w-full h-full object-contain"
                                    onError={() => setCardError(true)}
                                />
                            ) : (
                                <ImageHolder 
                                    width={1071} 
                                    height={682} 
                                    label="AADHAAR CARD DOCUMENT"
                                    className="w-full h-full text-2xl md:text-3xl text-gray-400"
                                />
                            )}
                         </div>
                    </div>
                </div>
            </div>
             <p className="text-xs text-gray-400 text-center font-mono">
                Document Reference ID: UIDAI-V-{Math.floor(Math.random() * 10000000)}
            </p>
        </div>
      </div>
    </div>
  );
};