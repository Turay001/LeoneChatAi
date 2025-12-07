import { motion } from "motion/react";

export function VerificationLoader() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 border-4 border-transparent border-t-[#00E5FF] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Middle rotating ring */}
      <motion.div
        className="absolute inset-3 border-4 border-transparent border-r-[#00E5FF]/60 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner rotating ring */}
      <motion.div
        className="absolute inset-6 border-4 border-transparent border-b-[#00E5FF]/40 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Center pulse */}
      <motion.div
        className="absolute inset-10 bg-[#00E5FF] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#00E5FF] rounded-full blur-2xl opacity-20"></div>
    </div>
  );
}
