import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Srishti Khosla</h3>
          <p className="text-gray-400 mb-6">Full Stack Developer & Computer Science Graduate</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://github.com/srishtikhosla" className="text-gray-400 hover:text-pink-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/srishtikhosla" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:srishti.khosla@example.com" className="text-gray-400 hover:text-pink-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Srishti Khosla. All rights reserved. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 