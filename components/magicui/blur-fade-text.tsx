"use client";

import { cn } from "@/lib/utils";
import { motion, type Variants } from "motion/react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
}

const BlurFadeText = ({ text, className, variant, duration = 0.4, delay = 0, yOffset = 8 }: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: -yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <div className="flex">
      <motion.span
        initial="hidden"
        animate="visible"
        variants={variant || defaultVariants}
        transition={{ duration, delay, ease: "easeOut" }}
        className={cn("inline-block", className)}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default BlurFadeText;
