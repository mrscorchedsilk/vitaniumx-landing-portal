
import React from 'react';
import { cn } from '@/lib/utils';

interface CertificationIconProps {
  name: string;
  className?: string;
}

const CertificationIcon = ({ name, className }: CertificationIconProps) => {
  return (
    <div className={cn("inline-flex items-center justify-center p-3 glass rounded-full h-16 w-16 transition-all hover:scale-110", className)}>
      <div className="text-sm font-semibold text-gray-800">{name}</div>
    </div>
  );
};

export default CertificationIcon;
