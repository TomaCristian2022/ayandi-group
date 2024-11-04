import { useEffect, useState } from "react";
const images = [
    '/assets/images/a4 brochure mockup.webp',
    '/assets/images/Free_Billboard_Sign_Mockup_2.webp',
    '/assets/images/Free_Business_Card_Mockup_3.webp',
    '/assets/images/Free_Billboard_Sign_Mockup_22.webp',
    '/assets/images/Mockup Brosura 2.webp',
    '/assets/images/Mockup Brosura.webp',
    '/assets/images/Rollup Mockup.webp'
];

const Hero2: React.FC = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(()=> {
        const interval = setInterval(()=> {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
  
        return() => clearInterval(interval);

        },[]);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Images */}
            <div className="absolute inset-0 w-full h-full">
                {images.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100 animate-continuousScale' : 'opacity-0'
                }`}
              />
             
             
                ))}
            </div>

            {/* Overlay Text */}
            {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Professionalism & Innovation</h1>
                <p className="text-lg md:text-xl mb-8 max-w-xl">
                Ayandi Group delivers excellence and cutting-edge solutions across industries.
                </p>
                <button className="bg-primary text-black px-6 py-3 text-lg hover:bg-secondary transition">
                Learn More
                </button>
            </div> */}

            {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

            {/* Wave Divider */}
            <div className="absolute bottom-[-500px] left-0 w-full overflow-hidden leading-[0]">
           
            <svg className="overflow-hidden" width="200vw" height="1200px" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" d="M0,160 C720,60 720,260 1440,160 L1440,320 L0,320 Z"></path>
                </svg>


            </div>
            </section>
    )


}

export default Hero2;