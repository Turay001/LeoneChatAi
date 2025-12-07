import { GlassCard } from "../components/ui/GlassCard";
import { VerificationLoader } from "../components/ui/VerificationLoader";
import { PageTransition } from "../components/layout/PageTransition";
import {
  MessageSquare,
  Brain,
  Database,
  Shield,
  Zap,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router";

export function HowItWorks() {
  const verificationSteps = [
    {
      step: 1,
      icon: MessageSquare,
      title: "Send a Message",
      description:
        "Open WhatsApp and message LeoneChat. Forward suspicious messages, ask questions, or report scams directly in the chat.",
    },
    {
      step: 2,
      icon: Brain,
      title: "LeoneChat Analyzes",
      description:
        "The AI chatbot instantly analyzes your message using natural language processing, pattern recognition, and threat intelligence.",
    },
    {
      step: 3,
      icon: Database,
      title: "Database Verification",
      description:
        "LeoneChat cross-checks against millions of verified scams, official sources, and real-time threat data from across Sierra Leone.",
    },
    {
      step: 4,
      icon: CheckCircle2,
      title: "Get Instant Reply",
      description:
        "Receive a clear response on WhatsApp within seconds: Scam Alert, Verified Safe, or Needs Review - with evidence and next steps.",
    },
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description:
        "Understands context, sentiment, and intent across multiple languages and dialects commonly used in Sierra Leone.",
    },
    {
      icon: Zap,
      title: "Pattern Recognition",
      description:
        "Identifies scam patterns including phishing templates, fake URLs, suspicious phone numbers, and common fraud tactics.",
    },
    {
      icon: Database,
      title: "Real-Time Learning",
      description:
        "Continuously updates with new scam patterns. Every verified report improves protection for all citizens.",
    },
    {
      icon: Lock,
      title: "Privacy-First Design",
      description:
        "All processing is encrypted. Personal data is never stored. Only anonymized threat patterns are retained.",
    },
  ];

  const securityFeatures = [
    "End-to-end encryption for all submissions",
    "No personal data retention policy",
    "Compliance with international data protection standards",
    "Regular third-party security audits",
    "Open-source verification algorithms (coming Q1 2025)",
    "24/7 uptime with 99.9% availability",
  ];

  return (
    <PageTransition>
    <div className="pt-20 px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 mb-6">
            <MessageSquare className="size-4 text-[#00E5FF]" />
            <span className="text-sm text-[#00E5FF]">AI WhatsApp Chatbot</span>
          </div>
          <h1 className="text-white mb-6">How LeoneChat Works</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            LeoneChat is your intelligent WhatsApp chatbot that uses advanced AI to verify information,
            detect scams, and protect citizens in real-time - all through simple conversations.
          </p>
        </div>

        {/* Verification Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">How to Chat with LeoneChat</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From your WhatsApp message to verified answer in under 3 seconds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00E5FF]/30 to-transparent"></div>

            {verificationSteps.map((step, index) => (
              <div key={index} className="relative">
                <GlassCard className="p-6 h-full hover:border-[#00E5FF]/30 transition-all group">
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-[#00E5FF] blur-xl opacity-0 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative inline-flex items-center justify-center size-16 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30">
                      <step.icon className="size-8 text-[#00E5FF]" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="text-sm text-[#00E5FF] mb-2">Step {step.step}</div>
                  <h5 className="text-white mb-3">{step.title}</h5>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </GlassCard>
                
                {/* Arrow connector for mobile */}
                {index < verificationSteps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowRight className="size-6 text-[#00E5FF]/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Loader Demo */}
        <GlassCard neon className="p-12 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-white mb-4">Real-Time Analysis in Action</h3>
              <p className="text-gray-400 mb-6">
                Watch our AI engine process messages in real-time. The verification process involves
                multiple layers of analysis, all completed in milliseconds to protect you instantly.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Linguistic pattern analysis</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">URL and link verification</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Threat actor identification</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Historical pattern matching</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <VerificationLoader />
            </div>
          </div>
        </GlassCard>

        {/* AI Capabilities */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">AI Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powered by state-of-the-art machine learning and continuously improving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiCapabilities.map((capability, index) => (
              <GlassCard key={index} className="p-8 hover:border-[#00E5FF]/30 transition-all group">
                <div className="mb-4">
                  <capability.icon className="size-10 text-[#00E5FF]" strokeWidth={1.5} />
                </div>
                <h5 className="text-white mb-3">{capability.title}</h5>
                <p className="text-gray-400">{capability.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Security & Privacy */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Security & Privacy</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your privacy and security are our top priorities
            </p>
          </div>

          <GlassCard className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Shield className="size-5 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* CTA Section */}
        <GlassCard neon className="p-12 text-center">
          <h3 className="text-white mb-4">Ready to Chat with LeoneChat?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of Sierra Leoneans using LeoneChat to stay safe from scams
            and misinformation. Start chatting on WhatsApp now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/23274260405?text=Send%20me%20the%20chatbot's%20contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#00A36C] hover:bg-[#00A36C]/90 text-white rounded-xl transition-all shadow-[0_0_30px_rgba(0,163,108,0.3)] hover:shadow-[0_0_40px_rgba(0,163,108,0.5)]"
            >
              <MessageSquare className="size-5" />
              <span>Chat with LeoneChat</span>
            </a>
            <Link to="/threat-dashboard">
              <Button
                variant="outline"
                className="px-8 py-4 h-auto bg-transparent border-2 border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF]/10 hover:text-[#00E5FF] rounded-xl"
              >
                View Threat Dashboard
              </Button>
            </Link>
          </div>
        </GlassCard>
      </div>
    </div>
    </PageTransition>
  );
}