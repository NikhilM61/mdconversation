import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">About Our Alliance</h2>
          <p className="section-subtitle">
            United in our commitment to protect Maryland's natural heritage
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-forest-800">Our Mission</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              The Maryland Keystone Conservation Alliance is dedicated to preserving the state's natural resources, 
              protecting endangered species, and promoting environmental stewardship. Through collaboration with local 
              communities, government agencies, and other organizations, we work to ensure that Maryland's rich 
              biodiversity and unique ecosystems thrive for generations to come.
            </p>
            <h3 className="text-2xl font-bold mb-4 text-forest-800">Our Approach</h3>
            <ul className="mb-6 text-gray-700 leading-relaxed space-y-2">
              <li className="flex items-start">
                <span className="text-forest-600 mr-2">•</span>
                <span>Evidence-based conservation strategies tailored to Maryland's unique ecosystems</span>
              </li>
              <li className="flex items-start">
                <span className="text-forest-600 mr-2">•</span>
                <span>Collaborative partnerships with communities, scientists, and policymakers</span>
              </li>
              <li className="flex items-start">
                <span className="text-forest-600 mr-2">•</span>
                <span>Focus on keystone species that have disproportionate effects on their environments</span>
              </li>
              <li className="flex items-start">
                <span className="text-forest-600 mr-2">•</span>
                <span>Educational initiatives to inspire the next generation of conservation leaders</span>
              </li>
            </ul>
            <a href="#programs" className="btn-primary">Learn About Our Programs</a>
          </div>
          <div className="order-1 md:order-2 relative">
            <img 
              src="https://images.pexels.com/photos/5677011/pexels-photo-5677011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Conservation team in the field" 
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-forest-600 text-white p-6 rounded-lg shadow-md hidden md:block">
              <p className="text-lg font-bold">Founded in 2010</p>
              <p>15 years of conservation impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;