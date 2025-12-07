import { Link } from "react-router";
import { Shield, AlertTriangle, Brain, Lock, Zap, FileCheck, MessageSquare, QrCode } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";
import { Button } from "../components/ui/button";
import { PageTransition } from "../components/layout/PageTransition";
import { AIMascot } from "../components/ui/AIMascot";

export function Home() {
  const features = [
    {
      icon: MessageSquare,
      title: "Chat with LeoneChat",
      description: "Simply send a message on WhatsApp. Forward suspicious messages or ask questions - LeoneChat responds instantly.",
    },
    {
      icon: Brain,
      title: "AI-Powered Verification",
      description: "LeoneChat uses advanced AI to analyze messages, detect scams, and verify information against official sources.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get verified answers in seconds. No apps to download, no registration required - just WhatsApp.",
    },
    {
      icon: Lock,
      title: "100% Anonymous",
      description: "Your conversations are private and encrypted. Report scams safely with full legal protection.",
    },
  ];

  const stats = [
    { value: "24/7", label: "Available on WhatsApp" },
    { value: "15,000+", label: "Messages Verified" },
    { value: "94%", label: "Accuracy Rate" },
    { value: "500K+", label: "Citizens Protected" },
  ];

  const howToSteps = [
    {
      step: "1",
      title: "Open WhatsApp",
      description: "Click the button below or scan the QR code",
    },
    {
      step: "2",
      title: "Start Chatting",
      description: "Send 'Hello' to LeoneChat to begin",
    },
    {
      step: "3",
      title: "Get Verified Answers",
      description: "Forward suspicious messages or ask questions",
    },
  ];

  return (
    <PageTransition>
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00E5FF] rounded-full blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: "1s" }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* AI Mascot floating above the badge */}
            <div className="flex justify-center mb-4">
              <AIMascot />
            </div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 mb-8">
              <Shield className="size-4 text-[#00E5FF]" />
              <span className="text-sm text-[#00E5FF]">Official Sierra Leone Cyber Watchdog</span>
            </div>
            
            <h1 className="text-white mb-6">
              Meet LeoneChat.<br />Your AI Truth Guardian on WhatsApp.
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              LeoneChat is your 24/7 WhatsApp chatbot that instantly verifies information,
              detects scams, and protects you from digital threats. No app needed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://wa.me/23274260405?text=Send%20me%20the%20chatbot's%20contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00A36C] hover:bg-[#00A36C]/90 text-white rounded-xl transition-all shadow-[0_0_30px_rgba(0,163,108,0.3)] hover:shadow-[0_0_40px_rgba(0,163,108,0.5)]"
              >
                <MessageSquare className="size-5" />
                <span>Open WhatsApp Chat</span>
              </a>
              <Link to="/how-it-works">
                <Button
                  variant="ghost"
                  className="px-8 py-6 h-auto text-gray-300 hover:text-white hover:bg-white/5 rounded-xl"
                >
                  Learn More About LeoneChat
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <div className="text-3xl text-[#00E5FF] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">How to Use LeoneChat</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access your AI truth guardian in three simple steps. No app downloads, no registration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {howToSteps.map((item, index) => (
              <div key={index} className="relative">
                <GlassCard className="p-8 text-center h-full">
                  <div className="inline-flex items-center justify-center size-16 rounded-full bg-[#00E5FF]/10 border-2 border-[#00E5FF] text-[#00E5FF] mb-6 text-2xl">
                    {item.step}
                  </div>
                  <h4 className="text-white mb-3">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </GlassCard>
                {index < howToSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00E5FF] to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What LeoneChat Can Do Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">What Can LeoneChat Do?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your intelligent chatbot protecting Sierra Leone from scams and misinformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <GlassCard key={index} className="p-8 hover:border-[#00E5FF]/30 transition-all group">
                <div className="mb-4 relative inline-block">
                  <div className="absolute inset-0 bg-[#00E5FF] blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <feature.icon className="size-12 text-[#00E5FF] relative" strokeWidth={1.5} />
                </div>
                <h4 className="text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Example Conversations */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white mb-4">See LeoneChat in Action</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real examples of how citizens use LeoneChat every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Example 1: Scam Detection */}
            <GlassCard className="p-8">
              <h4 className="text-[#00E5FF] mb-6">🛡️ Scam Detection</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 size-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
                    👤
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-2xl rounded-tl-none p-4">
                    <p className="text-sm text-gray-300">
                      I received this message: "Congratulations! You won $50,000. Send $200 processing fee to claim."
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="flex-1 bg-[#00A36C]/20 rounded-2xl rounded-tr-none p-4 border border-[#00A36C]/30">
                    <p className="text-sm text-gray-300">
                      ⚠️ <strong className="text-[#00E5FF]">SCAM DETECTED!</strong><br/>
                      This is a common advance-fee fraud. Never send money to claim prizes. Reported to our database.
                    </p>
                  </div>
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#00A36C] flex items-center justify-center text-sm">
                    🤖
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Example 2: Information Verification */}
            <GlassCard className="p-8">
              <h4 className="text-[#00E5FF] mb-6">✅ Information Verification</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 size-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
                    👤
                  </div>
                  <div className="flex-1 bg-gray-800/50 rounded-2xl rounded-tl-none p-4">
                    <p className="text-sm text-gray-300">
                      Is it true the government is banning mobile money?
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="flex-1 bg-[#00A36C]/20 rounded-2xl rounded-tr-none p-4 border border-[#00A36C]/30">
                    <p className="text-sm text-gray-300">
                      ❌ <strong className="text-[#00E5FF]">FALSE</strong><br/>
                      No official announcement from government sources. This is misinformation. Mobile money services remain operational.
                    </p>
                  </div>
                  <div className="flex-shrink-0 size-8 rounded-full bg-[#00A36C] flex items-center justify-center text-sm">
                    🤖
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <GlassCard neon className="p-12 text-center">
            <h3 className="text-white mb-4">Start Chatting with LeoneChat</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of Sierra Leoneans using LeoneChat to stay safe online.
              Your personal AI watchdog is just one message away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/23274260405?text=Send%20me%20the%20chatbot's%20contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#00A36C] hover:bg-[#00A36C]/90 text-white rounded-xl transition-all shadow-[0_0_30px_rgba(0,163,108,0.3)] hover:shadow-[0_0_40px_rgba(0,163,108,0.5)]"
              >
                <MessageSquare className="size-5" />
                <span>Open WhatsApp Chat</span>
              </a>
              <Link to="/how-it-works">
                <Button
                  variant="ghost"
                  className="px-8 py-6 h-auto text-gray-300 hover:text-white hover:bg-white/5 rounded-xl"
                >
                  Learn More About LeoneChat
                </Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm uppercase tracking-wider">Trusted By</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50">
            <div className="flex items-center justify-center">
              <div className="text-center">
                <Shield className="size-12 text-white mx-auto mb-2" strokeWidth={1} />
                <p className="text-xs text-gray-500">National Cybersecurity</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <Lock className="size-12 text-white mx-auto mb-2" strokeWidth={1} />
                <p className="text-xs text-gray-500">Data Protection Authority</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <Brain className="size-12 text-white mx-auto mb-2" strokeWidth={1} />
                <p className="text-xs text-gray-500">AI Research Institute</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <FileCheck className="size-12 text-white mx-auto mb-2" strokeWidth={1} />
                <p className="text-xs text-gray-500">Ministry of Information</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </PageTransition>
  );
}