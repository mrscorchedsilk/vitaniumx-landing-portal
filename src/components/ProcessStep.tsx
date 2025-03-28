
import React from 'react';
import { Check, CheckCircle } from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const ProcessStep = ({ number, title, description, delay = 0 }: ProcessStepProps) => {
  return (
    <div 
      className="flex items-start gap-4 animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 rounded-full bg-vitablue h-8 w-8 flex items-center justify-center text-white font-bold">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
