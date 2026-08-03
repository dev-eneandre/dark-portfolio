"use client";

import { Experience } from "@/typings";
import { urlFor } from "@/lib/sanityClient";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  const dateRange = `${new Date(experience.dateStarted).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })} – ${
    experience.isCurrentlyWorkingHere
      ? "Present"
      : new Date(experience.dateEnded).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })
  }`;

  return (
    <article className="group flex h-full min-h-[420px] xl:min-h-[480px] w-[85vw] sm:w-[480px] md:w-[560px] xl:w-[720px] flex-col rounded-xl border border-[#242424] border-l-[3px] border-l-[#0891B2] bg-[#0f121f] p-6 md:p-8 transition-all duration-300 hover:border-[#0891B2]/40 hover:shadow-lg hover:shadow-[#0891B2]/5">
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.2em] text-[#0891B2] mb-2">
          {dateRange}
        </p>
        <h3 className="text-xl md:text-2xl font-arvo font-medium text-white leading-snug">
          {experience.jobTitle}
        </h3>
        <p className="mt-1 text-sm text-gray-400">{experience.companyName}</p>
      </div>

      <ul className="flex-grow space-y-3 overflow-y-auto scrollbar-thin pr-1 mb-4">
        {experience.points.map((point, i) => (
          <li
            key={i}
            className="text-sm text-gray-300 leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-[#0891B2]/70"
          >
            {point}
          </li>
        ))}
      </ul>

      {experience.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-4 border-t border-[#242424]">
          {experience.technologies.map((tech) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={tech._id}
              src={urlFor(tech.image).url()}
              className="h-8 w-8 object-cover rounded-full ring-1 ring-[#242424] transition-transform duration-200 group-hover:scale-105"
              alt={tech.title}
              title={tech.title}
            />
          ))}
        </div>
      )}
    </article>
  );
};

export default ExperienceCard;
