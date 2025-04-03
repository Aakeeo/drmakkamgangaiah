import React from 'react';
import { PhoneCall, AtSign, Building2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Info */}
        <div className="space-y-8">
          {/* Address First */}
          <div className="flex items-start space-x-3">
            <div className="bg-white rounded-full p-2 shrink-0">
              <Building2 className="h-5 w-5 text-blue-600" strokeWidth={2} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-1">Our Location</h4>
              <span className="block text-gray-700 text-lg leading-relaxed">
                House of Hiranandani, Balaji complex 1, Kodigehalli Main Rd opp Tatanagar entrance, opp. Glen gate, Bhadrappa Layout, Koti Hosahalli, Bengaluru, Karnataka 560094
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-12 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-full p-2 shrink-0">
                <PhoneCall className="h-5 w-5 text-blue-600" strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                <span className="block text-gray-700 text-lg">097425 03814</span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-full p-2 shrink-0">
                <AtSign className="h-5 w-5 text-blue-600" strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <span className="block text-gray-700 text-lg">info@dentessencepro.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright - Bottom */}
        <div className="mt-12 pt-8 border-t border-blue-200/50">
          <p className="text-center text-gray-600">
            &copy; {new Date().getFullYear()} DentEssencePro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;