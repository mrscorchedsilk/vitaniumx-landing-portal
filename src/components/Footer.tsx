
import React from 'react';
import FooterLogo from '@/components/FooterLogo';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <FooterLogo />
            <p className="mt-4 text-gray-400">
              Progressive Processors Private Limited
            </p>
            <p className="mt-2 text-gray-400">
              Leading the global fight against micronutrient deficiencies
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-vitanium-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Corporate Office:</p>
                  <p className="text-neutral-300">Innov8 Coworking Space, 3rd Floor, Orchid Centre, Gurugram, Haryana 122022, India</p>
                </div>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-vitanium-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">Manufacturing Unit 1:</p>
                  <p className="text-neutral-300">F-80, Ramghat Rd, Sector 1, Talanagri, Talashpur, Aligarh, Uttar Pradesh 202001, India</p>
                </div>
              </li>
              
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-vitanium-400 mr-3 flex-shrink-0" />
                <a href="tel:+919429694121" className="text-neutral-300 hover:text-white transition-colors">+91 94296 94121</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-vitanium-400 mr-3 flex-shrink-0" />
                <a href="mailto:hello@vitaniumx.com" className="text-neutral-300 hover:text-white transition-colors">hello@vitaniumx.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sales Inquiries</h3>
            <p className="text-sm text-gray-400 mb-4">
              For sales queries and technical details, please contact:
            </p>
            <div className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-vitanium-400 mr-3 flex-shrink-0" />
                <a href="tel:+919429694121" className="text-neutral-300 hover:text-white transition-colors">+91 94296 94121</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-vitanium-400 mr-3 flex-shrink-0" />
                <a href="mailto:hello@vitaniumx.com" className="text-neutral-300 hover:text-white transition-colors">hello@vitaniumx.com</a>
              </li>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Progressive Processors Private Limited (VitaniumX). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
