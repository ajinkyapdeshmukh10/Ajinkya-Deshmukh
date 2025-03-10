import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import projects from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the project with the matching id
  const project = projects.find(p => p.id === parseInt(id));
  
  // If project not found, redirect to projects page
  if (!project) {
    // In a real app, you might want to show a loading state first
    // before determining the project doesn't exist
    React.useEffect(() => {
      navigate('/projects');
    }, [navigate]);
    
    return null;
  }
  
  return (
    <div>
      {/* Project Hero */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <Link to="/projects" className="text-primary-200 hover:text-white mb-4 inline-block">
                ← Back to Projects
              </Link>
              <h1 className="text-4xl font-bold">{project.title}</h1>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="bg-primary-800 text-primary-100 px-4 py-2 rounded-full">
                {project.category}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-primary-800 text-primary-100 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Gallery */}
      <section className="py-12 bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md h-64">
                <img 
                  src={image} 
                  alt={`${project.title} screenshot ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {project.longDescription}
              </p>
              
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="leading-relaxed">{feature}</li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold mb-6">Challenges & Solutions</h2>
              <p className="text-gray-700 leading-relaxed">
                {project.challenges}
              </p>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6 pb-4 border-b">Project Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Category</h4>
                    <p className="text-gray-700">{project.category}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full mb-3"
                    >
                      View Live Demo
                    </a>
                    
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-outline w-full"
                    >
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Next/Previous Project Navigation */}
      <section className="py-12 bg-gray-100">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between">
            {project.id > 1 && (
              <Link 
                to={`/projects/${project.id - 1}`}
                className="flex items-center text-primary-600 hover:text-primary-800 mb-4 md:mb-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Previous Project
              </Link>
            )}
            
            {project.id < projects.length && (
              <Link 
                to={`/projects/${project.id + 1}`}
                className="flex items-center text-primary-600 hover:text-primary-800 ml-auto"
              >
                Next Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;