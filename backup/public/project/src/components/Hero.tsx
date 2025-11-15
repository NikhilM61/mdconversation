import React from 'react';
import { SITE_CONFIG } from '../data/constants';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Maryland landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          {SITE_CONFIG.name}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium">
          {SITE_CONFIG.tagline}
        </p>
        <p className="text-lg max-w-2xl mx-auto mb-12 opacity-90">
          {SITE_CONFIG.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#programs" className="btn-primary flex items-center justify-center gap-2 group">
            Our Programs
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#donate" className="btn-secondary bg-white bg-opacity-10 border-white text-white hover:bg-white hover:text-forest-800">
            Support Our Mission
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="block text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;