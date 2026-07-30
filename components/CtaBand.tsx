"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { defaultTransition, fadeInUp } from "@/lib/motion";

export default function CtaBand() {
  const prefersReducedMotion = useReducedMotion();
  const motionProps = prefersReducedMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-60px" } };

  return (
    <motion.div
      variants={fadeInUp}
      transition={defaultTransition}
      {...motionProps}
      className="mt-16 md:mt-20 mx-auto max-w-3xl rounded-2xl border border-[#242424] bg-[#0f121f]/80 backdrop-blur-sm px-6 py-8 md:px-10 md:py-10 text-center"
    >
      <p className="text-lg md:text-xl font-arvo text-[#E0E0E0] mb-2">
        Open to remote frontend roles
      </p>
      <p className="text-sm text-gray-400 mb-6">
        Let&apos;s talk about how I can contribute to your team.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="#contact">
          <button className="bg-[#0891B2] hover:bg-[#0e7490] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f121f]">
            Let&apos;s Talk
          </button>
        </Link>
        <Link href="/resume/Andre.pdf" target="_blank" rel="noopener noreferrer">
          <button className="heroButton border-[#0891B2]/40 text-[#0891B2]/90 hover:border-[#0891B2] hover:text-[#0891B2]">
            View Resume
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
