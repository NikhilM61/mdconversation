import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-emerald-500 text-2xl">★</span>
            <span>Maryland Keystone</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/volunteer" className="text-white hover:text-emerald-400 transition-colors">Volunteer Opportunities</Link>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-emerald-400 transition-colors">About</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-emerald-400 transition-colors">Reviews</button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-emerald-400 transition-colors">Contacts</button>
        </div>

        {/* Mobile Nav Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full py-4 px-4 flex flex-col space-y-4 border-t border-gray-800">
          <Link to="/volunteer" className="text-white hover:text-emerald-400 transition-colors py-2" onClick={() => setIsOpen(false)}>Volunteer Opportunities</Link>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-emerald-400 transition-colors py-2 text-left">About</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-white hover:text-emerald-400 transition-colors py-2 text-left">Reviews</button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-emerald-400 transition-colors py-2 text-left">Contacts</button>
        </div>
      )}
    </nav>
  );
};