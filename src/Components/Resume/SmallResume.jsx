import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

export default function SmallResume() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Saish_Patil_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center items-center py-16 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-6 flex gap-6 w-full max-w-[600px]">
        
        {/* Profile Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/profile.jpg"
              alt="Saish Patil"
              className="w-16 h-16 rounded-full object-cover border-4 border-purple-500 shadow-md"
            />
            <div>
              <h3 className="text-white text-xl font-bold">Saish Patil</h3>
              <p className="text-purple-300 text-sm">Full Stack Developer</p>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={downloadResume}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 transition-all"
            >
              <FaDownload className="text-xs" /> Download Resume
            </button>

            <a
              href="/resume"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-teal-600 hover:to-emerald-500 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEye className="text-xs" /> View Resume
            </a>
          </div>
        </div>

        {/* A4 Resume Preview */}
        <div className="w-[120px] h-[170px] rounded-lg overflow-hidden border border-gray-200 bg-white shadow-md">
          <img
            src="/resume/resume.png"
            alt="Resume Preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
