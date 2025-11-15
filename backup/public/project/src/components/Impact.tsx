import React from 'react';
import { IMPACT_STATS } from '../data/constants';
import { Trees as Tree, Bird, Clock, Users } from 'lucide-react';

const Impact: React.FC = () => {
  // Function to render the appropriate icon
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tree':
        return <Tree className="h-12 w-12 text-forest-600" />;
      case 'Birds':
        return <Bird className="h-12 w-12 text-forest-600" />;
      case 'Clock':
        return <Clock className="h-12 w-12 text-forest-600" />;
      case 'Users':
        return <Users className="h-12 w-12 text-forest-600" />;
      default:
        return <Tree className="h-12 w-12 text-forest-600" />;
    }
  };

  return (
    <section id="impact" className="py-20 bg-forest-800 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white">Our Impact</h2>
          <p className="text-xl text-forest-100 mb-12 max-w-3xl mx-auto">
            Measurable results from our conservation efforts across Maryland
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {IMPACT_STATS.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-forest-700 rounded-lg p-8 text-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                {renderIcon(stat.icon)}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="text-forest-100">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Conservation Success Stories</h3>
          <p className="text-lg text-forest-100 mb-8 max-w-3xl mx-auto">
            Behind these numbers are countless success stories, from revitalized watersheds to 
            rebounding wildlife populations. Every acre protected and every species saved 
            represents a victory for Maryland's natural heritage.
          </p>
          <a href="#" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-forest-800">
            Read Our Impact Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default Impact;