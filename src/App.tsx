import React, { useState, useEffect } from 'react';
import { Menu, Home, Phone, Clock, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import DealsSection from './components/DealsSection';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <MenuSection />
        <DealsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;