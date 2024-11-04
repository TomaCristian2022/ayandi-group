import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true); // Change background and display logo when scrolled 50px down
      } else {
        setIsScrolled(false); // Reset background and logo visibility at the top
      }
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`z-50 fixed top-0 left-0 w-full py-5 p-4 transition-colors duration-300 ${
        isScrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Title (Hide on Scroll for Small Screens) */}
        <h1
          className={`text-white font-bold text-3xl transition-opacity duration-500 ${
            isScrolled ? 'opacity-0 sm:opacity-100' : 'opacity-100'
          }`}
        >
          Ayandi Group
        </h1>

        {/* Logo (Center on Scroll) */}
        <div
          className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ${
            isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <img width="100" height="150" src="/assets/images/logo-alb.png" alt="Logo Ayandi Group" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 text-lg">
          <a href="#" className="text-white text-xl hover:underline">Our Impact</a>
          <a href="#" className="text-white text-xl hover:underline">Our Brands</a>
          <a href="#" className="text-white text-xl hover:underline">Our Story</a>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none relative z-10">
            {menuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 text-xl text-white">
          <a href="#" className="hover:underline" onClick={toggleMenu}>Our Impact</a>
          <a href="#" className="hover:underline" onClick={toggleMenu}>Our Brands</a>
          <a href="#" className="hover:underline" onClick={toggleMenu}>Our Story</a>
        </div>
      )}
    </header>
  );
};

export default Header;
