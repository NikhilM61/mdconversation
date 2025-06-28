import React, { useState, useEffect } from 'react';

export const Sponsors = () => {
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
    
    const element = document.getElementById('sponsors');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="sponsors" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-4">OUR SPONSORS</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>
        
        <div className="flex justify-center items-center space-x-12 md:space-x-24">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <a 
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                    {sponsor.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{sponsor.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const sponsors = [
  {
    name: "Fzata",
    description: "Biotech Innovation",
    website: "https://fzata.com"
  },
  {
    name: "Betatree Corp",
    description: "IT Consultancy",
    website: "https://betatreecorp.com/"
  }
];
