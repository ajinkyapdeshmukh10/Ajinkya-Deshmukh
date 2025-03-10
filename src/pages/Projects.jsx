import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Extract unique categories from projects
  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div>
      {/* Projects Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Explore my portfolio of projects spanning web development, mobile applications, 
            data science, and more. Each project represents a unique challenge and solution.
          </p>
        </div>
      </section>
      
      {/* Projects Filter and Grid */}
      <section className="py-16">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-600">
                No projects match the selected filter. Try selecting a different category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;