import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const ProjectCard = ({ title, description, tech, link, githubLink, image }) => (
  <motion.div
    className="group w-full max-w-md mx-auto"
    whileHover={{ y: -12, scale: 1.02 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 shadow-lg hover:shadow-blue-500/30 h-full flex flex-col">
      {/* Image Container with Parallax Effect */}
      <div className="relative overflow-hidden h-52">
        <motion.img
          src={image || "/fallback-image.jpg"}
          className="w-full h-full object-cover transition-transform duration-700"
          alt={title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        {/* Overlay with Buttons and Fade-In Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex items-end justify-center pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex gap-3">
            {link && (
              <motion.a
                href={link}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="text-xs" /> Demo
              </motion.a>
            )}
            {githubLink && (
              <motion.a
                href={githubLink}
                className="bg-gray-700/70 backdrop-blrt-sm text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-600/70 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-xs" /> Code
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Content Container with Text Animations */}
      <div className="p-6 flex-1 flex flex-col">
        <motion.h3
          className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-300 mb-4 leading-relaxed text-sm flex-1"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {description}
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2 mt-auto"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {tech.map((item, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 bg-gray-700/50 text-gray-200 text-xs font-medium rounded-full border border-gray-600 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;