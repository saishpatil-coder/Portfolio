import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../assets/Info";
const Projects = ()=>{

    return(
        <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-up">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Here are some of my recent works that showcase my skills and passion for development
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Projects;