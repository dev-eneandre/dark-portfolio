"use client";

import { motion, useReducedMotion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import SectionHeader from "./SectionHeader";
import { Experience } from "@/typings";
import { defaultTransition, fadeInUp, staggerContainer } from "@/lib/motion";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const motionProps = prefersReducedMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-40px" } };

  return (
    <div className="min-h-screen flex flex-col justify-center relative max-w-full py-24 md:py-28">
      <div className="px-4 md:px-10 mb-8 md:mb-10">
        <SectionHeader
          label="Experience"
          title="Where I've worked"
          subtitle="Scroll to explore roles, impact, and the tools I used."
        />
      </div>

      <motion.div
        variants={staggerContainer}
        {...motionProps}
        className="w-full flex gap-5 overflow-x-auto px-4 md:px-10 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#0891B2]/80"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={experience._id}
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: index * 0.06 }}
            className="snap-center"
          >
            <ExperienceCard experience={experience} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default WorkExperience;
