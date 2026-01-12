import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Your Market
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Your one-stop shop for amazing deals on products from around the world.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-orange-500 transition-colors">Help Center</Link></li>
              <li><Link to="#" className="hover:text-orange-500 transition-colors">Disputes & Reports</Link></li>
              <li><Link to="#" className="hover:text-orange-500 transition-colors">Track Order</Link></li>
              <li><Link to="#" className="hover:text-orange-500 transition-colors">Returns & Refunds</Link></li>
            </ul>
          </div>

          {/* Shopping */}
          <div>
            <h4 className="font-semibold mb-4">Shopping</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-orange-500 transition-colors">Flash Deals</Link></li>
              <li><Link to="#" className="hover:text-orange-500 transition-colors">Categories</Link></li>
              <li><Link to="#" className="hover:text-orange-500 transition-colors">Coupons</Link></li>
              <li><Link to="#" className="hover:text-orange-500 transition-colors">Super Deals</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="#" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-orange-500 transition-colors">Press Center</Link></li>
              <li><Link to="#" className="hover:text-orange-500 transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-600">
          <p>© 2025 Your Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
