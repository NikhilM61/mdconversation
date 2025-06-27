import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export const ProjectGallery = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{project.title} Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {project.gallery?.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg">
            <img src={image} alt={`${project.title} gallery image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};