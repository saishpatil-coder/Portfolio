import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from "react-icons/fa";
import "../../styles/inter-font.css";

const Profile = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0f111a] overflow-hidden circuit-pattern font-sans">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-10 pointer-events-none" />
      <style>
        {`
          @keyframes infinite-move {
            0% { transform: translate(0, 0); }
            50% { transform: translate(20vw, 20vh); }
            100% { transform: translate(0, 0); }
          }

          @keyframes line-move {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(30vw, 30vh) rotate(90deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }

          .infinite-move {
            animation: infinite-move 6s ease-in-out infinite;
            position: absolute;
          }

          .animate-line-move {
            animation: line-move 8s ease-in-out infinite;
            position: absolute;
          }

          .animate-pulse {
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 5px; }
            50% { transform: scale(1.1); box-shadow: 0 0 15px; }
            100% { transform: scale(1); box-shadow: 0 0 5px; }
          }
@keyframes glowline {
  0%   { transform: translateX(0); }
  50%  { transform: translateX(100%); }
  100% { transform: translateX(0); }
}

.animate-glowline {
  animation: glowline 3s ease-in-out infinite;
  position: absolute;
  will-change: transform;
}




        `}
      </style>
      <div className="z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Left Side: Text Content */}
        <div className="text-center flex flex-col items-center justify-center h-full">
          <h1 className="text-3xl sm:text-4xl font-light italic text-[#bfc9e0] mb-2 tracking-wide font-sans">
            Hi, I’m
          </h1>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] whitespace-nowrap font-sans">
            Saish Sachin Patil
          </h2>
          {/* Glowing moving line below name */}
          <div className="relative w-full flex justify-center mt-2">
  <div className="relative h-0.5 w-80 sm:w-96 overflow-hidden">
    {/* Animated glowing line */}
    <span className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-md animate-glowline" />
    {/* Base line */}
    <span className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-[#7f5af0] via-[#2cb67d] to-[#7f5af0] opacity-30" />
  </div>
</div>

          <div className="mt-4 px-6 py-2 border border-white/20 bg-white/5 rounded-full text-white text-lg shadow-md backdrop-blur-sm font-medium">
            Developer
          </div>
          <p className="mt-6 text-[#bfc9e0] text-lg font-sans max-w-lg">
            I craft beautiful, performant web applications using modern technologies. Passionate about{" "}
            <TypeAnimation
              sequence={[
                "clean code.",
                2000,
                "user experience.",
                2000,
                "scalable web apps.",
                2000,
              ]}
              speed={50}
              className="font-semibold text-white font-sans"
              repeat={Infinity}
            />
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-2 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] text-white rounded-full font-semibold text-lg hover:shadow-lg transition font-sans"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 border border-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition font-sans"
            >
              Get In Touch
            </a>
          </div>
          {/* Social Icons */}
          <div className="mt-8 flex gap-4">
            <a
              href="https://github.com/saishpatil-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 text-white rounded-full hover:bg-gradient-to-r hover:from-[#7f5af0] hover:to-[#2cb67d] transition font-sans"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/saishpatil-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 text-white rounded-full hover:bg-gradient-to-r hover:from-[#7f5af0] hover:to-[#2cb67d] transition font-sans"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://leetcode.com/saish-patil45"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 text-white rounded-full hover:bg-gradient-to-r hover:from-[#7f5af0] hover:to-[#2cb67d] transition font-sans"
            >
              <FaCode size={24} />
            </a>
            <a
              href="mailto:saishpatil.coder@gmail.com"
              className="p-3 bg-white/5 text-white rounded-full hover:bg-gradient-to-r hover:from-[#7f5af0] hover:to-[#2cb67d] transition font-sans"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        {/* Right Side: Animated Profile Image */}
        <div className="flex justify-center md:justify-end relative px-4">
          {/* Animated gradient border */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7f5af0] to-[#2cb67d] rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute inset-0 rounded-full border-4 border-[#7f5af0]/40 animate-spin-slow" />
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Saish Sachin Patil"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#232a3a] shadow-xl bg-[#181e2a]/60"
              />
              {/* Floating icons */}
              <div className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-r from-[#7f5af0] to-[#ff5470] rounded-full flex items-center justify-center shadow-lg animate-float">
                <FaCode className="text-white text-2xl" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-r from-[#2cb67d] to-[#7f5af0] rounded-full flex items-center justify-center shadow-lg animate-float delay-500">
                <FaEnvelope className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;