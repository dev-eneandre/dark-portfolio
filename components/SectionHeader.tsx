"use client";

import { motion, useReducedMotion } from "framer-motion";
import { defaultTransition, fadeInUp } from "@/lib/motion";

type Props = {
  label: string;
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeader({
  label,
  title,
  subtitle,
  className = "",
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const motionProps = prefersReducedMotion
    ? { initial: false, animate: "visible" }
    : { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-80px" } };

  return (
    <motion.header
      variants={fadeInUp}
      transition={defaultTransition}
      {...motionProps}
      className={`text-center ${className}`}
    >
      <p className="uppercase tracking-[0.35em] text-[#0891B2] text-xs font-medium mb-3">
        {label}
      </p>
      {title && (
        <h2 className="text-2xl md:text-3xl font-arvo text-[#E0E0E0] font-medium">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-3 text-sm md:text-base text-gray-400 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.header>
  );
}
