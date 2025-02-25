"use client";

import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

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
    <div className="px-20">
      <h3 className="text-center pb-5 uppercase tracking-[8px] text-[#E0E0E0]/80 text-3xl leading-relaxed">
        KINDLY CLICK TO VIEW EACH PROJECT LIVE
      </h3>

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {projects?.map((project) => (
          <ProjectCard
            key={project.title}
            linkToBuild={project.linkToBuild}
            imageUrl={urlFor(project.image).url()}
            summary={project.summary}
            technologies={project.technologies}
            title={project.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
