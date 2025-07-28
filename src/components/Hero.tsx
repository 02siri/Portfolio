import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900">
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="mb-8">
          <div className="relative mb-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b1c6?w=200&h=200&fit=crop&crop=face" 
              alt="Srishti Khosla" 
              className="w-32 h-32 rounded-full mx-auto shadow-2xl border-4 border-pink-500"
            />
            <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 animate-pulse"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Srishti</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & Computer Science Graduate
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
            Passionate about creating innovative web solutions and bringing ideas to life through clean, efficient code.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:border-pink-500 transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="animate-bounce">
          <ChevronDown size={24} className="mx-auto text-pink-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 