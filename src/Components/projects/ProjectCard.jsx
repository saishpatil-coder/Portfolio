import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const ProjectCard = ({ title, description, tech, link, githubLink, image }) => (
  <motion.div
    className="group relative w-full max-w-md mx-auto"
    whileHover={{ y: -8, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Main Card */}
    <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 shadow-xl hover:shadow-2xl h-full flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden h-56">
        <motion.img
          src={image || "/fallback-image.jpg"}
          className="w-full h-full object-cover"
          alt={title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
        
        {/* Tech Stack Badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-600/50">
            <span className="text-xs font-medium text-slate-300">{tech.length} Tech</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {link && (
            <motion.a
              href={link}
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaExternalLinkAlt className="text-sm" /> Live Demo
            </motion.a>
          )}
          {githubLink && (
            <motion.a
              href={githubLink}
              className="bg-slate-800/80 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold hover:bg-slate-700/80 hover:shadow-lg transition-all duration-300 flex items-center gap-2 border border-slate-600/50"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-sm" /> Code
            </motion.a>
          )}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 flex items-center justify-between">
          {title}
          <FaArrowRight className="text-sm text-slate-500 group-hover:text-cyan-400 transition-colors duration-300 transform group-hover:translate-x-1" />
        </h3>
        
        {/* Description */}
        <p className="text-slate-300 mb-6 leading-relaxed text-sm flex-1">
          {description}
        </p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-slate-700/50 text-slate-200 text-xs font-medium rounded-lg border border-slate-600/50 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-purple-500/50 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      
      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  </motion.div>
);

export default ProjectCard;