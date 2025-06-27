
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

export const PastProjects = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Past Projects</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse through our gallery of past conservation projects.
            </p>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => {
              const projectCard = (
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold mb-3 text-white hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                    <span className="text-sm text-emerald-400 font-medium">{project.date}</span>
                  </div>
                </div>
              );

              if (project.gallery) {
                return (
                  <Link to={`/project-gallery/${project.id}`} key={project.id}>
                    {projectCard}
                  </Link>
                );
              }

              return <div key={project.id}>{projectCard}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
