import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAVIGATION, SITE_CONFIG } from '../data/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center gap-2 text-forest-900 font-bold text-xl md:text-2xl"
        >
          <span className="text-forest-600 text-3xl">
            <ChevronDown className="h-8 w-8" />
          </span>
          <span className={`transition-colors duration-300 ${isScrolled ? 'text-forest-900' : 'text-white'}`}>
            MKCA
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAVIGATION.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className={`nav-link ${
                isScrolled ? 'text-forest-900 hover:text-forest-600' : 'text-white hover:text-forest-100'
              }`}
            >
              {item.name}
            </a>
          ))}
          <a href="#donate" className="btn-primary">
            Donate
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-forest-900' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-forest-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-6 flex flex-col space-y-4 animate-fade-in">
          {NAVIGATION.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-forest-900 hover:text-forest-600 text-lg py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#donate" 
            className="btn-primary text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Donate
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;