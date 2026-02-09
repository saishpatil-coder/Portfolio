import React from "react";
import Skills from "./Skills";

const SkillSection = () => {
  return (
    <section id="skills" className="min-h-screen bg-[#0f111a] text-white pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-4">
          <span className="text-white">Skills </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">& Technologies</span>
        </h2>
        <p className="text-gray-400 text-lg font-poppins">
          A comprehensive toolkit I use to build modern, efficient apps.
        </p>
        <div className="mt-16">
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
