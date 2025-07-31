import React from 'react';
import { MapPin, GraduationCap, Code} from 'lucide-react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8 text-white">About Me</h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a passionate full-stack developer with a Bachelor's degree in Computer Science from RMIT University. 
                My journey in technology began with curiosity about how things work behind the screen, and it has evolved 
                into a deep love for creating digital solutions that make a difference.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                I thrive in collaborative environments and continuously seek to refine my skills while staying updated 
                with industry trends. Outside of coding, I'm driven by a curiosity to learn, build, and make a meaningful 
                impact through technology.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-white" />
                  <span className="text-gray-300">Melbourne, Australia</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap size={20} className="text-white" />
                  <span className="text-gray-300">B.Sc Computer Science, RMIT University</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code size={20} className="text-white" />
                  <span className="text-gray-300">3 years of development experience</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="aspect-square overflow-hidden rounded-full border-4 border-white/10 w-[400px]">
              <Image
                src="/self.jpg"
                alt="Profile picture"
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;