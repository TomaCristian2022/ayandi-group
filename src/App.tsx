import React from 'react';
import Header from './components/Header';
// import Hero from './components/HeroSection';
import Services from './components/ServiceSection';
import Footer from './components/Footer';
import FirmsSection from './components/FirmsSection';
import Hero2 from './components/Hero';
import ContactUs from './components/ContactUs';
import Industries from './components/Industries';
import ScrollToTopButton from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    < div>
      <Header />
      <Hero2 />
      {/* <Hero /> */}

      <FirmsSection />
      <Industries />
      <Services />
      <ContactUs />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default App;
