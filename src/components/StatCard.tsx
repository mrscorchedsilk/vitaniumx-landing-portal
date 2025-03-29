
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCardProps {
  number: string;
  text: string;
  delay?: number;
  className?: string;
}

const StatCard = ({ number, text, delay = 0, className }: StatCardProps) => {
  return (
    <motion.div 
      className={cn("stat-card", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="stat-number">{number}</div>
      <div className="stat-text">{text}</div>
    </motion.div>
  );
};

export default StatCard;
