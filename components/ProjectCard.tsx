"use client";

import { Badge } from "@/components/ui/badge";
import { Technology } from "@/typings";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  summary: string;
  imageUrl: string;
  technologies: Technology[];
  linkToBuild: string;
}

export default function ProjectCard({
  title,
  summary,
  imageUrl,
  technologies,
  linkToBuild,
}: ProjectCardProps) {
  return (
    <Link
      href={linkToBuild}
      target="_blank"
      className="group relative overflow-hidden rounded-lg bg-slate-900 p-6 transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Gradient border */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-[2rem]" />

      {/* Dark overlay for readability */}
      <div className="absolute inset-[2px] bg-[#12111f] rounded-[calc(2rem-2px)] opacity-90" />

      {/* Inner content wrapper */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Ensure image has a defined height */}
        <div className="relative w-full h-[180px] mb-4 overflow-hidden rounded-lg">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Project Details */}
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-sm text-slate-300 line-clamp-3">{summary}</p>

        {/* Technologies List */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tag: Technology) => (
            <Badge
              key={tag.title}
              className="text-xs border border-slate-200 rounded-full"
            >
              #{tag.title}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
