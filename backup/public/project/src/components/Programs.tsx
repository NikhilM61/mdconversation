import React from 'react';
import { PROGRAMS } from '../data/constants';
import { ArrowRight } from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Conservation Programs</h2>
          <p className="section-subtitle">
            Discover the initiatives through which we protect Maryland's natural heritage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROGRAMS.map((program) => (
            <div 
              key={program.id} 
              className="program-card group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-forest-800">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>
                <a 
                  href={program.link} 
                  className="inline-flex items-center text-forest-600 font-medium hover:text-forest-800 transition-colors"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Our programs are designed to address Maryland's most pressing environmental challenges
            while engaging communities in meaningful conservation action.
          </p>
          <a href="#contact" className="btn-primary">
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;