"use client";

import { Skill as SkillType } from "@/typings";
import { urlFor } from "@/lib/sanityClient";

type Props = {
  skill: SkillType;
};

const Skill = ({ skill }: Props) => {
  return (
    <div className="group relative flex cursor-default" title={skill.title}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={urlFor(skill.image).url()}
        alt={skill.title}
        className="rounded-full border border-[#242424] object-cover w-20 h-20 md:w-24 md:h-24 transition-all duration-300 group-hover:border-[#0891B2]/50 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#0891B2]/90 opacity-0 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
        <p className="text-lg md:text-xl font-bold text-white">{skill.progress}%</p>
      </div>
    </div>
  );
};

export default Skill;
