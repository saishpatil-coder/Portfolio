import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const ProjectCard = ({ title, description, tech, link, githubLink, image }) => (
  <motion.div
    className="group w-full max-w-md mx-auto"
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 shadow-lg hover:shadow-blue-500/20 h-full flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden h-52">
        <img
          src={image || "/fallback-image.jpg"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          alt={title}
        />
        {/* Overlay with Buttons */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex items-end justify-center pb-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex gap-3">
            {link && (
              <a
                href={link}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt className="text-xs" /> Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                className="bg-gray-700/70 backdrop-blur-sm text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-600/70 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xs" /> Code
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-1">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700/50 text-gray-200 text-xs font-medium rounded-full border border-gray-600 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;