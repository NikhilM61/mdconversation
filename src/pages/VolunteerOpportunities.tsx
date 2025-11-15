import React from "react";
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';

const VolunteerOpportunities = () => {
  const volunteerOpportunities = [
    {
      title: 'Stormwater Management Restoration Project',
      date: 'May 2025',
      location: 'First Presbyterian Church of Howard County',
      participants: 'Volunteering closed',
      description: 'Restored and enhanced rock beds and planting areas to improve stormwater flow and reduce erosion; the project used a $4,000 budget for materials and labor to protect the congregation’s landscape and nearby drainage.',
      image: '/projectImages/stormwater-first-presbyterian-howard-county/drive-download-20251115T031446Z-1-001/IMG_4119.jpg'
    },
    {
      title: 'Marriotts Ridge High School Rain Garden (MWEE)',
      date: 'July–August 2025',
      location: 'Marriotts Ridge High School',
      participants: 'Volunteering closed',
      description: 'Installed a student-centered rain garden through an MWEE grant to provide hands-on watershed education; the awarded $5,000 covered materials and learning resources to create an on-site demonstration garden.',
      image: '/projectImages/marriotts-ridge-rain-garden-mwee-grant/Screenshot 2025-11-14 at 10.23.21 PM.png'
    },
    {
      title: 'Howard County Community Garden Expansion',
      date: 'August 2024',
      location: 'Howard County Community Garden (Alpha Ridge area)',
      participants: 'Volunteering closed',
      description: 'Supported community gardening efforts with an approximate $1,000 budget by assisting with plot setup, soil preparation, and coordinating tools and volunteers to expand garden capacity and accessibility.',
      image: '/projectImages/community-garden-hcpss-arl/drive-download-20251115T031540Z-1-001/Screenshot 2025-08-12 at 8.26.19 PM.png'
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Volunteer Opportunities</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us in protecting Maryland's natural heritage. Every volunteer makes a difference in our conservation efforts.
            </p>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mt-6"></div>
          </div>

          {/* Volunteer Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={opportunity.image} 
                    alt={opportunity.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{opportunity.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-emerald-400">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{new Date(opportunity.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-emerald-400">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{opportunity.location}</span>
                    </div>
                    <div className="flex items-center text-emerald-400">
                      <Users size={16} className="mr-2" />
                      <span className="text-sm">{opportunity.participants}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{opportunity.description}</p>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="w-full block text-center px-4 py-2 bg-gray-700 text-white rounded-lg transition-colors cursor-not-allowed opacity-60"
                  >
                    Volunteering Closed
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Registration Link */}
          <div className="bg-gray-900 rounded-lg p-8 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Volunteer Registration</h2>
            <p className="text-xl text-gray-300 mb-6">
              Volunteering is currently closed. Please check back later for future opportunities.
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-block px-6 py-4 bg-gray-700 text-white rounded-lg font-semibold transition-colors cursor-not-allowed opacity-60"
            >
              Volunteering Closed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerOpportunities;