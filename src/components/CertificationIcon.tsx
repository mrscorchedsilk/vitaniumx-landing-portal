
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CertificationIconProps {
  name: string;
  className?: string;
  delay?: number;
}

const CertificationIcon = ({ name, className, delay = 0 }: CertificationIconProps) => {
  return (
    <motion.div 
      className={cn("inline-flex items-center justify-center p-3 glass rounded-full h-16 w-16 transition-all hover:scale-110", className)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
    >
      <div className="text-sm font-semibold text-gray-800">{name}</div>
    </motion.div>
  );
};

export default CertificationIcon;
