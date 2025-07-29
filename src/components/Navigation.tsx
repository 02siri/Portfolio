import React, { useState } from 'react';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-40 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-center items-center"> {/* Changed justify-between to justify-center */}
            
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-center space-x-6"> {/* Added justify-center and increased space-x */}
            <a 
              href="#home" 
              className="px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-all duration-200 relative group text-center"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-500 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a 
              href="#about" 
              className="px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-all duration-200 relative group text-center"
            >
              About
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-500 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a 
              href="#skills" 
              className="px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-all duration-200 relative group text-center"
            >
              Skills
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-500 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a 
              href="#experience" 
              className="px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-all duration-200 relative group text-center"
            >
              Experience
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-500 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a 
              href="#projects" 
              className="px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-all duration-200 relative group text-center"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-500 group-hover:w-full transition-all duration-200"></span>
            </a>
            <a 
              href="#contact" 
              className="px-4 py-2 text-gray-300 hover:text-white rounded-lg transition-all duration-200 relative group text-center"
            >
              Contact
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-500 group-hover:w-full transition-all duration-200"></span>
            </a>
          </div>

          {/* Move Mobile Menu Button to the right edge */}
          <div className="md:hidden absolute right-4">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Update to center align items */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col items-center space-y-2 pt-4"> {/* Added items-center */}
              <a 
                href="#home" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Skills
              </a>
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
              >
                Contact
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mx-4 mt-2 px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all text-center"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;