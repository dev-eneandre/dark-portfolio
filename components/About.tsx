"use client";
import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
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
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        About
      </h3>

      <motion.img
        src={urlFor(pageInfo.profilePic).url()}
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-56 md:h-80 xl:w-[400px] xl:h-[450px] "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-[500] capitalize font-arvo">
          Here is a little about me 
        </h4>
        <p className="text-lg text-gray-50 text-justify nuni-sans ">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
