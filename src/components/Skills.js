import React from "react";
import { FaTools, FaPaintBrush, FaLaptopCode, FaDraftingCompass } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "D5", level: "Intermediate", icon: <FaDraftingCompass /> },
    { name: "Enscape", level: "Advanced", icon: <FaTools /> },
    { name: "AutoCad", level: "Expert", icon: <FaDraftingCompass /> },
    { name: "SketchUp", level: "Advanced", icon: <FaTools /> },
    { name: "Lumion", level: "Advanced", icon: <FaLaptopCode /> },
    { name: "Rendering", level: "Intermediate", icon: <FaPaintBrush /> },
    { name: "Photoshop", level: "Advanced", icon: <FaPaintBrush /> },
    { name: "Filmora", level: "Intermediate", icon: <FaLaptopCode /> },
  ];

  return (
    <div className="mt-64 w-full text-center md:text-6xl md:mt-32 text-white ">
      <div className="container mx-auto text-center">
      <h2 className='font-bold text-8xl  w-full text-center text-white md:text-6xl xs:text-4xl mb-4'>Skills</h2>
        <p className="text-gray-400 text-sm mb-10">
          Showcasing my proficiencies and creative expertise.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e1e1e] shadow-md rounded-lg p-5 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <div className="text-[#2979FF] text-4xl mb-2">{skill.icon}</div>
              <h3 className="text-sm font-semibold text-white ">{skill.name}</h3>
              <p className="text-xs text-gray-400 tracking-tighter ">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
