"use client";

import { motion } from "framer-motion";

type ProgressProps = {
  progress: number;
};

export const Progress = ({ progress }: ProgressProps) => {
  return (
    <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-800 ">
      <motion.div
        className="h-full rounded-full bg-indigo-500 drop-shadow-[0_0_8px_rgb(129_140_248)]"
        animate={{
          width: `${Math.max(0, Math.min(progress, 1)) * 100}%`,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.1,
        }}
      />
    </div>
  );
};
