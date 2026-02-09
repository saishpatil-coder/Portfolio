import React from "react";
import SkillCard from "./SkillCard";
import { FaLaptopCode, FaServer, FaWrench, FaCode } from "react-icons/fa";

const skills = [
  {
    title: "Frontend",
    icon: <FaLaptopCode className="text-cyan-400 text-xl" />,
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <FaServer className="text-green-400 text-xl" />,
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: <FaWrench className="text-yellow-400 text-xl" />,
    items: ["Git", "VS Code", "Postman", "Chrome DevTools"],
  },
  {
    title: "Languages",
    icon: <FaCode className="text-purple-400 text-xl" />,
    items: ["C++", "C", "JavaScript", "Java", "Python"],
  },
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-2">
      {skills.map((category, index) => (
        <SkillCard
          key={index}
          title={category.title}
          icon={category.icon}
          items={category.items}
        />
      ))}
    </div>
  );
}
