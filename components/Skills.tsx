"use client";

import { motion, useReducedMotion } from "framer-motion";
import Skill from "./Skill";
import SectionHeader from "./SectionHeader";
import { Skill as SkillType } from "@/typings";
import { defaultTransition, fadeInUp, staggerContainer } from "@/lib/motion";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  const prefersReducedMotion = useReducedMotion();
  const motionProps = prefersReducedMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-60px" } };

  return (
    <div className="min-h-screen flex flex-col justify-center px-4 md:px-10 py-24 md:py-28 max-w-5xl mx-auto">
      <SectionHeader
        label="Skills"
        title="Tools & technologies"
        subtitle="Hover over a skill to see current proficiency."
        className="mb-10 md:mb-14"
      />

      <motion.div
        variants={staggerContainer}
        {...motionProps}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6 justify-items-center"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill._id}
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: (index % 12) * 0.03 }}
          >
            <Skill skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
