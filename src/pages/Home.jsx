import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Home = () => {
  // Display only featured projects (first 3) on the home page
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <div>
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
      
      <Skills />
      
      {/* About Me Preview Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">About Me</h2>
              <p className="text-gray-700 mb-6">
                I'm a passionate developer with expertise in building modern web and mobile applications. 
                With a strong foundation in computer science and years of practical experience, 
                I create elegant solutions to complex problems.
              </p>
              <p className="text-gray-700 mb-6">
                My journey in technology began during my academic years, where I developed a deep 
                understanding of software engineering principles and best practices. Since then, 
                I've worked on various projects across different domains, constantly expanding my 
                skillset and staying up-to-date with the latest technologies.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Me
              </Link>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-center p-4">
                [Your professional photo here]<br/>
                Replace this with an actual image in production
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;