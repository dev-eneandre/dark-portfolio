"use client";

import React from "react";
import Image from "next/image";
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

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

function Hero({ pageInfo }: Props) {
  const prefersReducedMotion = useReducedMotion();

  const [text] = useTypewriter({
    words: [
      `Software Engineer`,
      `AI Engineer`,
      `<Frontend Developer />`,
      `<Web Developer />`,
      
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <div className="relative flex min-h-screen items-end overflow-hidden px-4 pb-16 pt-8 md:px-8 lg:pb-20">
      <BackgroundCircles />

      <motion.div
        className="relative z-20 mx-auto grid w-full max-w-[86rem] grid-cols-1 items-end gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-8"
        variants={staggerContainer}
        {...motionProps}
      >
        <motion.div
          variants={fadeInUp}
          transition={defaultTransition}
          className="order-2 flex flex-col items-center gap-4 text-center lg:order-1 lg:items-start lg:pb-6 lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#242424] bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-gray-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for work
          </span>

          <div className="flex w-full items-end justify-center lg:min-h-[5.5rem] lg:justify-start">
            <h1 className="min-w-0 break-words font-arvo text-3xl font-semibold leading-tight tracking-tight sm:text-2xl lg:text-[1.5rem] xl:text-[2rem]">
              <span className="mr-1">{text}</span>
              <Cursor cursorColor="#0891B2" />
            </h1>
          </div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          transition={defaultTransition}
          className="relative order-1 flex justify-center lg:order-2"
        >
          <div
            aria-hidden="true"
            className="absolute bottom-6 left-1/2 h-3/4 w-[110%] -translate-x-1/2 rounded-full bg-[#0891B2]/10 blur-3xl"
          />
          <div className="relative aspect-[3/4] h-[30vh] overflow-hidden rounded-t-full min-[390px]:h-[36vh] sm:h-[44vh] lg:h-[66vh] xl:h-[72vh]">
            <Image
              src={profileImages.hero}
              alt={`${pageInfo?.name}'s portrait`}
              fill
              priority
              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 45vw, 35vw"
              className="object-cover object-top"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0a0c15] from-15% via-[#0a0c15]/70 to-transparent"
            />
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.05 }}
          className="order-3 flex flex-col items-center gap-4 text-center lg:items-start lg:self-center lg:text-left"
        >
          <p className="text-sm uppercase font-semibold tracking-[0.2em] text-[#0891B2]">
            Hi there, I'm Andre, 
          </p>

          <p className="max-w-md font-nuni-sans text-sm leading-relaxed text-gray-400 line-clamp-3 lg:text-base lg:line-clamp-5">
          I enjoy building software that combines product thinking, data, and AI to solve real-world problems. </p>

          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link href="#contact">
              <button className="rounded-full bg-[#0891B2] px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-[#0e7490] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c15]">
                Let&apos;s Talk
              </button>
            </Link>
            <Link
              href="/resume/Andre.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="heroButton border-[#0891B2]/40 text-[#0891B2]/90 hover:border-[#0891B2] hover:text-[#0891B2]">
                Resume
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.nav
          variants={fadeInUp}
          transition={{ ...defaultTransition, delay: 0.1 }}
          className="order-4 flex flex-wrap items-center justify-center gap-2 lg:hidden"
          aria-label="Page sections"
        >
          {sectionLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <button className="heroButton">{link.label}</button>
            </Link>
          ))}
        </motion.nav>
      </motion.div>
    </div>
  );
}

export default Hero;
