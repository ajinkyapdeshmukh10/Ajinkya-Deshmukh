import React from 'react';
import { Link } from 'react-router-dom';
import Education from '../components/Education';
import Skills from '../components/Skills';

const About = () => {
  const workExperience = [
    {
      position: "Senior Frontend Developer",
      company: "Tech Company Name",
      location: "City, Country",
      period: "2020 - Present",
      responsibilities: [
        "Led the development of the company's flagship web application using React and TypeScript",
        "Implemented responsive design principles and accessibility standards",
        "Mentored junior developers and conducted code reviews",
        "Collaborated with UX/UI designers to implement new features and improve user experience",
        "Reduced application load time by 40% through performance optimizations"
      ]
    },
    {
      position: "Full Stack Developer",
      company: "Agency Name",
      location: "City, Country",
      period: "2018 - 2020",
      responsibilities: [
        "Developed and maintained client websites and web applications",
        "Created RESTful APIs using Node.js and Express",
        "Implemented database solutions using MongoDB and PostgreSQL",
        "Collaborated with cross-functional teams to deliver projects on time",
        "Participated in client meetings to gather requirements and provide technical insights"
      ]
    },
    {
      position: "Junior Web Developer",
      company: "Startup Name",
      location: "City, Country",
      period: "2016 - 2018",
      responsibilities: [
        "Built and maintained company website using HTML, CSS, and JavaScript",
        "Assisted in the development of internal tools and applications",
        "Implemented tracking and analytics solutions",
        "Collaborated with the marketing team to create landing pages for campaigns",
        "Participated in agile development processes"
      ]
    }
  ];

  return (
    <div>
      {/* About Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Learn more about my background, experience, and the skills I've developed throughout my career.
          </p>
        </div>
      </section>
      
      {/* Personal Bio */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1">
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center mb-6">
                <p className="text-gray-500 text-center p-4">
                  [Your professional photo here]<br/>
                  Replace this with an actual image in production
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-primary-600">Personal Details</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="font-semibold w-24">Name:</span>
                    <span>Your Name</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-24">Location:</span>
                    <span>City, Country</span>
                  </li>
                  <li className="flex">
                    <span className="font-semibold w-24">Email:</span>
                    <span>your.email@example.com</span>
                  </li>
                  <li className="flex items-center">
                    <span className="font-semibold w-24">Languages:</span>
                    <span>English (Native), Spanish (Fluent)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="section-title">My Journey</h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  I'm a passionate software developer with over 5 years of experience in creating web and mobile applications. 
                  My journey in technology began during my university years, where I discovered my love for solving complex 
                  problems through code. Since then, I've been on a continuous learning path, expanding my skills and 
                  staying up-to-date with the latest technologies and best practices.
                </p>
                <p>
                  My approach to development is centered around creating clean, maintainable code that delivers exceptional 
                  user experiences. I believe in the power of technology to transform businesses and improve people's lives, 
                  and I'm committed to building solutions that make a positive impact.
                </p>
                <p>
                  Throughout my career, I've had the opportunity to work on diverse projects across various industries, 
                  from e-commerce platforms to data visualization tools. Each project has presented unique challenges 
                  that have helped me grow as a developer and problem-solver.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new hiking trails, reading about emerging technologies, 
                  or contributing to open-source projects. I'm always open to new opportunities and collaborations, 
                  so feel free to reach out if you'd like to connect!
                </p>
                
                <div className="pt-4">
                  <Link to="/contact" className="btn btn-primary">
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <Skills />
      
      {/* Education Section */}
      <Education />
      
      {/* Work Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="section-title text-center">Work Experience</h2>
          
          <div className="mt-12 space-y-12">
            {workExperience.map((job, index) => (
              <div key={index} className="relative pl-8 border-l-4 border-primary-500">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-500 rounded-full"></div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full mb-2">
                    {job.period}
                  </span>
                  <h3 className="text-2xl font-bold">{job.position}</h3>
                  <p className="text-lg text-gray-600">{job.company}, {job.location}</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {job.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in my work?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Check out my portfolio to see the projects I've worked on, or get in touch to discuss how we can collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="btn bg-white text-primary-700 hover:bg-primary-50">
              View My Projects
            </Link>
            <Link to="/contact" className="btn border border-white text-white hover:bg-primary-700">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;