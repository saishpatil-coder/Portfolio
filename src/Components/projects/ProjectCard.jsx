import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import React from 'react';


const ProjectCard = ({ title, description, tech, link, image }) => (
    <div className="group" data-aos="fade-up">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative overflow-hidden">
          <img src={image} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" alt={title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <a href={link} className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt className="text-xs" /> Live Demo
              </a>
              <a href={`https://github.com/saishpatil-coder/${title.toLowerCase().replace(/\s+/g, '-')}`} 
                 className="flex-1 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-all duration-300 flex items-center justify-center gap-2" 
                 target="_blank" 
                 rel="noopener noreferrer">
                <FaGithub className="text-xs" /> Code
              </a>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span key={index} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

export default ProjectCard;