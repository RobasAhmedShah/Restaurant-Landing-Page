import React from 'react';
import { Phone, Clock, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-500" />
                (123) 456-7890
              </p>
              <p className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-500" />
                Mon-Sun: 11:00 AM - 10:00 PM
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                123 Pizza Street, Food City
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-orange-500 transition-colors">Menu</a>
              </li>
              <li>
                <a href="#deals" className="hover:text-orange-500 transition-colors">Deals</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to get special offers and updates!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-full bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="px-6 py-2 bg-orange-500 text-white rounded-r-full hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>&copy; 2025 CALZONES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;