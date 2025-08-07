import React, { useState, useCallback, useEffect } from 'react';
import {Terminal, Search } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const Hero = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        { name: "TypeORM", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "DSA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
      ]
    },
    {
      title: "Cloud",
      skills: [
        { name: "AWS S3", logo: "/aws-icons/Arch_Amazon-Simple-Storage-Service_16.svg" },
        { name: "AWS DynamoDB", logo: "/aws-icons/Arch_Amazon-DynamoDB_16.svg" },
        { name: "AWS EC2", logo: "/aws-icons/Arch_Amazon-EC2_16.svg" },
        { name: "AWS Lambda", logo: "/aws-icons/Arch_AWS-Lambda_16.svg" },
        { name: "AWS API Gateway", logo: "/aws-icons/Arch_Amazon-API-Gateway_16.svg" },
        { name: "Azure Data Studio", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker.svg"}
      ]
    },
    {
      title: "Testing",
      skills: [
        { name: "Jest", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
        { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
        { name: "JUnit", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "JMeter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" }
      ]
    },
    {
      title: "Project Management",
      skills: [
        { name: "Jira", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "SpiraPlan", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
        { name: "Zephyr Squad", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
        { name: "GitHub Projects", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ]
    }
  ];

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const TechStackShowcase = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [activeCategory, setActiveCategory] = useState('');

    useEffect(() => {
      let mounted = true;
      // Convert skillCategories to the format we need
      const categories = skillCategories.map(cat => cat.title.toLowerCase());
      let currentIndex = 0;

      const rotateCategories = async () => {
        if (!mounted) return;

        const category = categories[currentIndex];
        setActiveCategory(''); // Clear previous category
        setShowResults(false);
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        if (!mounted) return;
        setActiveCategory(category);
        
        const searchText = `search: ${category}...`;
        for (let i = 0; i <= searchText.length; i++) {
          if (!mounted) return;
          await new Promise(resolve => setTimeout(resolve, 35));
          setSearchTerm(searchText.slice(0, i));
        }

        if (!mounted) return;
        setShowResults(true);

        await new Promise(resolve => setTimeout(resolve, 2500));
        
        if (!mounted) return;
        currentIndex = (currentIndex + 1) % categories.length;
      };

      rotateCategories(); // Initial run
      const interval = setInterval(rotateCategories, 4000);

      return () => {
        mounted = false;
        clearInterval(interval);
      };
    }, []);

    return (
      <div className="terminal-container w-full max-w-2xl mx-auto">
        <div className="flex items-center gap-2 mb-3">
          <Terminal className="text-pink-500" size={20} />
          <span className="text-gray-400 text-sm">tech-stack-explorer</span>
        </div>
        
        <div className="relative">
          <div className="flex items-center bg-gray-900/50 rounded-lg px-4 py-2">
            <Search className="text-gray-500 mr-2" size={18} />
            <span className="text-gray-300 h-6">
              {searchTerm}
              <span className="typing-cursor"></span>
            </span>
          </div>

          <div className="relative h-[350px] mt-6 overflow-hidden">
            <div 
              className={`grid grid-cols-3 gap-1 absolute inset-0 transition-opacity duration-300 ${
                showResults ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {activeCategory && skillCategories.find(
                cat => cat.title.toLowerCase() === activeCategory
              )?.skills.map((tech, index) => (
                <div
                  key={tech.name}
                  className="tech-logo-container"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="rounded-lg p-2 transition-all duration-300 transform hover:-translate-y-1">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12 mx-auto filter hover:brightness-125 transition-all duration-300"
                    />
                    <p className="text-center text-gray-100 text-xs mt-2">{tech.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
      
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="text-center lg:text-left">
  <h1 className="hero-heading text-white mb-4">
  <span className="text-[clamp(2.5rem,6vw,3.5rem)]">Hi, I'm</span>{" "}
 <span className="block text-[clamp(3.5rem,8vw,7rem)] bg-slate-300 bg-clip-text text-transparent">
  Srishti
</span>
</h1>
  <p className="hero-subheading text-slate-100 mb-8">
    Cloud-Native Full Stack Developer
  </p>
  <p className="hero-description text-slate-200 mb-10">
    Passionate about creating innovative web solutions and bringing ideas to life through clean, efficient code.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
    <a href="#projects" className="px-8 py-3 bg-slate-600 text-white rounded-lg hover:bg-gray-200 hover:text-slate-600 transition-all transform hover:scale-105 shadow-lg font-medium">
      View My Work
    </a>
   <a 
  href="/resume/SrishtiKhosla.pdf" 
  download="SrishtiKhosla_Resume.pdf"
  className="px-8 py-3 bg-slate-600 text-white rounded-lg hover:bg-gray-200 hover:text-slate-600 transition-all transform hover:scale-105 shadow-lg transition-colors font-medium inline-flex items-center gap-2"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-5 w-5" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
    />
  </svg>
  Resume
</a>
  </div>
</div>

          {/* Right Side - Skills Carousel */}
          <div className="lg:col-span-1">
            <TechStackShowcase />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;