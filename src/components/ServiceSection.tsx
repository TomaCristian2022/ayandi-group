import React from 'react';

const services = [
  { id: 1, title: 'Consulting', description: 'We provide expert consulting services across multiple industries.' },
  { id: 2, title: 'Technology', description: 'Innovative tech solutions that drive efficiency and growth.' },
  { id: 3, title: 'Finance', description: 'Comprehensive financial services tailored to your business.' },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl hover:bg-opacity-90 animate-fadeInUp"
            >
              <h3 className="font-primary text-xl text-center mb-4 text-black">{service.title}</h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
