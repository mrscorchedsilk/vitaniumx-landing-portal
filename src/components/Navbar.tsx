
import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <header className="py-2 md:py-4 px-3 md:px-5 bg-white/20 backdrop-blur-md fixed w-full top-0 z-50 glass">
      <div className="max-container flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <Logo minimal={true} />
        </div>
        
        {/* Buttons on the right */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <Button 
            className="bg-[#3AB7FA] hover:bg-[#2a9de6] text-white shadow-[0_0_15px_rgba(58,183,250,0.5)] w-full md:w-auto"
            size="sm"
          >
            <Phone className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">+91 98765 43210</span>
            <span className="md:hidden">Call</span>
          </Button>
          
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white shadow-[0_0_15px_rgba(37,211,102,0.5)] w-full md:w-auto"
            size="sm"
          >
            <Calendar className="mr-2 h-4 w-4" />
            <span>Schedule a call</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
