import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
  <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6" data-aos="fade-up">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Let's work together on your next project and create something amazing
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center gap-6 mb-8" data-aos="fade-up" data-aos-delay="200">
            <a href="https://github.com/saishpatil-coder" target="_blank" rel="noopener noreferrer" title="GitHub" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group">
              <FaGithub className="text-white text-2xl group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com/in/saishpatil-coder" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group">
              <FaLinkedin className="text-white text-2xl group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com/saishpatil_coder" target="_blank" rel="noopener noreferrer" title="Twitter" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group">
              <FaTwitter className="text-white text-2xl group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:saishpatil.coder@gmail.com" title="Email" className="p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group">
              <FaEnvelope className="text-white text-2xl group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          <div className="text-center" data-aos="fade-up" data-aos-delay="300">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              <FaCode className="text-lg" />
              Built with React, Tailwind CSS and ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;