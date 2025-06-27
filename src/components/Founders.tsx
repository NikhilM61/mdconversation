import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import nikhilFounder from '../nikhilFounder.jpg';
import jeffFounder from '../jeffFounder.jpg';

export const Founders = () => {
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
    
    const element = document.getElementById('founders');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="founders" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`mb-16 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR FOUNDERS</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Meet the visionary high school seniors behind Maryland Keystone Conservation
          </p>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={founder.name}
              className={`bg-black/30 backdrop-blur-sm rounded-lg p-8 transform transition-all duration-1000 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 ring-4 ring-emerald-600/20">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-emerald-400 font-semibold mb-4">{founder.role}</p>
                <p className="text-gray-300 mb-6">{founder.bio}</p>
                <div className="flex space-x-4">
                  <a 
                    href={`mailto:${founder.email}`}
                    className="w-10 h-10 rounded-full bg-emerald-600/20 hover:bg-emerald-600 transition-colors flex items-center justify-center"
                    aria-label={`Email ${founder.name}`}
                  >
                    <Mail size={20} />
                  </a>
                  {founder.linkedin && <a 
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-emerald-600/20 hover:bg-emerald-600 transition-colors flex items-center justify-center"
                    aria-label={`${founder.name}'s LinkedIn`}
                  >
                    <Linkedin size={20} />
                  </a>}
                  {founder.github && <a 
                    href={founder.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-emerald-600/20 hover:bg-emerald-600 transition-colors flex items-center justify-center"
                    aria-label={`${founder.name}'s GitHub`}
                  >
                    <Github size={20} />
                  </a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const founders = [
  {
    name: "Nikhil Maddirala",
    role: "Co-Founder & Executive Director",
    bio: "A passionate environmentalist and tech enthusiast, Nikhil combines his love for nature with innovative solutions to address Maryland's conservation challenges.",
    image: nikhilFounder,
    email: "maddiralanikhilr@gmail.com",
    linkedin: "https://www.linkedin.com/in/nikhil-maddirala-345196240/",
    github: ""
  },
  {
    name: "Jefferson Feng",
    role: "Co-Founder & Technical Director",
    bio: "Jefferson brings his technical expertise and environmental passion together to develop sustainable solutions for Maryland's conservation efforts.",
    image: jeffFounder,
    email: "jfeng3855@gmail.com",
    linkedin: "",
    github: ""
  }
];
