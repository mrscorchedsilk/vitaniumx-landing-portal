
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
  const [open, setOpen] = React.useState(false);

  const handleNavigation = (id: string) => {
    onSectionScroll(id);
    setOpen(false); // Close menu after clicking
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          className="fixed bottom-5 right-5 z-50 rounded-full w-14 h-14 p-0 flex items-center justify-center bg-white hover:bg-gray-100 shadow-lg glow-vitablue"
          size="icon"
        >
          <Menu className="h-6 w-6 text-green-500" />
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="pt-5 h-[80vh] rounded-t-3xl bg-white/95 backdrop-blur-xl border-t border-white/20 shadow-2xl"
      >
        <div className="flex flex-col space-y-2 p-0">
          <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Menu</h2>
          
          <Link 
            to="/micronutrient-lp/#home" 
            className="text-lg font-medium py-4 px-4 rounded-lg transition-all duration-200 hover:bg-blue-50 flex items-center"
            onClick={() => handleNavigation('home')}
          >
            <span className="text-blue-600 font-medium">Home</span>
          </Link>
          
          <div className="py-2 px-1">
            <h3 className="text-lg font-medium mb-2 px-3 text-gray-700">Services</h3>
            <div className="pl-2 flex flex-col">
              {serviceItems.map((item) => (
                <Link 
                  key={item.id} 
                  to={`/micronutrient-lp/#${item.id}`} 
                  className="text-base py-3 px-4 rounded-lg transition-all duration-200 hover:bg-blue-50"
                  onClick={() => handleNavigation('products')}
                >
                  <span className="text-gray-600">{item.title}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            to="/micronutrient-lp/#aboutus" 
            className="text-lg font-medium py-4 px-4 rounded-lg transition-all duration-200 hover:bg-blue-50 flex items-center"
            onClick={() => handleNavigation('aboutus')}
          >
            <span className="text-blue-600 font-medium">About Us</span>
          </Link>
          
          <Link 
            to="/micronutrient-lp/#contactus" 
            className="text-lg font-medium py-4 px-4 rounded-lg transition-all duration-200 hover:bg-blue-50 flex items-center"
            onClick={() => handleNavigation('contactus')}
          >
            <span className="text-blue-600 font-medium">Contact Us</span>
          </Link>
          
          <div className="mt-6 flex justify-center">
            <Button
              className="bg-green-500 hover:bg-green-600 text-white py-6 px-8 rounded-xl font-medium text-lg shadow-lg"
              onClick={() => handleNavigation('contactus')}
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuButton;
