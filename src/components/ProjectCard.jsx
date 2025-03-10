import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link 
          to={`/projects/${project.id}`} 
          className="inline-block text-primary-600 font-medium hover:text-primary-700"
        >
          View Project →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;