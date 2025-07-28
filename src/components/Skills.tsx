import React from 'react';
import { Globe, Code, Database, Smartphone } from 'lucide-react';

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "SCSS"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "Express.js", "Django", "REST APIs"] },
    { category: "Database", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"] },
    { category: "Tools & Others", items: ["Git", "Docker", "AWS", "Figma", "Jest", "Webpack"] }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">My Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-pink-500/10 hover:shadow-2xl transition-all border border-gray-700 hover:border-pink-500/50">
              <div className="flex items-center gap-3 mb-4">
                {skillGroup.category === 'Frontend' && <Globe className="text-pink-500" size={24} />}
                {skillGroup.category === 'Backend' && <Code className="text-purple-500" size={24} />}
                {skillGroup.category === 'Database' && <Database className="text-pink-400" size={24} />}
                {skillGroup.category === 'Tools & Others' && <Smartphone className="text-purple-400" size={24} />}
                <h3 className="font-semibold text-lg text-white">{skillGroup.category}</h3>
              </div>
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="px-3 py-2 bg-gray-700 rounded text-sm text-gray-300 hover:bg-gradient-to-r hover:from-pink-900 hover:to-purple-900 transition-all">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 