"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
      <h3 className="text-center pb-5 uppercase tracking-[10px] text-gray-500 text-3xl leading-relaxed">
        KINDLY CLICK TO VIEW EACH PROJECT LIVE
      </h3>

      <Carousel>
        <CarouselContent className="-ml-4">
          {projects?.map((project, i) => (
            <CarouselItem className="2xl:basis-1/3 xl:basis-1/2 basis-full pl-4">
              {" "}
              <Link
                href={project.linkToBuild}
                target="_blank"
                key={i}
                className="flex flex-col gap-y-3 items-center justify-center p-2 md:p-4"
              >
                <div className="rounded-lg lg:h-[400px] lg:w-[500px] h-[400px] w-[400px] overflow-hidden">
                  <Image
                    src={urlFor(project.image).url()}
                    alt="Project Image"
                    width={600}
                    height={300}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                  <h4 className="md:text-2xl text-xl font-arvo font-[500] text-center underline decoration-[#a84b4b]/50 underline-offset-8">
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
                  <p className="text-base text-center md:text-left  mx-auto">
                    {project.summary}
                  </p>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Projects;
