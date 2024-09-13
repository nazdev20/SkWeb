import React from 'react';
import logo from "../../assets/Hero section/LOGO_SK-removebg-preview.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white mt-16 py-8 border-t border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Left Side - Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src={logo} 
              alt="Sangguniang Kabataan Logo" 
              className="h-20 w-20 object-contain ml-4" // Increased size and added margin-left
            />
          </div>

         
          <div className="w-full flex justify-center">
            <ul className="flex space-x-6 mb-4 md:mb-0">
              <li><a  className="text-gray-700 hover:text-black transition">About us</a></li>
              <li><a className="text-gray-700 hover:text-black transition">Contact Us</a></li>
              <li><a className="text-gray-700 hover:text-black transition">FAQs</a></li>
              <li><a  className="text-gray-700 hover:text-black transition">Support</a></li>
              <li><a  className="text-gray-700 hover:text-black transition">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="flex flex-col items-center text-sm">
          <p className="text-gray-500">&copy; 2024 Sangguniang Kabataan. All rights reserved.</p>
          <ul className="flex space-x-4 mt-2">
            <li><a href="/privacy" className="text-gray-700 hover:text-black transition">Privacy Policy</a></li>
            <li><a href="/terms" className="text-gray-700 hover:text-black transition">Terms of Service</a></li>
            <li><a href="/cookies" className="text-gray-700 hover:text-black transition">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
