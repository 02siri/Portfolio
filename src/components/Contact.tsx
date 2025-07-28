import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Get In Touch</h2>
        
        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 mb-8">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:srishti.khosla@example.com"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/srishtikhosla"
              className="flex items-center gap-3 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-pink-500 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://github.com/srishtikhosla"
              className="flex items-center gap-3 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-purple-500 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>

        <div className="bg-gray-700 p-8 rounded-lg border border-gray-600">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              Feel free to reach out through any of the channels above, or connect with me on social media. 
              I'm always excited to discuss new opportunities and collaborations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-600 hover:border-pink-500 transition-colors">
                <Mail className="mx-auto mb-3 text-pink-500" size={32} />
                <h4 className="font-medium mb-2 text-white">Email Me</h4>
                <p className="text-sm text-gray-400">srishti.khosla@example.com</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-600 hover:border-purple-500 transition-colors">
                <Linkedin className="mx-auto mb-3 text-purple-500" size={32} />
                <h4 className="font-medium mb-2 text-white">LinkedIn</h4>
                <p className="text-sm text-gray-400">Connect professionally</p>
              </div>
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-600 hover:border-pink-500 transition-colors">
                <Github className="mx-auto mb-3 text-pink-400" size={32} />
                <h4 className="font-medium mb-2 text-white">GitHub</h4>
                <p className="text-sm text-gray-400">Check out my code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 