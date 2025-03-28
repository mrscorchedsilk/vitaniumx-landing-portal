
import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-transparent"></div>
      {children}
    </header>
  );
};

export default PageHeader;
