import { Link, useLocation } from "react-router";
import { Shield, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/reporting-hub", label: "Reporting Hub" },
    { path: "/threat-dashboard", label: "Threat Dashboard" },
    { path: "/how-it-works", label: "How It Works" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00E5FF] blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <Shield className="size-10 text-[#00E5FF] relative" strokeWidth={1.5} />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-white tracking-tight">LeoneChat</span>
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest">AI Cyber Watchdog</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-all relative group ${
                  isActive(link.path) ? "text-[#00E5FF]" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-6 left-0 right-0 h-0.5 bg-[#00E5FF] transition-transform origin-left ${
                    isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-black/80 border-t border-white/10">
          <nav className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-all ${
                  isActive(link.path)
                    ? "bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}