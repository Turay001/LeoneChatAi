import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  neon?: boolean;
}

export function GlassCard({ children, className = "", neon = false }: GlassCardProps) {
  return (
    <div
      className={`backdrop-blur-xl bg-white/5 rounded-2xl border ${
        neon ? "border-[#00E5FF]/30 shadow-[0_0_30px_rgba(0,229,255,0.15)]" : "border-white/10"
      } ${className}`}
    >
      {children}
    </div>
  );
}
