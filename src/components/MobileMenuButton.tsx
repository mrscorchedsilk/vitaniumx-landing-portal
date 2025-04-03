
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from 'react-router-dom';

interface MobileMenuButtonProps {
  serviceItems: {
    title: string;
    id: string;
  }[];
  onSectionScroll: (id: string) => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ serviceItems, onSectionScroll }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          className="fixed bottom-5 right-5 z-50 rounded-full w-14 h-14 p-0 flex items-center justify-center bg-white hover:bg-gray-100 shadow-lg glow-vitablue"
          size="icon"
        >
          <Menu className="h-6 w-6 text-green-500" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="pt-12 h-[70vh] rounded-t-3xl glass  ">
        <div className="flex flex-col space-y-4 p-4">
          <Link 
            to="/micronutrient-lp/#" 
            className="text-lg font-medium py-3 border-b border-white/20"
            onClick={() => {
              onSectionScroll('hero');
            }}
          >
            Home
          </Link>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Services</h3>
            <div className="pl-4 flex flex-col space-y-3">
              {serviceItems.map((item) => (
                <Link 
                  key={item.id} 
                  to={`/#${item.id}`} 
                  className="text-base"
                  onClick={() => onSectionScroll('products')}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            to="/#aboutus" 
            className="text-lg font-medium py-3 border-b border-white/20"
            onClick={() => onSectionScroll('whychooseus')}
          >
            About Us
          </Link>
          
          <Link 
            to="/#contactus" 
            className="text-lg font-medium py-3 border-b border-white/20"
            onClick={() => onSectionScroll('calendar')}
          >
            Contact Us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuButton;
