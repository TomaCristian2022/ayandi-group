import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const firms = [
  {
    id: 1,
    name: 'Zip Cafe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    logo: '/assets/images/zippngtransparent.png',
    website: 'www.zipcafe.ro'
  },
  {
    id: 2,
    name: 'Lera Tech',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    logo: '/assets/images/Logo Leratech (1).png',
    website: 'www.leratech.ro'
  },
  {
    id: 3,
    name: 'Ayandi Construct',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    logo: '/assets/images/Logo 2 Negru (1).png',
    website: 'www.ayandiconstruct.ro'
  },
  {
    id: 4,
    name: 'Miata Automobile',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    logo: '/assets/images/00.Miata Logo E-mail si semnatura Email.png',
    website: 'www.mataautomobile.ro'
  },
  {
    id: 5,
    name: 'Virtual Earth',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    logo: '/path/to/virtualearth-logo.png',
    website: 'www.virtualearth.ro'
  },
  {
    id: 6,
    name: 'Optitax',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    logo: '/assets/images/Icon.png',
    website: 'www.optitax.ro'
  },
  {
    id: 7,
    name: 'Oferma',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    logo: '/path/to/oferma-logo.png',
    website: 'www.oferma.ro'
  }
];

const FirmsSection: React.FC = () => {
  return (
<section className="bg-white pb-40 rounded-t-2xl">
  <div className="container mx-auto px-6">
    <h2 className="text-4xl font-bold text-center mb-12">Our Partner Firms</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {firms.map((firm) => (
        <div
          key={firm.id}
          className="
            group bg-white shadow-lg h-[300px] rounded-lg p-6 transition duration-500 
            hover:shadow-xl hover:bg-opacity-90 animate-fadeInUp 
            flex flex-col justify-between"
        >
          {/* Logo with Scaling on Card Hover */}
          <img
            src={firm.logo}
            alt={`${firm.name} Logo`}
            className="w-100 h-40 mx-auto mb-4 object-contain transform transition-transform duration-300 group-hover:scale-110"
          />

          {/* Firm Details */}
          <h3 className="text-xl font-semibold text-center mb-2">{firm.name}</h3>
          {/* <p className="text-gray-700 text-center line-clamp-3">{firm.description}</p> */}

          {/* Website Link (Hidden initially, shows on hover) */}
          <a 
            href={`https://${firm.website}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="
            opacity-0 group-hover:opacity-100 group-hover:animate-slideInLeft 
            transition-opacity duration-500 text-center mt-4 font-bold text-pink
            flex items-center justify-center
            "
          > 
            <span className='pr-5'>Visit Site</span> <FaArrowRight />
          </a>
        </div>
      ))}
    </div>
  </div>
</section>



  );
};

export default FirmsSection;
