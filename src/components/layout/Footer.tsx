import { Shield, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="backdrop-blur-xl bg-white/5 border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="size-8 text-[#00E5FF]" strokeWidth={1.5} />
              <div>
                <div className="text-white tracking-tight">LeoneChat</div>
                <div className="text-xs text-gray-400">AI Cyber Watchdog</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              Your 24/7 WhatsApp chatbot protecting Sierra Leone from scams and misinformation.
              Chat with LeoneChat to verify information, detect scams, and stay safe online.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00E5FF]/30 transition-all"
                aria-label="Facebook"
              >
                <Facebook className="size-4 text-gray-400 hover:text-[#00E5FF] transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00E5FF]/30 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="size-4 text-gray-400 hover:text-[#00E5FF] transition-colors" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00E5FF]/30 transition-all"
                aria-label="Instagram"
              >
                <Instagram className="size-4 text-gray-400 hover:text-[#00E5FF] transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-white mb-4">Quick Links</h6>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-[#00E5FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/reporting-hub"
                  className="text-sm text-gray-400 hover:text-[#00E5FF] transition-colors"
                >
                  Report Scam
                </Link>
              </li>
              <li>
                <Link
                  to="/threat-dashboard"
                  className="text-sm text-gray-400 hover:text-[#00E5FF] transition-colors"
                >
                  Threat Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="text-sm text-gray-400 hover:text-[#00E5FF] transition-colors"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="text-white mb-4">Legal</h6>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00E5FF] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00E5FF] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00E5FF] transition-colors">
                  Data Protection
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-[#00E5FF] transition-colors">
                  Whistleblower Protection
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} LeoneChat. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Powered by Advanced AI & Sierra Leone National Cybersecurity
          </p>
        </div>
      </div>
    </footer>
  );
}