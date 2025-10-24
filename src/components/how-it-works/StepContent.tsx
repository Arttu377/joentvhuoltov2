
import React from 'react';

export interface StepContentProps {
  stepNumber: number;
  title: string;
  description: string;
  highlightText: string;
  highlightDetails: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const StepContent: React.FC<StepContentProps> = ({
  stepNumber,
  title,
  description,
  highlightText,
  highlightDetails,
  icon,
  isActive,
  onClick,
}) => {
  return (
    <div 
      className={`relative px-4 py-3 cursor-pointer transition-all duration-300 w-full ${
        isActive 
          ? 'bg-white border-l-4 border-convrt-purple rounded-r-lg' 
          : 'bg-gray-50/60 border-l-4 border-gray-200 rounded-r-lg hover:bg-gray-50/80'
      }`}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div 
            className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm ${
              isActive 
                ? 'bg-convrt-purple text-white' 
                : 'bg-gray-200 text-convrt-dark-blue'
            }`}
          >
            {stepNumber}
          </div>
        </div>
        
        <div className="flex-1">
          <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-convrt-purple/10 text-convrt-purple mb-1">
            {icon}
          </div>
          
          <h3 className="text-base font-bold text-convrt-dark-blue mb-1">
            {title}
          </h3>
          
          <p className="text-sm text-convrt-dark-blue/80 mb-2 line-clamp-2">
            {description}
          </p>
          
          {isActive && (
            <div className="bg-white rounded-md p-2 text-xs text-convrt-dark-blue/90 border border-gray-100">
              <span className="font-medium text-convrt-dark-blue">{highlightText}</span> {highlightDetails}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepContent;
