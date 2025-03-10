import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary-600">Portfolio</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={({isActive}) => 
            isActive ? "font-medium text-primary-600" : "text-gray-600 hover:text-primary-600"
          }>
            Home
          </NavLink>
          <NavLink to="/projects" className={({isActive}) => 
            isActive ? "font-medium text-primary-600" : "text-gray-600 hover:text-primary-600"
          }>
            Projects
          </NavLink>
          <NavLink to="/about" className={({isActive}) => 
            isActive ? "font-medium text-primary-600" : "text-gray-600 hover:text-primary-600"
          }>
            About
          </NavLink>
          <NavLink to="/contact" className={({isActive}) => 
            isActive ? "font-medium text-primary-600" : "text-gray-600 hover:text-primary-600"
          }>
            Contact
          </NavLink>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-3 flex flex-col space-y-3">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                isActive ? "font-medium text-primary-600 py-2" : "text-gray-600 hover:text-primary-600 py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({isActive}) => 
                isActive ? "font-medium text-primary-600 py-2" : "text-gray-600 hover:text-primary-600 py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                isActive ? "font-medium text-primary-600 py-2" : "text-gray-600 hover:text-primary-600 py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                isActive ? "font-medium text-primary-600 py-2" : "text-gray-600 hover:text-primary-600 py-2"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;