import React from 'react';

export default function Skill({ src, desc, delay }) {
  return (
    <div className="flex flex-col items-center text-center group animate-wave" style={{ animationDelay: `${delay}s` }}>
      {/* Icon wrapper with gradient */}
      <div className="relative flex items-center justify-center mb-2">
        <div className="w-20 h-20 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-purple-400 via-cyan-400 to-pink-400 p-[2px] group-hover:animate-pulse">
          <div className="w-full h-full bg-slate-900/90 rounded-full flex items-center justify-center">
            <img
              src={src}
              alt={desc}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-lg"
            />
          </div>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>
      {/* Label */}
      <p className="text-xs sm:text-sm text-white font-semibold tracking-wide font-poppins drop-shadow-md">
        {desc}
      </p>
    </div>
  );
}