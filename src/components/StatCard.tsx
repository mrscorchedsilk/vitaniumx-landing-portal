
import React from 'react';

interface StatCardProps {
  number: string;
  text: string;
  delay?: number;
}

const StatCard = ({ number, text, delay = 0 }: StatCardProps) => {
  return (
    <div 
      className="stat-card animate-fade-in" 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="stat-number">{number}</div>
      <div className="stat-text">{text}</div>
    </div>
  );
};

export default StatCard;
