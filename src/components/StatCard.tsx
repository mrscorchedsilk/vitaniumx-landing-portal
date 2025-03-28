
import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  text: string;
  delay?: number;
}

const StatCard = ({ number, text, delay = 0 }: StatCardProps) => {
  return (
    <motion.div 
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <div className="stat-number">{number}</div>
      <div className="stat-text">{text}</div>
    </motion.div>
  );
};

export default StatCard;
