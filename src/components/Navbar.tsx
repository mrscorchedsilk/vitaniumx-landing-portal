
import React from 'react';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import BookingCalendar from '@/components/BookingCalendar';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="py-2 md:py-4 px-3 md:px-5 bg-white/20 backdrop-blur-md fixed w-full top-0 z-50 glass">
      <div className="max-container flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <Logo minimal={true} />
        </div>
        
        {/* Buttons on the right */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          {isMobile ? (
            <a 
              href="tel:+919876543210" 
              className="flex items-center justify-center w-full md:w-auto bg-[#59B2F4] hover:bg-[#3AA1F0] text-white font-medium py-2 px-4 rounded-lg shadow-md"
            >
              <Phone className="mr-2 h-4 w-4" />
              Call
            </a>
          ) : (
            <a 
              href="https://api.whatsapp.com/send?phone=919876543210" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3AB7FA] hover:bg-[#2a9de6] text-white shadow-[0_0_15px_rgba(58,183,250,0.5)] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-3"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">+91 98765 43210</span>
              <span className="md:hidden">Call</span>
            </a>
          )}
          
          <BookingCalendar />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
