import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ImageHolderProps {
  width: number;
  height: number;
  label?: string;
  className?: string;
}

export const ImageHolder: React.FC<ImageHolderProps> = ({ width, height, label, className = "" }) => {
  return (
    <div 
      className={`relative flex flex-col items-center justify-center overflow-hidden bg-gray-200 text-gray-500 ${className}`}
      style={{ 
        width: '100%', 
        maxWidth: `${width}px`,
        aspectRatio: `${width}/${height}` 
      }}
    >
      <div className="absolute inset-0 bg-gray-100 opacity-50 pattern-grid-lg"></div>
      
      <div className="z-10 flex flex-col items-center gap-3 p-4 text-center">
        <ImageIcon className="w-12 h-12 opacity-50" strokeWidth={1.5} />
        
        {label && (
          <span className="font-bold tracking-widest opacity-70">
            {label}
          </span>
        )}
        
        <div className="px-3 py-1 bg-gray-800 bg-opacity-10 rounded-full text-xs font-mono font-medium">
          {width} × {height}
        </div>
      </div>
      
      {/* Cross lines for placeholder effect */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  );
};