"use client";

import { Badge } from "@/components/ui/badge";
import { Technology } from "@/typings";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c15]"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/80 to-purple-500/80 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-[1px] rounded-[calc(1rem-1px)] bg-[#12111f]" />

      <div className="relative z-10 flex h-full flex-col p-5 md:p-6">
        <div className="relative mb-4 h-[160px] w-full overflow-hidden rounded-xl md:h-[180px]">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12111f]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-[#0891B2]/90 px-3 py-1 text-xs font-medium text-white opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            View live
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        <h3 className="mb-2 text-left text-lg font-bold text-white font-arvo md:text-xl">
          {title}
        </h3>

        <p className="mb-4 flex-grow text-left text-sm leading-relaxed text-gray-300 line-clamp-4">
          {summary}
        </p>

        {technologies.length > 0 && (
          <div className="mt-auto pt-2">
            <p className="mb-2 text-left text-[10px] uppercase tracking-[0.2em] text-gray-500">
              Built with
            </p>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tag: Technology) => (
                <Badge
                  key={tag._id ?? tag.title}
                  variant="outline"
                  className="border-[#242424] bg-[#0a0c15]/50 text-[11px] text-gray-400 font-normal"
                >
                  {tag.title}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
