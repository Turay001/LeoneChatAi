import { useLocation } from "react-router";
import { MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export function FloatingActionButton() {
  const location = useLocation();
  
  // Show on all pages
  return (
    <a
      href="https://wa.me/23274260405?text=Send%20me%20the%20chatbot's%20contact"
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.button
        className="fixed bottom-6 right-6 z-40 size-14 md:size-16 rounded-full bg-[#00A36C] hover:bg-[#00A36C]/90 text-white shadow-[0_0_30px_rgba(0,163,108,0.4)] hover:shadow-[0_0_40px_rgba(0,163,108,0.6)] flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageSquare className="size-6 md:size-7" strokeWidth={2} />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#00A36C] animate-ping opacity-20"></span>
        
        {/* Tooltip on hover - desktop only */}
        <span className="hidden md:block absolute right-full mr-4 px-4 py-2 bg-black/80 backdrop-blur-xl text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
          Chat on WhatsApp
        </span>
      </motion.button>
    </a>
  );
}