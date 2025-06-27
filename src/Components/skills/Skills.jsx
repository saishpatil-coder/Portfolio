import React from 'react';
import Skill from './Skill';
import { skills } from '../../assets/Info';

export default function Skills() {
  return (
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 place-items-center mx-auto max-w-5xl">
      {skills.map((skill, index) => (
        <Skill
          key={skill.key}
          src={skill.src}
          desc={skill.desc}
          delay={index * 0.3} // Staggered delay for wave-like effect
        />
      ))}
    </div>
  );
}