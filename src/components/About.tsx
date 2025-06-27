import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white text-black overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ABOUT MARYLAND KEYSTONE
            <br />CONSERVATION
          </h2>
          <p className="text-emerald-600 text-xl font-semibold uppercase tracking-wider">
            CHAMPIONING ENVIRONMENTAL STEWARDSHIP WITH DEDICATION
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-center leading-relaxed">
            Maryland Keystone Conservation is fueled by a commitment to environmental advocacy,
            uniting passionate individuals who care deeply about our parks and natural resources. Our goal
            is to raise awareness and provide support in the wake of recent funding cuts, ensuring that
            these vital spaces remain accessible and vibrant for everyone. Through our initiatives, we strive
            to empower communities to engage in conservation efforts, fostering a culture of stewardship
            and respect for our natural heritage.
          </p>
        </div>
        
        
      </div>
    </section>
  );
};