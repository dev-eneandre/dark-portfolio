import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article
      className="flex flex-col justify-between space-y-6 rounded-lg items-start flex-shrink-0
    xl:h-[60vh] w-[500px] md:w-[600px] xl:w-[850px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <p className="text-4xl font-arvo font-[500] !mb-5">
        {experience?.jobTitle} @ {experience?.companyName}
      </p>

      {/* <h4 className="text-sm font-light">{experience?.company}</h4> */}
      <ul className="!list-disc list-inside space-y-4 text-lg h-80 overflow-y-scroll scrollbar-thin ">
        {experience.points.map((point, i) => (
          <li className="text-sm" key={i}>
            {point}
          </li>
        ))}
      </ul>
      <div className="flex space-x-2 my-2">
        {experience?.technologies.map((tech) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={tech._id}
            src={urlFor(tech.image).url() || "/image/Andre1565.jpeg"}
            className="h-10 w-10 object-cover rounded-full"
            alt="technologies"
          />
        ))}
      </div>
      <p className="uppercase py-5 text-gray-300">
        {new Date(experience?.dateStarted).toDateString()} -{" "}
        {experience.isCurrentlyWorkingHere
          ? "Present"
          : new Date(experience?.dateEnded).toDateString()}
      </p>
    </article>
  );
};

export default ExperienceCard;
