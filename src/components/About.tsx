import React from 'react';
import { MapPin, GraduationCap, Code, Globe, Award } from 'lucide-react';

const About = () => {
  const achievements = [
    "Dean's List - Academic Excellence (2021, 2022)",
    "Best Final Year Project Award - RMIT University",
    "Hackathon Winner - Melbourne Tech Challenge 2023",
    "AWS Certified Solutions Architect Associate"
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-pink-400">My Story</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a passionate full-stack developer with a Bachelor's degree in Computer Science from RMIT University. 
              My journey in technology began with curiosity about how things work behind the screen, and it has evolved 
              into a deep love for creating digital solutions that make a difference.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I enjoy working with modern technologies and frameworks to build scalable, user-friendly applications. 
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or planning my next travel adventure.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-pink-400">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin size={20} className="text-purple-400" />
                <span className="text-gray-300">Based in Melbourne, Australia</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap size={20} className="text-purple-400" />
                <span className="text-gray-300">B.Sc Computer Science Graduate</span>
              </div>
              <div className="flex items-center gap-3">
                <Code size={20} className="text-purple-400" />
                <span className="text-gray-300">3+ years of development experience</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-purple-400" />
                <span className="text-gray-300">Available for remote work</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-pink-400">Education</h3>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <h4 className="font-semibold text-lg text-white">Bachelor of Science - Computer Science</h4>
              <p className="text-purple-400 font-medium">RMIT University</p>
              <p className="text-gray-400 text-sm">2020 - 2023</p>
              <p className="text-gray-300 mt-2">
                Specialized in software development, algorithms, and database systems. 
                Graduated with distinction.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-pink-400">Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Award size={20} className="text-yellow-400 mt-0.5" />
                  <span className="text-gray-300">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 