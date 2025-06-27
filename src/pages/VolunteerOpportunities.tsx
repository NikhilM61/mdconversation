import React from "react";
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users } from 'lucide-react';

const VolunteerOpportunities = () => {
  const volunteerOpportunities = [
    {
      title: "Chesapeake Bay Cleanup",
      date: "2025-07-15",
      location: "Sandy Point State Park",
      participants: "50+ volunteers needed",
      description: "Join us for a comprehensive cleanup of the Chesapeake Bay shoreline. We'll be removing plastic waste, debris, and invasive species to protect marine habitats.",
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Urban Tree Planting",
      date: "2025-07-22",
      location: "Baltimore City",
      participants: "30+ volunteers needed",
      description: "Help expand Baltimore's urban forest by planting native trees in underserved neighborhoods. Training and tools provided.",
      image: "https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Wetland Restoration",
      date: "2025-07-05",
      location: "Patuxent River Park",
      participants: "25+ volunteers needed",
      description: "Restore critical wetland habitats by removing invasive plants and replanting native species. Perfect for nature enthusiasts.",
      image: "https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
                    className="w-full block text-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors cursor-not-allowed opacity-50"
                  >
                    Sign Up (Coming Soon)
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Registration Link */}
          <div className="bg-gray-900 rounded-lg p-8 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Register to Volunteer</h2>
            <p className="text-xl text-gray-300 mb-6">
              Our new Google Form for volunteer registration is coming soon. Please check back later!
            </p>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="inline-block px-6 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors cursor-not-allowed opacity-50"
            >
              Google Form Coming Soon
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerOpportunities;