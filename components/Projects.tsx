"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  projects.sort((a, b) => {
    const dateA = new Date(a._createdAt).getTime();
    const dateB = new Date(b._createdAt).getTime();

    return dateB - dateA;
  });

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
      className="h-screen relative overflow-hidden flex-col
    
     text-left md:flex-row max-w-full justify-center mx-auto items-center z-0"
    >
      <h3 className="absolute w-full  lg:top-24 top-6 text-center uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#a84b4b]/80">
        {projects?.map((project, i) => (
          <Link
            href={project.linkToBuild}
            target="_blank"
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              src={urlFor(project.image).url()}
              className="w-[80vh] h-2/3 rounded-md object-cover object-center"
              alt="Project Image"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="md:text-4xl text-2xl font-arvo font-[500] text-center underline decoration-[#a84b4b]/50 underline-offset-8">
                <span className="">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex flex-row space-x-3 items-center justify-center">
                {project.technologies.map((technology, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    className="h-9 w-9 "
                    src={urlFor(technology.image).url()}
                    alt="technology"
                  />
                ))}
              </div>
              <p className="text-lg !text-center md:text-left md:max-w-[50%] mx-auto">
                {project.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#a84b4b]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
