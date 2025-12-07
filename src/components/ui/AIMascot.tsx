import { motion } from "motion/react";

export function AIMascot() {
  return (
    <motion.div
      className="relative"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#00E5FF] rounded-full blur-2xl opacity-30 animate-pulse"></div>
        
        {/* Main body - 3D robot head */}
        <div className="relative z-10">
          {/* Head container */}
          <div className="relative">
            {/* Head */}
            <div className="relative w-full h-full">
              {/* Main head sphere */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-full shadow-2xl">
                {/* Shine/highlight */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-white/30 to-transparent rounded-full blur-sm"></div>
                
                {/* Shadow side */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-black/40 to-transparent rounded-full"></div>
              </div>

              {/* Face plate - centered on head */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-20 h-24 md:w-24 md:h-28 bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl border-2 border-[#00E5FF]/30 shadow-lg">
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-[#00E5FF]/5 rounded-2xl"></div>
                  
                  {/* Eyes container */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 md:gap-4">
                    {/* Left eye */}
                    <motion.div
                      className="relative"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-[#00E5FF] rounded-full shadow-[0_0_20px_rgba(0,229,255,0.8)]">
                        {/* Eye shine */}
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      {/* Eye glow */}
                      <div className="absolute inset-0 bg-[#00E5FF] rounded-full blur-md opacity-60"></div>
                    </motion.div>

                    {/* Right eye */}
                    <motion.div
                      className="relative"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.1,
                      }}
                    >
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-[#00E5FF] rounded-full shadow-[0_0_20px_rgba(0,229,255,0.8)]">
                        {/* Eye shine */}
                        <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      {/* Eye glow */}
                      <div className="absolute inset-0 bg-[#00E5FF] rounded-full blur-md opacity-60"></div>
                    </motion.div>
                  </div>

                  {/* Mouth/indicator line */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 md:w-12 h-1 bg-gradient-to-r from-transparent via-[#00E5FF]/60 to-transparent rounded-full">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent rounded-full"
                      animate={{
                        x: [-20, 20, -20],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  </div>
                </div>
              </div>

              {/* Antenna */}
              <motion.div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-6 md:h-8 bg-gradient-to-t from-gray-700 to-gray-600 rounded-full"
                animate={{
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Antenna tip */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00E5FF] rounded-full shadow-[0_0_15px_rgba(0,229,255,0.9)]">
                  {/* Pulsing signal */}
                  <motion.div
                    className="absolute inset-0 bg-[#00E5FF] rounded-full"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  ></motion.div>
                </div>
              </motion.div>

              {/* Side details - left ear/sensor */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2">
                <div className="w-4 h-6 md:w-5 md:h-7 bg-gradient-to-r from-gray-800 to-gray-700 rounded-l-lg border-l-2 border-[#00E5FF]/30"></div>
              </div>

              {/* Side details - right ear/sensor */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2">
                <div className="w-4 h-6 md:w-5 md:h-7 bg-gradient-to-l from-gray-800 to-gray-700 rounded-r-lg border-r-2 border-[#00E5FF]/30"></div>
              </div>
            </div>

            {/* Neck/connector */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 md:w-8 h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-lg"></div>
          </div>

          {/* Shoulders/body top */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-20 md:w-24 h-8 md:h-10 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-2xl border-t-2 border-x-2 border-[#00E5FF]/20">
            {/* Chest light indicator */}
            <motion.div
              className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#00A36C] rounded-full shadow-[0_0_10px_rgba(0,163,108,0.8)]"
              animate={{
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>
        </div>

        {/* Floating particles around mascot */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00E5FF] rounded-full"
            style={{
              top: `${30 + i * 20}%`,
              left: `${20 + i * 30}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              x: [-5, 5, -5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          ></motion.div>
        ))}
      </div>
    </motion.div>
  );
}
