import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-white text-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto relative">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">WHAT PEOPLE SAY</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto"></div>
          </div>
          
          <div className="relative">
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`w-full flex-shrink-0 transition-all duration-700 transform ${
                    index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full absolute'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {/* Quote marks */}
                    <div className="text-8xl text-emerald-200 font-serif leading-none mb-6">"</div>
                    
                    <div className="text-center max-w-3xl mx-auto mb-8">
                      <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-center mt-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 bg-emerald-100 flex items-center justify-center">
                        <span className="text-2xl font-bold text-emerald-600">{testimonial.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-10 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-emerald-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Robert Phillman",
    title: "Community Volunteer",
    quote: "GETTING INVOLVED WITH MARYLAND KEYSTONE CONSERVATION WAS A TRANSFORMATIVE EXPERIENCE. THEIR INITIATIVES CONNECTED ME WITH LIKE-MINDED INDIVIDUALS WHO ARE COMMITTED TO MAKING A DIFFERENCE."
  },
  {
    name: "Sarah Johnson",
    title: "Park Ranger",
    quote: "THE DEDICATION OF MARYLAND KEYSTONE CONSERVATION TO PRESERVING OUR NATURAL HABITATS IS TRULY INSPIRING. THEIR WORK HAS MADE A MEASURABLE IMPACT ON OUR STATE PARKS."
  },
  {
    name: "Michael Chen",
    title: "Environmental Educator",
    quote: "THANKS TO MARYLAND KEYSTONE'S EDUCATIONAL PROGRAMS, WE'VE BEEN ABLE TO REACH THOUSANDS OF STUDENTS AND INSPIRE THE NEXT GENERATION OF ENVIRONMENTAL STEWARDS."
  }
];