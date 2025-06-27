import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import { projects } from "../../assets/Info";

const Projects = () => {
  // Hook to detect when section header is in view
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, x: (index) => (index % 2 === 0 ? -100 : 100), scale: 0.95 },
    show: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        opacity: { duration: 0.6 },
        x: { duration: 0.8, ease: [0.6, 0, 0.2, 1] },
        scale: { duration: 0.6 },
      }
    },
  };

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background Effect with Subtle Animation */}
      <motion.div
        className="absolute inset-0 opacity-10 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 2px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Animation */}
        <motion.div
          ref={sectionRef}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            My{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
              animate={{ backgroundPosition: ["0%", "200%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200%" }}
            >
              Projects
            </motion.span>
          </h2>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={sectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover my latest creations that blend innovation, design, and technology
          </motion.p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line (Static) */}
          <div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 h-full rounded-full"
          ></div>

          {/* Projects */}
          <div className="space-y-12 md:space-y-16">
            {projects.map((project, index) => {
              // Individual inView hook for each project card
              const { ref: cardRef, inView: cardInView } = useInView({
                triggerOnce: false,
                threshold: 0.3, // Trigger when 30% of card is visible
              });

              return (
                <div key={index} className="relative" ref={cardRef}>
                  {/* Timeline Node with Glow Effect (Centered Horizontally) */}
                  <motion.div
                    className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-[50%] -translate-y-1/2 w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-gray-900 shadow-md"
                    style={{ left: "calc(50% - 2.5px)" }}
                    animate={
                      cardInView
                        ? {
                            boxShadow: [
                              "0 0 10px rgba(59, 130, 246, 0.5)",
                              "0 0 20px rgba(59, 130, 246, 0.8)",
                              "0 0 10px rgba(59, 130, 246, 0.5)",
                            ],
                          }
                        : { boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }
                    }
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.div>

                  {/* Project Card with Symmetrical Placement */}
                  <div className="relative flex justify-center md:grid md:grid-cols-[1fr_auto_1fr] gap-8">
                    {index % 2 === 0 ? (
                      <>
                        <motion.div
                          className="max-w-md md:max-w-xl w-full md:mx-auto md:pr-12"
                          variants={cardVariants}
                          custom={index}
                          initial="hidden"
                          animate={cardInView ? "show" : "hidden"}
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
                          variants={cardVariants}
                          custom={index}
                          initial="hidden"
                          animate={cardInView ? "show" : "hidden"}
                        >
                          <ProjectCard {...project} />
                        </motion.div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;