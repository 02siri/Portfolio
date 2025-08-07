import React, { useState } from 'react';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  details: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projects: Project[] = [
    {
      id: 1,
      title: "LoopedIn",
      description: "Serverless music subscription web application with AWS cloud architecture",
      image: "/projects/LoopedIn/LI_Home.png",
      tech: ["Next.js","React.js","TypeScript","HTML", "Tailwind CSS", "Node.js","AWS S3","AWS DynamoDB","AWS APIGateway","AWS Lambda","AWS EC2"],
      github: "https://github.com/02siri/LoopedIn",
      live: "https://looped-in-pi.vercel.app/",
      details: "A sophisticated serverless music subscription platform built with AWS services including Lambda, DynamoDB, and S3. Features real-time subscription management, user authentication, flexible metadata queries, and scalable cloud architecture with automatic partitioning and horizontal scalability."
    },
    {
      id: 2,
      title: "TeachTeam",
      description: "Educational platform for collaborative learning and team management",
      image: "/projects/TeachTeam/TeachTeam.png",
      tech: ["Next.js","React.js","TypeScript","HTML", "Tailwind CSS","Express.js", "Node.js", "MySQL", "TypeORM", "GraphQL", "Jest"],
      github: "https://github.com/02siri/TeachTeam",
      live: "#",
      details: "An educational platform designed to facilitate collaborative learning environments. Features team formation, project management tools, assignment tracking, and communication features for students and educators."
    },
    {
      id: 3,
      title: "BurritoKing",
      description: "Restaurant management and ordering system with modern UI",
      image: "/projects/BurritoKing/BurritoKing.png",
      tech: ["Java", "JavaFX", "SceneBuilder", "JDK", "JDBC", "SQLite", "JUnit"],
      github: "https://github.com/02siri/BurritoKing",
      live: "#",
      details: "A comprehensive restaurant management system featuring online ordering, menu management, order tracking, and customer management. Built with modern web technologies for optimal user experience."
    },
    {
      id: 4,
      title: "AirStay",
      description: "Accommodation booking platform inspired by modern hospitality needs",
      image: "/projects/AirStay/AirStay.png",
      tech: ["HTML","Tailwind CSS", "Express.js", "Node.js", "MongoDB"],
      github: "https://github.com/02siri/AirStay",
      live: "#",
      details: "A full-stack accommodation booking platform with property listings, booking management, user authentication, search and filtering capabilities, and responsive design for seamless booking experiences."
    },
    {
      id: 5,
      title: "VetCare",
      description: "Veterinary clinic management system for pet healthcare services",
      image: "/projects/VetCare/VetCare.JPG",
      tech: ["Java","SpringBoot","BootStrap","Maven","MySQL","Flyway","Docker","JDBC","JUnit"],
      github: "https://github.com/02siri/VetCare",
      live: "#",
      details: "A comprehensive veterinary clinic management system featuring appointment scheduling, patient records management, treatment tracking, and billing integration for efficient pet healthcare services."
    }
  ];

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
        <div className="bg-gray-800 rounded-lg max-w-2xl w-full max-h-90vh overflow-y-auto border border-gray-700">
          <div className="relative">
            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-lg" />
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-gray-900 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg hover:bg-gray-700 transition-colors"
            >
              ×
            </button>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.details}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-2 text-white">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-purple-900 text-purple-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href={project.github} 
                className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
                View Code
              </a>
              <a 
                href={project.live}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-colors"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Featured Projects</h2>
        
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentProjectIndex * 100}%)` }}>
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-800 rounded-lg shadow-lg hover:shadow-pink-500/20 hover:shadow-2xl transition-all overflow-hidden border border-gray-700 mx-2">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <div className="relative overflow-hidden h-64 md:h-full">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20"></div>
                        </div>
                      </div>
                      <div className="md:w-1/2 p-8">
                        <h3 className="text-2xl font-bold mb-4 text-white">{project.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-gradient-to-r from-pink-900 to-purple-900 text-pink-300 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex gap-4">
                          <button 
                            onClick={() => setSelectedProject(project)}
                            className="px-6 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all transform hover:scale-105 cursor-pointer"
                          >
                            View Details
                          </button>
                          <a 
                            href={project.github}
                            className="p-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-pink-500 transition-colors"
                          >
                            <Github size={20} />
                          </a>
                          <a 
                            href={project.live}
                            className="p-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-purple-500 transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button 
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors border border-gray-600 hover:border-pink-500"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors border border-gray-600 hover:border-purple-500"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProjectIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentProjectIndex 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects; 