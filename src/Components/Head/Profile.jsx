import React from 'react';
import { FaCode, FaTrophy, FaGraduationCap, FaRocket, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import SmallResume from '../Resume/SmallResume';

export default function Profile() {
    return (
        <>
        <div className="h-[100vh] pt-20 lg:pt-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
            <div className="relative z-10 container mx-auto px-4 py-6 lg:px-8 lg:py-12 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-6 items-start lg:gap-8">
                    {/* Left Content */}
                    <div className="space-y-4 lg:space-y-6" data-aos="fade-right">
                        {/* Greeting */}
                        <div className="space-y-2">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white">
                                Hey, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">👋</span>
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white">
                                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Saish Sachin Patil</span>
                            </h2>
                        </div>

                        {/* Education Badge */}
                        <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium shadow-md">
                            <FaGraduationCap className="mr-1 text-sm" />
                            B.Tech CSE'26 @ TKIET
                        </div>

                        {/* Main Introduction */}
                        <p className="text-base text-gray-300 leading-relaxed max-w-lg">
                            A third-year B.Tech Computer Science & Engineering student passionate about building impactful technology.
                        </p>

                        {/* Core Strengths */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="flex items-center mb-1">
                                <div className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-2">
                                    <FaCode className="text-white text-sm" />
                                </div>
                                <h3 className="text-base font-semibold text-white">Core Strengths</h3>
                            </div>
                            <p className="text-gray-300 text-sm">
                                <span className="font-semibold text-white">Full Stack Web Development</span> with React.js, Express.js, Node.js, crafting responsive UIs and scalable backends.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-2">
                            <a href="#contact" className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                                <FaRocket className="mr-1 group-hover:animate-bounce" />
                                Let's Build
                            </a>
                            <a href="#projects" className="inline-flex items-center px-4 py-2 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
                                View Projects
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-2 pt-2">
                            <a href="https://github.com/saishpatil-coder" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group">
                                <FaGithub className="text-white text-base group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://linkedin.com/in/saishpatil-coder" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group">
                                <FaLinkedin className="text-white text-base group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://twitter.com/saishpatil_coder" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group">
                                <FaTwitter className="text-white text-base group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="mailto:saishpatil.coder@gmail.com" className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group">
                                <FaEnvelope className="text-white text-base group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end" data-aos="fade-left">
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                            
                            {/* Profile Image */}
                            <div className="relative">
                                <img 
                                    src="/profile.jpg" 
                                    alt="Saish Sachin Patil" 
                                    className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/20 shadow-xl hover:scale-105 transition-transform duration-300"
                                />
                                
                                {/* Floating Elements */}
                                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
                                    <FaCode className="text-white text-sm" />
                                </div>
                                <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                                    <FaTrophy className="text-white text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}