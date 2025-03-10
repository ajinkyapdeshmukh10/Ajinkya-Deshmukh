import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hi, I'm <span className="text-primary-200">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            A passionate developer building amazing digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="btn bg-white text-primary-700 hover:bg-primary-50">
              View My Work
            </Link>
            <Link to="/contact" className="btn border border-white text-white hover:bg-primary-700">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;