
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      // Close the mobile menu if it's open
      setIsOpen(false);
    }
  };

  const serviceItems = [
    { title: 'Staple Food Fortification', id: 'staplefoodfortification' },
    { title: 'Public Health Nutrition Scheme Fortification', id: 'governmentschemes' },
    { title: 'Nutraceutical Applications', id: 'nutraceutical' },
    { title: 'Customized Formulations', id: 'customformulations' },
    { title: 'Animal Nutrition', id: 'animalnutrition' },
    { title: 'FMCG Products', id: 'fmcgproducts' },
  ];
  
  const scrollToCalendarSection = () => {
    scrollToSection('calendar');
  };
  
  return (
    <header className="py-2 md:py-4 px-3 md:px-5 bg-white/20 backdrop-blur-md fixed w-full top-0 z-50 glass">
      <div className="max-container flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <Link to="/micronutrient-lp/#" onClick={() => scrollToSection('hero')}>
            <Logo minimal={true} />
          </Link>
        </div>
        
        {/* Desktop Navigation - Center */}
        {!isMobile && (
          <div className="flex-grow flex justify-center">
            <NavigationMenu>
              <NavigationMenuList className="bg-transparent">
                {/* Home */}
                <NavigationMenuItem>
                  <Link to="/micronutrient-lp/#" onClick={() => scrollToSection('hero')}>
                    <div className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/20`}>Home</div>
                  </Link>
                </NavigationMenuItem>
                
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/20">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4 glass">
                      {serviceItems.map((item) => (
                        <Link 
                          key={item.id} 
                          to={`/#${item.id}`} 
                          onClick={() => scrollToSection('products')}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/20 hover:text-accent-foreground focus:bg-white/20 focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* About Us */}
                <NavigationMenuItem>
                  <Link to="/#aboutus" onClick={() => scrollToSection('whychooseus')}>
                    <div className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/20`}>About Us</div>
                  </Link>
                </NavigationMenuItem>
                
                {/* Contact Us */}
                <NavigationMenuItem>
                  <Link to="/#contactus" onClick={() => scrollToSection('calendar')}>
                    <div className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-white/20`}>Contact Us</div>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
        
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
              href="https://api.whatsapp.com/send?phone=919429694121" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3AB7FA] hover:bg-[#2a9de6] text-white shadow-[0_0_15px_rgba(58,183,250,0.5)] inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-9 px-3"
            >
              <Phone className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">+91 9429694121</span>
              <span className="md:hidden">Call</span>
            </a>
          )}
          
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white shadow-[0_0_15px_rgba(37,211,102,0.5)] w-full md:w-auto"
            size="sm"
            onClick={scrollToCalendarSection}
          >
            <Calendar className="mr-2 h-4 w-4" />
            <span>Schedule a call</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu Component - removed from here */}
    </header>
  );
};

export default Navbar;
