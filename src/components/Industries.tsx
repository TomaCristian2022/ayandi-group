import React, { useEffect, useRef, useState } from 'react';

const industries = [
  {
    id: 1,
    name: "Food & Beverage",
    description: "Our group provides high-quality food and beverage services, focusing on unique experiences and exceptional products for customers in cafes and dining establishments.",
    representativeName: "Gourmet Café",
    image: "/assets/images/Food-Beverage-Trends.jpg"
  },
  {
    id: 2,
    name: "Technology",
    description: "Specializing in innovative technology solutions, our group supports digital transformation, virtual reality, and cutting-edge tech services across various industries.",
    representativeName: "Tech Innovations",
    image: "/assets/images/92d3db7a-f918-4e63-b4ec-03d47e6a5d3b_Artificial+intelligence+in+palm+of+mans+hand.avif"
  },
  {
    id: 3,
    name: "Construction",
    description: "Offering expert construction and real estate development, we bring quality and precision to each project, ensuring robust infrastructure and modern designs.",
    representativeName: "BuildPro Solutions",
    image: "/assets/images/construction.webp"
  },
  {
    id: 4,
    name: "Automotive",
    description: "Our group is dedicated to advancing the automotive industry with sales and services that focus on reliability, innovation, and customer satisfaction.",
    representativeName: "AutoMax Services",
    image: "/assets/images/dezmembrari.jpg"
  },
  {
    id: 5,
    name: "Finance",
    description: "We offer professional finance and tax consulting services, helping businesses and individuals achieve financial stability and compliance.",
    representativeName: "FinServe Consulting",
    image: "/assets/images/taxes.jpeg"
  },
  {
    id: 6,
    name: "Agriculture",
    description: "Supporting the agriculture industry, we provide products and services that enhance farming efficiency, productivity, and sustainability.",
    representativeName: "AgriSolutions",
    image: "/assets/images/oferma.jpeg"
  }
];

const Industries: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left
  const animationFrameId = useRef<number | null>(null);

  const autoScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    let scrollAmount = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    const scroll = () => {
      if (scrollDirection === 1 && scrollAmount >= maxScroll) {
        setScrollDirection(-1); // Reverse direction when reaching the end
      } else if (scrollDirection === -1 && scrollAmount <= 0) {
        setScrollDirection(1); // Change direction when reaching the start
      }

      scrollAmount += scrollDirection * 0.5; // Adjust scroll speed here
      container.scrollLeft = scrollAmount;
      animationFrameId.current = requestAnimationFrame(scroll);
    };

    animationFrameId.current = requestAnimationFrame(scroll);
  };

  // Start auto-scroll
  useEffect(() => {
    autoScroll();
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [scrollDirection]);

  // Pause on hover
  const handleMouseEnter = () => {
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
  };

  // Resume auto-scroll on mouse leave
  const handleMouseLeave = () => {
    autoScroll();
  };

  return (
    <section className="bg-secondary py-20 industries-section">
      <div className="mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">Industries We Serve</h2>

        {/* Auto-Scrolling Container */}
        <div
          className="relative flex items-center h-[400px] industries-container"
         
        >
          <div className="flex items-center overflow-x-scroll h-full space-x-6 industries-containers-section"
           ref={containerRef}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
           >
            {industries.map(industry => (
              <div 
                key={industry.id} 
                className="flex flex-col md:min-w-[800px] w-[800px] sm:flex-row items-center bg-white shadow-lg rounded-full 
                transition duration-500 hover:shadow-xl relative p-10"
              >
                {/* Left Side: Text */}
                <div className="sm:w-2/3">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-2 text-center">{industry.name}</h4>
                  <p className="text-gray-600 text-lg text-justify">{industry.description}</p>
                </div>
                
                {/* Right Side: Image */}
                <div className="mt-0 sm:mt-0 top-0 absolute md: right-0 h-full">
                  <img 
                    src={industry.image} 
                    alt={`${industry.name} Image`} 
                    className="object-cover h-full rounded-full sm:rounded-r-full sm:rounded-l-none" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
