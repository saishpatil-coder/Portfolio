import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../../assets/Info";

const Projects = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 2px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover my latest creations that blend innovation, design, and technology
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line (Hidden on Mobile) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 h-full rounded-full"></div>

          {/* Projects */}
          <div className="space-y-12 md:space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                {/* Timeline Node (Hidden on Mobile) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-gray-900 shadow-md"></div>

                {/* Project Card with Symmetrical Placement */}
                <div className="relative flex justify-center md:grid md:grid-cols-[1fr_auto_1fr] gap-8">
                  {index % 2 === 0 ? (
                    <>
                      <motion.div
                        className="max-w-md md:max-w-xl w-full md:mx-auto md:pr-12"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        <ProjectCard {...project} />
                      </motion.div>
                      <div className="hidden md:block"></div> {/* Spacer for timeline */}
                      <div className="hidden md:block"></div> {/* Empty right column */}
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block"></div> {/* Empty left column */}
                      <div className="hidden md:block"></div> {/* Spacer for timeline */}
                      <motion.div
                        className="max-w-md md:max-w-xl w-full md:mx-auto md:pl-12"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                      >
                        <ProjectCard {...project} />
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline End Node (Hidden on Mobile) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-0 w-5 h-5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-gray-900 shadow-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;