import React from 'react';
import { TEAM_MEMBERS } from '../data/constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">
            Meet the dedicated professionals leading our conservation efforts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div 
              key={member.id} 
              className="team-card group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-forest-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-1 text-forest-800">{member.name}</h3>
              <p className="text-forest-600 font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center text-forest-800">Join Our Team</h3>
          <p className="text-gray-600 mb-6 text-center">
            We're always looking for passionate individuals to join our mission. Whether as staff, 
            board members, or volunteers, there's a place for you in our conservation community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary">
              View Careers
            </a>
            <a href="#" className="btn-secondary">
              Volunteer Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;