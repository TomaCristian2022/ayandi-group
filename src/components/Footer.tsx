import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-10 relative">
      
      <div className="absolute top-[-100px] left-0 w-full overflow-hidden leading-[0]">
                    <img className="h-[100px] w-[100%] object-cover" src="/assets/images/wave_black.svg" />
            </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-6">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Ayandi Group</h2>
            <p className="mt-2 text-gray-500 max-w-xs">
              Leading the way in innovation and collaboration across multiple industries.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#about" className="hover:text-primary transition">About Us</a>
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#partners" className="hover:text-primary transition">Our Partners</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-2xl text-gray-500">
            <a href="https://facebook.com" className="hover:text-primary transition"><FaFacebook /></a>
            <a href="https://twitter.com" className="hover:text-primary transition"><FaTwitter /></a>
            <a href="https://linkedin.com" className="hover:text-primary transition"><FaLinkedin /></a>
            <a href="https://instagram.com" className="hover:text-primary transition"><FaInstagram /></a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">© 2024 Ayandi Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
