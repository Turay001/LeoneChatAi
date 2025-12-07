import { motion } from "motion/react";

export function ScanningAnimation() {
  return (
    <div className="relative w-full h-24 overflow-hidden rounded-xl bg-white/5 border border-white/10">
      {/* Scanning line */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#00E5FF] to-transparent"
        animate={{
          left: ["0%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-1 h-full p-2">
          {Array.from({ length: 48 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-[#00E5FF] rounded-sm"
              animate={{
                opacity: [0.1, 0.5, 0.1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.05,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Status text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="text-[#00E5FF] text-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          Analyzing threat patterns...
        </motion.span>
      </div>
    </div>
  );
}
