"use client";

import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";
import CtaBand from "./CtaBand";
import { defaultTransition, fadeInUp, staggerContainer } from "@/lib/motion";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const sorted = [...projects].sort(
    (a, b) => new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  );

  const gridMotion = prefersReducedMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-40px" } };

  return (
    <div className="min-h-screen flex flex-col justify-center px-4 md:px-10 lg:px-20 py-24 md:py-28">
      <SectionHeader
        label="Projects"
        title="Selected Work"
        subtitle="Real products built end-to-end — click any card to view the live build."
        className="mb-10 md:mb-14"
      />

      <motion.div
        variants={staggerContainer}
        {...gridMotion}
        className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {sorted.map((project, index) => (
          <motion.div
            key={project._id}
            variants={fadeInUp}
            transition={{ ...defaultTransition, delay: index * 0.05 }}
          >
            <ProjectCard
              linkToBuild={project.linkToBuild}
              imageUrl={urlFor(project.image).url()}
              summary={project.summary}
              technologies={project.technologies}
              title={project.title}
            />
          </motion.div>
        ))}
      </motion.div>

      <CtaBand />
    </div>
  );
}

export default Projects;
