import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const firms = [
  {
    id: 1,
    name: 'Zip Cafe - Zip Kids Corner',
    description: 'Mediul oportun pentru a savura o băutură și a lua masa, în timp ce juniorul tău se distrează în spațiul de joacă dedicat.',
    logo: '/assets/images/zippngtransparent.png',
    website: 'www.zipcafe.ro'
  },
  {
    id: 2,
    name: 'Miata Automobile',
    description: 'Complete Automotive Solutions',
    logo: '/assets/images/00.Miata Logo E-mail si semnatura Email.png',
    website: 'www.mataautomobile.ro'
  },
  {
    id: 3,
    name: 'Leratech Innovations',
    description: 'Inovatie în Dezvoltarea Software Aplicații Mobile pentru Android și iOS Soluții web fara restrictii',
    logo: '/assets/images/Logo Leratech (1).png',
    website: 'www.leratech.ro'
  },
  {
    id: 4,
    name: 'Ro3d VR Studio',
    description: 'Exploreaza in 3D jucandu-te in realitate!',
    logo: '#',
    website: '#',
  },
  {
    id: 5,
    name: 'Ayandi Construct',
    description: 'Concretizam Idei și vise, Investind competente în fiecare proiect.',
    logo: '/assets/images/Logo 2 Negru (1).png',
    website: 'www.ayandiconstruct.ro'
  },
  {
    id: 6,
    name: 'Optitax',
    description: 'Solutii Fiscale, Aventuri Globale',
    logo: '#',
    website: 'www.optitax.ro'
  },
  {
    id: 7,
    name: 'DezHub',
    description: 'Alatura-te dezmembrarilor sub o singura figura! Se aude ca iti vor creste vanzarile',
    logo: '#',
    website: 'www.dezhub.ro'
  },
  {
    id: 8,
    name: 'Oferma',
    description: 'Incearca produse sănătoase oferite de producătorii locali, aproape de casa ta',
    logo: '/path/to/oferma-logo.png',
    website: 'www.oferma.ro'
  }
];

const FirmsSection: React.FC = () => {
  return (
<section className="bg-white pb-40 rounded-t-2xl">
  <div className="container mx-auto px-6">
    <h2 className="text-5xl font-bold text-center mb-12">Our Partner Firms</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {firms.map((firm) => (
            <div
              key={firm.id}
              className="
                group bg-white shadow-lg rounded-lg p-6 transition duration-500 
                hover:shadow-xl hover:bg-opacity-90 animate-fadeInUp h-[400px]
                flex flex-col justify-center"
            >
              {/* Logo with Scaling on Card Hover */}
              <img
                src={firm.logo}
                alt={`${firm.name} Logo`}
                className="w-100 h-[160px] mx-auto mb-4 object-contain transform transition-transform duration-300 group-hover:scale-110"
              />

              {/* Firm Details */}
              <div className='relative flex align-center justify-center h-full'>
              <h3 className="text-2xl font-semibold text-center mb-2 group-hover:opacity-0">{firm.name}</h3>
              <p className="
              text-gray-700 flex align-center justify-center text-center h-full text-xl
              top-0 absolute line-clamp-3 opacity-0 group-hover:opacity-100
              ">{firm.description}</p>
              </div>
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
