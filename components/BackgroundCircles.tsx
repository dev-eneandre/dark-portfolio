"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

function BackgroundCircles() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className="absolute h-[500px] w-[500px] rounded-full border border-[#333333]/40 opacity-30" />
        <div className="absolute h-[650px] w-[650px] rounded-full border border-[#8c447b]/20 opacity-20" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute h-[280px] w-[280px] rounded-full border border-[#333333]/50 opacity-40" />
      <div className="absolute h-[420px] w-[420px] rounded-full border border-[#333333]/30 opacity-30" />
      <motion.div
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[560px] w-[560px] rounded-full border border-[#8c447b]/30"
      />
      <div className="absolute h-[700px] w-[700px] rounded-full border border-[#333333]/20" />
    </motion.div>
  );
}

export default BackgroundCircles;
