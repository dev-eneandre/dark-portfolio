"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "@/typings";
import { profileImages } from "@/lib/profileImages";
import { motion, useReducedMotion } from "framer-motion";
import {
  defaultTransition,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "@/lib/motion";

type Props = {
  pageInfo: PageInfo;
};

function Hero({ pageInfo }: Props) {
  const prefersReducedMotion = useReducedMotion();

  const [text] = useTypewriter({
    words: [
      `Hey, i'm ${pageInfo?.name}`,
      "A-girl-who-loves-Design",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">
      <BackgroundCircles />

      <motion.div
        className="relative z-20 flex flex-col items-center space-y-6 max-w-3xl"
        variants={staggerContainer}
        {...motionProps}
      >
        <motion.div variants={scaleIn} transition={defaultTransition}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-full h-36 w-36 md:h-40 md:w-40 mx-auto object-cover object-top ring-2 ring-[#0891B2]/30 ring-offset-2 ring-offset-[#0a0c15]"
            src={profileImages.hero}
            alt={`${pageInfo?.name}'s profile`}
          />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          transition={defaultTransition}
          className="text-sm md:text-base uppercase font-medium text-[#0891B2] tracking-[0.35em]"
        >
          {pageInfo?.role}
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.05 }}
          className="text-2xl sm:text-3xl lg:text-5xl font-semibold font-arvo leading-tight px-2"
        >
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#0891B2" />
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-1"
        >
          <Link href="#contact">
            <button className="bg-[#0891B2] hover:bg-[#0e7490] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c15]">
              Let&apos;s Talk
            </button>
          </Link>
          <Link href="/resume/Andre.pdf" target="_blank" rel="noopener noreferrer">
            <button className="heroButton border-[#0891B2]/40 text-[#0891B2]/90 hover:border-[#0891B2] hover:text-[#0891B2]">
              Resume
            </button>
          </Link>
        </motion.div>

        <motion.nav
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 pt-2"
          aria-label="Page sections"
        >
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
        </motion.nav>
      </motion.div>
    </div>
  );
}

export default Hero;
