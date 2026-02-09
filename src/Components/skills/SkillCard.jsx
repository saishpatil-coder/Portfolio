import React from "react";

export default function SkillCard({ title, icon, items, image }) {
  return (
    <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-cyan-500/10 transition duration-300 ease-in-out">
      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 font-poppins">
        {icon}
        {title}
      </h3>

      {/* Certificate image */}
      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt="Certificate"
            className="rounded-lg border border-white/5 shadow-md w-full"
          />
        </div>
      )}

      {/* Skills or certificate links */}
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span
            key={idx}
            className={`${
              typeof item === "string"
                ? "bg-[#1f2937] text-gray-200 text-sm px-3 py-1 rounded-full font-medium font-poppins hover:bg-cyan-600 hover:text-white transition"
                : ""
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
