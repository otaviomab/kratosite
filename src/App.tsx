import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import AiFeatures from './components/AiFeatures';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problems />
      <AiFeatures />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;