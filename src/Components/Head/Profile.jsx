import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";
import {
  FaCode,
  FaTrophy,
  FaGraduationCap,
  FaRocket,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

// Animation variants
const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const socialLinkVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.2, rotate: 5 },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const floatVariants = {
  animate: (delay) => ({
    y: [-10, 10, -10],
    transition: { duration: 2, repeat: Infinity, delay },
  }),
};

const Profile = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="min-h-screen pt-20 lg:pt-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
    >
      <div className="relative z-10 container mx-auto px-4 py-6 lg:px-8 lg:py-12 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6 items-start lg:gap-8">
          {/* Left Content */}
          <motion.div
            className="space-y-4 lg:space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <motion.div className="space-y-2" variants={fadeInUp}>
              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-white"
                variants={fadeInUp}
              >
                Hey,{" "}
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 inline-block"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  👋
                </motion.span>
              </motion.h1>
              <motion.h2
                className="text-2xl lg:text-3xl font-bold text-white"
                variants={fadeInUp}
              >
                I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Saish Sachin Patil
                </span>
              </motion.h2>
            </motion.div>

            <motion.div
              className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium shadow-md"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <FaGraduationCap className="mr-1 text-sm" />
              B.Tech CSE'26 @ TKIET
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="text-base text-gray-300 leading-relaxed max-w-lg">
                A third-year B.Tech Computer Science & Engineering student passionate about{" "}
                <TypeAnimation
                  sequence={[
                    "building impactful technology.",
                    2000,
                    "creating scalable web solutions.",
                    2000,
                    "innovative UI/UX design.",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-semibold text-white"
                />
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/15 transition-all duration-300"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-1">
                <motion.div
                  className="p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-2"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <FaCode className="text-white text-sm" />
                </motion.div>
                <h3 className="text-base font-semibold text-white">Core Strengths</h3>
              </div>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold text-white">Full Stack Web Development</span> with
                React.js, Express.js, Node.js, crafting responsive UIs and scalable backends.
              </p>
            </motion.div>

            <motion.div className="flex flex-wrap gap-2" variants={fadeInUp}>
              <motion.a
                href="#contact"
                className="group inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaRocket className="mr-1 group-hover:animate-bounce" />
                Let's Build
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center px-4 py-2 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                View Projects
              </motion.a>
            </motion.div>

            <motion.div className="flex gap-2 pt-2" variants={fadeInUp}>
              {[
    { href: "https://github.com/saishpatil-coder", icon: <FaGithub /> },
    { href: "https://linkedin.com/in/saishpatil-coder", icon: <FaLinkedin /> },
    { href: "https://leetcode.com/saishpatil", icon: <FaCode /> }, // LeetCode placeholder
    { href: "mailto:saishpatil.coder@gmail.com", icon: <FaEnvelope /> },
  
  
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white"
                  variants={socialLinkVariants}
                  whileHover="hover"
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            variants={rightContentVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-purple-500 opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/profile.jpg"
                  alt="Saish Sachin Patil"
                  className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/20 shadow-xl"
                />
                <motion.div
                  className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                  custom={0}
                  animate="animate"
                  variants={floatVariants}
                >
                  <FaCode className="text-white text-sm" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                  custom={1}
                  animate="animate"
                  variants={floatVariants}
                >
                  <FaTrophy className="text-white text-sm" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
