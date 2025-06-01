import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Collaboration from './components/sections/Collaboration';
import CaseStudy from './components/sections/CaseStudy';
import Contact from './components/sections/Contact';
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
    <div className="min-h-screen bg-white text-gray-800">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Services />
        <Collaboration />
        <CaseStudy />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;