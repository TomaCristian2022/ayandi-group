import React from 'react';

const services = [
  { id: 1, img: '/assets/images/consulting.avif', title: 'Consulting', description: 'We provide expert consulting services across multiple industries.' },
  { id: 2, img: '/assets/images/technologie.jpg', title: 'Technology', description: 'Innovative tech solutions that drive efficiency and growth.' },
  { id: 3, img: '/assets/images/finance.jpeg', title: 'Finance', description: 'Comprehensive financial services tailored to your business.' },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6 align-center">
        <h2 className="text-5xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 h-[400px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="
              bg-white
              flex flex-col justify-center relative group bg-cover bg-center
               shadow-lg rounded-lg transform transition duration-500 hover:scale-105 
               hover:shadow-xl hover:border hover:border-white hover:rounded-lg"
              style={{
                backgroundImage: `url(${service.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay with opacity */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg transition-opacity duration-500"></div>

              {/* Title */}
              <h3 className="relative z-10 font-black text-4xl text-center mb-4 text-white group-hover:text-white transition-all duration-500">
                {service.title}
              </h3>

              {/* Description (hidden initially, revealed on hover) */}
              <div className="
              bottom-0 bg-white absolute z-10 text-center opacity-0 group-hover:opacity-100
               border-white rounded-r-lg transition-opacity duration-500 p-4
               w-9/12">
                  <p className="text-black text-2xl">
                    {service.description}
                  </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
