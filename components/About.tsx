"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PageInfo } from "@/typings";
import { profileImages } from "@/lib/profileImages";
import SectionHeader from "./SectionHeader";
import { defaultTransition, fadeInUp } from "@/lib/motion";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const motionProps = prefersReducedMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } };

  return (
    <div className="min-h-screen flex flex-col justify-center max-w-7xl px-4 md:px-10 py-24 md:py-28 mx-auto">
      <SectionHeader
        label="About"
        title="Here is a little about me"
        className="mb-10 md:mb-14"
      />

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-16">
        <motion.div
          variants={fadeInUp}
          transition={defaultTransition}
          {...motionProps}
          className="shrink-0"
        >
          <div className="relative h-44 w-44 overflow-hidden rounded-2xl ring-1 ring-[#242424] shadow-lg shadow-black/30 md:h-72 md:w-56 xl:h-[380px] xl:w-[320px]">
            <Image
              src={profileImages.about}
              alt={pageInfo.name}
              fill
              sizes="(max-width: 768px) 176px, (max-width: 1280px) 224px, 320px"
              className="object-cover object-top"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.08 }}
          {...motionProps}
          className="max-w-2xl text-center md:text-left"
        >
          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-nuni-sans text-justify md:text-left">
            {pageInfo.backgroundInformation}
          </p>
          {pageInfo.moreBackgroundInformation ? (
            <p className="mt-6 text-base md:text-lg text-gray-300 leading-relaxed font-nuni-sans text-justify md:text-left">
              {pageInfo.moreBackgroundInformation}
            </p>
          ) : null}
        </motion.div>
      </div>
    </div>
  );
}

export default About;
