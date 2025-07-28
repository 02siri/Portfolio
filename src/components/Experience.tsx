import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const Experience = () => {
  const experience = [
    {
      company: "Tech Solutions Inc.",
      position: "Full Stack Developer",
      duration: "2023 - Present",
      location: "Melbourne, Australia",
      responsibilities: [
        "Developed and maintained web applications using React and Node.js",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented responsive designs and optimized application performance"
      ]
    },
    {
      company: "Digital Agency Co.",
      position: "Frontend Developer",
      duration: "2022 - 2023",
      location: "Melbourne, Australia",
      responsibilities: [
        "Created responsive web interfaces using modern JavaScript frameworks",
        "Worked closely with UI/UX designers to implement pixel-perfect designs",
        "Optimized websites for performance and accessibility"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Work Experience</h2>
        
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="border-l-4 border-pink-500 pl-6 ml-4">
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-pink-500/10 hover:shadow-2xl transition-all border border-gray-600">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{job.position}</h3>
                    <p className="text-purple-400 font-medium">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 flex items-center gap-1">
                      <Calendar size={16} />
                      {job.duration}
                    </p>
                    <p className="text-gray-400 flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="text-gray-300 flex items-start gap-2">
                      <ArrowRight size={16} className="text-pink-500 mt-0.5 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 