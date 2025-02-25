"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "@/typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="min-h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute lg:top-24 top-16 uppercase tracking-[20px] text-[#E0E0E0]/80 text-2xl">
        Skills
      </h3>

      <h3 className="absolute  lg:top-36 top-24 uppercase tracking-[3px] text-[#E0E0E0]/80  text-sm">
        Hover over a skill for currency proficiency
      </h3>

      <div className="flex justify-center">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
