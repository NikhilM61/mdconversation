import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative bg-black min-h-screen pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2397652/pexels-photo-2397652.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10 h-[calc(100vh-80px)] flex flex-col">
        <div className="flex flex-col items-center h-full">
          <div className="text-center mb-20 pt-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              WELCOME TO MARYLAND<br />
              KEYSTONE<br />
              CONSERVATION
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              On June 19th, we transitioned to our own private domain to better serve our community. We welcome any feedback on the new site.
            </p>
            <div className="mt-8">
              <Link 
                to="/volunteer" 
                className="inline-block px-8 py-3 bg-emerald-600 text-white rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:shadow-lg"
              >
                Volunteer Opportunities
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto mt-12">
            <div className="w-full md:w-1/2">
              <img 
                src="/Gambrill1.jpg" 
                alt="Gambrill State Park cleanup" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            
            <div className="w-full md:w-1/2 text-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                PRESERVING NATURE FOR<br />
                FUTURE GENERATIONS
              </h2>
              <p className="text-base md:text-lg">
                From local parks to expansive state and national reserves, we are dedicated to supporting the preservation and enhancement of our natural landscapes, ensuring they thrive for all to enjoy.
              </p>
              <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center mt-4 text-emerald-400 hover:text-emerald-300 transition-colors">
                About <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated ribbon */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden h-16">
          <div className="w-[200%] h-16 bg-emerald-600 rotate-[-2deg] absolute -left-4 -translate-y-1/2 flex items-center whitespace-nowrap animate-marquee">
            <span className="mx-4 text-lg font-semibold">JOIN US IN PROTECTING OUR PARKS</span>
            <span className="mx-4 text-lg font-semibold">JOIN US IN PROTECTING OUR PARKS</span>
            <span className="mx-4 text-lg font-semibold">JOIN US IN PROTECTING OUR PARKS</span>
            <span className="mx-4 text-lg font-semibold">JOIN US IN PROTECTING OUR PARKS</span>
            <span className="mx-4 text-lg font-semibold">JOIN US IN PROTECTING OUR PARKS</span>
            <span className="mx-4 text-lg font-semibold">JOIN US IN PROTECTING OUR PARKS</span>
            <span className="mx-4 text-lg font-semibold">JOIN US IN PROTECTING OUR PARKS</span>
            <span className="mx-4 text-lg font-semibold">JOIN US IN PROTECTING OUR PARKS</span>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <ArrowDown size={32} className="mx-auto text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};