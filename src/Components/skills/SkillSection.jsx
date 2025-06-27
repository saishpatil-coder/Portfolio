import React from 'react';
import Skills from './Skills';

const SkillSection = () => {
  return (
    <section id="skills" className="min-h-[90vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 lg:pt-28 pb-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-poppins" data-aos="fade-up">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expertise</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-poppins" data-aos="fade-up" data-aos-delay="100">
            Technologies I wield to craft innovative solutions
          </p>
        </div>
        <Skills />
      </div>
    </section>
  );
}

export default SkillSection;