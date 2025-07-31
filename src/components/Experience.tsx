import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experience = [
    {
      id: 1,
      role: "Team Leader, Scrum Master and Dev Team Member (WIL)",
      company: "Phi Technologies",
      duration: "March 2025 - June 2025",
      location: "Melbourne, Australia",
      achievements: [
        "Led cross-functional development team while managing Agile ceremonies, sprint planning, and product backlog maintenance to ensure deliverables align with client requirements and project timelines",
        "Developed comprehensive MVP dashboards for multiple stakeholders (admin, retailers, insurers), implemented advanced search and real-time analytics, and designed physical kiosk UI using React, TypeScript, Next.js, Chakra UI, Framer Motion, and Tailwind CSS"
      ]
    },
    {
      id: 2,
      role: "Peer Mentor",
      company: "RMIT University",
      duration: "March 2025 - June 2025",
      location: "Melbourne, Australia",
      achievements: [
        "Mentored students in Software Engineering Fundamentals and Further Programming courses, providing guidance on core programming concepts and best practices",
        "Assisted students with assignment comprehension and problem-solving approaches, helping them develop structured methodologies for academic success"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      x: 100,
      opacity: 0
    },
    visible: { 
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const timelineVariants = {
    hidden: { 
      scaleY: 0,
      originY: 0
    },
    visible: { 
      scaleY: 1,
      transition: {
        duration: 1
      }
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-white text-center"
        >
          Experience
        </motion.h2>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line with animation */}
          <motion.div 
            variants={timelineVariants}
            className="absolute left-1/4 top-0 bottom-0 w-0.5 bg-slate-400" 
          />

          {experience.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="relative mb-12 last:mb-0"
              variants={cardVariants}
            >
              {/* Timeline dot with pulse animation */}
              <motion.div 
                className="absolute left-1/4 top-8 w-4 h-4 -ml-2 rounded-full bg-blue-500 border-4 border-slate-900 z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
              />

              <div className="grid grid-cols-4 gap-8 items-start">
                {/* Left side - Date and Location */}
                <motion.div 
                  className="text-right pr-8"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center justify-end gap-2 text-slate-200 mb-2">
                    <Calendar size={16} className="text-slate-400" />
                    <span className="font-medium text-sm">{exp.duration}</span>
                  </div>
                  <div className="flex items-center justify-end gap-2 text-slate-400">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </motion.div>

                {/* Right side - Experience Card */}
                <motion.div 
                  className="col-span-3 pl-8"
                  variants={cardVariants}
                >
                  <motion.div 
                    className="bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg p-6 hover:border-slate-500 transition-all duration-300 hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", damping: 15 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.role}</h3>
                    <p className="text-blue-400 font-medium mb-4">{exp.company}</p>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="text-slate-300 flex items-start gap-3"
                        >
                          <ArrowRight size={16} className="text-slate-400 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;