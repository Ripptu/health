"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: { text: string; name: string; role: string }[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role }, i) => (
                <div className="p-8 rounded-2xl border border-white/10 shadow-lg bg-[#121212] max-w-xs w-full" key={i}>
                  <div className="text-white/80 text-sm font-light leading-relaxed mb-6">"{text}"</div>
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                      <div className="font-serif italic text-white text-lg tracking-tight leading-5 mb-1">{name}</div>
                      <div className="text-[#C5A059] text-[10px] uppercase tracking-widest">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
