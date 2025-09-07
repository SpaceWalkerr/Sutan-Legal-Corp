import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <ContactSection />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;