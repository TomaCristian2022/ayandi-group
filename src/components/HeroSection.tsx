import React from 'react';
import OfficeVideo from '../assets/office.mp4'; 

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] w-screen flex justify-center items-center text-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={OfficeVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      {/* <div className="relative z-10 p-4 rounded">
        <h1 className="font-primary text-4xl md:text-6xl mb-6 text-white">Professionalism & Innovation</h1>
        <p className="text-lg md:text-xl mb-10 text-gray-200">Ayandi Group delivers excellence and cutting-edge solutions</p>
        <button className="bg-primary text-black px-6 py-3 text-lg hover:bg-secondary">
          Learn More
        </button>
      </div> */}
    </section>
  );
};

export default Hero;
