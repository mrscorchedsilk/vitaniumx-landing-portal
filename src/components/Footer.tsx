
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
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-vitablue-light" />
                <span className="text-sm">
                  F-80, Ramghat Rd, Sector 1, Talanagri, Aligarh, Uttar Pradesh 202001, India
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-vitablue-light" />
                <a href="mailto:hello@vitaniumx.com" className="text-sm hover:text-vitablue-light">
                  hello@vitaniumx.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-vitablue-light" />
                <a href="tel:+919429694121" className="text-sm hover:text-vitablue-light">
                  +91 9429694121
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sales Inquiries</h3>
            <p className="text-sm text-gray-400 mb-4">
              For sales queries and technical details, please contact:
            </p>
            <div className="space-y-2">
              <a href="mailto:farhan.anis@vitaniumx.com" className="text-sm block hover:text-vitablue-light">
                farhan.anis@vitaniumx.com
              </a>
              <a href="mailto:vageesh.shukla@vitaniumx.com" className="text-sm block hover:text-vitablue-light">
                vageesh.shukla@vitaniumx.com
              </a>
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
