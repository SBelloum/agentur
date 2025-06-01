import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  scrolled: boolean;
}

const Header = ({ scrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className={`font-display font-bold text-2xl transition-colors duration-300 ${
            scrolled ? 'text-primary-900' : 'text-primary-700'
          }`}>
            Vertriebs-Arbeit
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="nav-link">Leistungen</a>
          <a href="#collaboration" className="nav-link">Zusammenarbeit</a>
          <a href="#case-study" className="nav-link">Case Study</a>
          <a href="#contact" className="btn btn-primary">Kontakt</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${
        isMenuOpen ? 'max-h-screen py-4' : 'max-h-0 overflow-hidden'
      }`}>
        <div className="container flex flex-col space-y-4">
          <a 
            href="#services" 
            className="px-4 py-2 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Leistungen
          </a>
          <a 
            href="#collaboration" 
            className="px-4 py-2 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Zusammenarbeit
          </a>
          <a 
            href="#case-study" 
            className="px-4 py-2 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMenuOpen(false)}
          >
            Case Study
          </a>
          <a 
            href="#contact" 
            className="btn btn-primary mx-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontakt
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;