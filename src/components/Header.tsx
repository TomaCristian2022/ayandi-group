
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  // State to track background color change
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Change background when scrolled 50px down
      } else {
        setIsScrolled(false); // Reset background at top
      }
    };

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`z-50 fixed top-0 left-0 w-full py-10 p-4 transition-colors duration-300 ${
        isScrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-4xl">Ayandi Group</h1>
        <nav className="space-x-4 text-2xl">
          <a href="#" className="text-white hover:underline">Our Impact</a>
          <a href="#" className="text-white hover:underline">Our Brands</a>
          <a href="#" className="text-white hover:underline">Our Story</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
