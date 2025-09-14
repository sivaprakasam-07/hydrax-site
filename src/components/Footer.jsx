import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💧</span>
            <span className="font-bold text-lg">HydraX</span>
          </div>
          <p className="text-gray-400 max-w-xs">
            Revolutionizing hydration through smart technology. Stay perfectly hydrated with the world's most intelligent water bottle.
          </p>
          <div className="flex gap-4 mt-3">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <h3 className="font-semibold mb-2">Product</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Specifications</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Pre-Order</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Warranty</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press Kit</a></li>
              <li><a href="#" className="hover:text-white">Partners</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2025 HydraX. All rights reserved. <span className="mx-2">|</span>
        <a href="#" className="hover:text-white">Privacy Policy</a> <span className="mx-2">|</span>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
