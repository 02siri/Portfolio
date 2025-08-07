import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-2">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent">Get In Touch</h2>
        
        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 mb-8">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:sksrishtikhosla111@gmail.com"
              className="flex items-center gap-3 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 shadow-lg"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/srishtikhosla"
              className="flex items-center gap-3 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://github.com/srishtikhosla"
              className="flex items-center gap-3 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 