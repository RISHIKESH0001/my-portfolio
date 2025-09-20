import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../../assets/images/logo.png';

const Navbar = ({ scrollToSection, refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (section) => {
    scrollToSection(refs[section]);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar-container fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-indigo-500/20 border-b border-gray-800' : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="relative group flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-14 w-auto cursor-pointer"
              onClick={() => handleNavigation('homeRef')}
            />
            <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <button 
                onClick={() => handleNavigation('homeRef')}
                className="text-white hover:text-blue-400 cursor-pointer transition-all duration-300 relative group px-3 py-2 text-sm font-medium"
              >
                Home
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-blue-400 transition-all duration-300 w-0 group-hover:w-4/5 group-hover:left-[10%]"></span>
              </button>
              <button 
                onClick={() => handleNavigation('aboutRef')}
                className="text-white hover:text-blue-400 cursor-pointer transition-all duration-300 relative group px-3 py-2 text-sm font-medium"
              >
                About
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-blue-400 transition-all duration-300 w-0 group-hover:w-4/5 group-hover:left-[10%]"></span>
              </button>
              <button 
                onClick={() => handleNavigation('projectsRef')}
                className="text-white hover:text-blue-400 cursor-pointer transition-all duration-300 relative group px-3 py-2 text-sm font-medium"
              >
                Projects
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-blue-400 transition-all duration-300 w-0 group-hover:w-4/5 group-hover:left-[10%]"></span>
              </button>
              <button 
                onClick={() => handleNavigation('moreInfoRef')}
                className="text-white hover:text-blue-400 cursor-pointer transition-all duration-300 relative group px-3 py-2 text-sm font-medium"
              >
                More Info
                <span className="absolute left-1/2 bottom-0 h-0.5 bg-blue-400 transition-all duration-300 w-0 group-hover:w-4/5 group-hover:left-[10%]"></span>
              </button>
            </div>
            
            <button
              onClick={() => handleNavigation('footerRef')}
              className="ml-4 text-white bg-gradient-to-r from-indigo-500 to-teal-400 h-12 px-6 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50 text-sm font-medium"
            >
              Connect With Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-4 bg-black/95 backdrop-blur-sm border-t border-gray-800 shadow-lg shadow-indigo-500/20">
          <button 
            onClick={() => handleNavigation('homeRef')}
            className="block w-full text-left px-3 py-4 rounded-md text-white hover:text-blue-400 hover:bg-gray-900 transition-all duration-300 relative group text-base font-medium"
          >
            Home
            <span className="absolute left-0 bottom-2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => handleNavigation('aboutRef')}
            className="block w-full text-left px-3 py-4 rounded-md text-white hover:text-blue-400 hover:bg-gray-900 transition-all duration-300 relative group text-base font-medium"
          >
            About
            <span className="absolute left-0 bottom-2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => handleNavigation('projectsRef')}
            className="block w-full text-left px-3 py-4 rounded-md text-white hover:text-blue-400 hover:bg-gray-900 transition-all duration-300 relative group text-base font-medium"
          >
            Projects
            <span className="absolute left-0 bottom-2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => handleNavigation('moreInfoRef')}
            className="block w-full text-left px-3 py-4 rounded-md text-white hover:text-blue-400 hover:bg-gray-900 transition-all duration-300 relative group text-base font-medium"
          >
            More Info
            <span className="absolute left-0 bottom-2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button 
            onClick={() => handleNavigation('footerRef')}
            className="w-full text-center text-white bg-gradient-to-r from-indigo-500 to-teal-400 h-12 px-6 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/50 text-base font-medium mt-2"
          >
            Connect With Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;