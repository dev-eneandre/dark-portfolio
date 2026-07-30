"use client";

import React, { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion, useReducedMotion } from "framer-motion";
import { Social } from "@/typings";
import Link from "next/link";
import { defaultTransition } from "@/lib/motion";

type Props = {
  socials: Social[];
};

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ socials }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = document.querySelector("[data-scroll-container]");
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const maxScroll = scrollHeight - clientHeight;
      setScrollProgress(maxScroll > 0 ? scrollTop / maxScroll : 0);
    };

    handleScroll();
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const headerMotion = prefersReducedMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <header className="sticky top-0 z-50 w-full">
      <motion.div
        variants={{ hidden: { opacity: 0, y: -8 }, visible: { opacity: 1, y: 0 } }}
        transition={defaultTransition}
        {...headerMotion}
        className="backdrop-blur-md bg-[#0a0c15]/80 border-b border-[#242424]/60"
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 md:px-6 py-3 gap-4">
          <div className="flex items-center gap-1 min-w-0">
            {socials.map((social) => (
              <SocialIcon
                key={social._id}
                url={social.url}
                fgColor="gray"
                bgColor="transparent"
                className="!h-7 !w-7 hover:scale-110 transition-transform duration-200"
              />
            ))}
          </div>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs uppercase tracking-widest text-gray-400 hover:text-[#0891B2] transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/resume/Andre.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-4 py-1.5 text-xs uppercase tracking-widest text-gray-300 border border-[#242424] rounded-full hover:border-[#0891B2]/50 hover:text-[#0891B2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2]"
            >
              Resume
            </Link>
            <Link href="#contact">
              <button className="bg-[#0891B2] hover:bg-[#0e7490] text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0891B2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0c15]">
                Hire Me
              </button>
            </Link>
          </div>
        </div>

        <div
          className="h-0.5 bg-[#0891B2] origin-left transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />
      </motion.div>
    </header>
  );
}
