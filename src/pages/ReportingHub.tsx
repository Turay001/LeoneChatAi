import { useState } from "react";
import { GlassCard } from "../components/ui/GlassCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { PageTransition } from "../components/layout/PageTransition";
import {
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  AlertTriangle,
  Briefcase,
  MessageSquare,
  TrendingUp,
  Upload,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { submitToGoogleSheets, formatThreatType, fileToBase64 } from "../services/googleSheets";

type ThreatType = "phishing" | "investment" | "job" | "misinformation" | "";

export function ReportingHub() {
  const [step, setStep] = useState(1);
  const [threatType, setThreatType] = useState<ThreatType>("");
  const [sourceNumber, setSourceNumber] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [messageContent, setMessageContent] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [caseId, setCaseId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const threatTypes = [
    {
      id: "phishing" as ThreatType,
      icon: AlertTriangle,
      title: "Phishing / Impersonation",
      description: "Fake messages pretending to be from banks, government, or trusted organizations",
    },
    {
      id: "investment" as ThreatType,
      icon: TrendingUp,
      title: "Fake Investment Scheme",
      description: "Pyramid schemes, crypto scams, or too-good-to-be-true investment opportunities",
    },
    {
      id: "job" as ThreatType,
      icon: Briefcase,
      title: "Job Scam",
      description: "Fake job offers, work-from-home scams, or requests for upfront payment",
    },
    {
      id: "misinformation" as ThreatType,
      icon: MessageSquare,
      title: "Misinformation / Fake News",
      description: "False information, propaganda, or deliberately misleading content",
    },
  ];

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Generate a case ID
      const newCaseId = `LC-${Date.now().toString(36).toUpperCase()}`;

      // Convert uploaded files to base64
      const screenshots = await Promise.all(
        uploadedFiles.map(file => fileToBase64(file))
      );

      // Prepare data for Google Sheets
      const reportData = {
        reportType: formatThreatType(threatType),
        source: sourceNumber,
        incidentDate: incidentDate,
        messageContent: messageContent,
        contactEmail: contactEmail || "Anonymous",
        caseId: newCaseId,
        timestamp: new Date().toISOString(),
        screenshots: screenshots.length > 0 ? screenshots : undefined,
      };

      // Submit to Google Sheets
      const success = await submitToGoogleSheets(reportData);

      if (success) {
        setCaseId(newCaseId);
        setStep(5);
      } else {
        setSubmitError("Failed to submit report. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setThreatType("");
    setSourceNumber("");
    setIncidentDate("");
    setMessageContent("");
    setContactEmail("");
    setCaseId("");
    setIsSubmitting(false);
    setSubmitError(null);
    setUploadedFiles([]);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      setUploadedFiles((prev) => [...prev, ...fileArray]);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <PageTransition>
      <div className="pt-20 px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 mb-6">
              <ShieldCheck className="size-4 text-[#00E5FF]" />
              <span className="text-sm text-[#00E5FF]">Secure & Anonymous Reporting</span>
            </div>
            <h1 className="text-white mb-4">Scam Reporting Hub</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Help protect your community by reporting suspicious messages, scams, and misinformation.
              Your identity is protected by law.
            </p>
          </div>

          {/* Progress Indicator */}
          {step < 5 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center flex-1">
                    <div
                      className={`size-8 rounded-full flex items-center justify-center transition-all ${step >= s
                        ? "bg-[#00E5FF] text-black"
                        : "bg-white/5 text-gray-500 border border-white/10"
                        }`}
                    >
                      {s}
                    </div>
                    {s < 4 && (
                      <div
                        className={`flex-1 h-0.5 mx-2 transition-all ${step > s ? "bg-[#00E5FF]" : "bg-white/10"
                          }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 px-2">
                <span>Intro</span>
                <span>Type</span>
                <span>Evidence</span>
                <span>Contact</span>
              </div>
            </div>
          )}

          {/* Step Content */}
          <GlassCard neon className="p-8 md:p-12">
            {/* Step 1: Introduction */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <ShieldCheck className="size-16 text-[#00E5FF] mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-white mb-4">Your Report Matters</h3>
                  <p className="text-gray-400">
                    By reporting suspicious activity, you help protect thousands of citizens from scams and
                    misinformation.
                  </p>
                </div>

                <div className="space-y-4 bg-white/5 rounded-xl p-6 border border-white/10">
                  <h5 className="text-white flex items-center gap-2">
                    <ShieldCheck className="size-5 text-[#00E5FF]" />
                    Your Protection Guarantees
                  </h5>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                      <span>Complete anonymity - your identity is never shared or stored</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                      <span>End-to-end encryption for all submitted data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                      <span>Full legal protection under the Whistleblower Protection Act</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-[#00E5FF] mt-0.5 flex-shrink-0" />
                      <span>Reports are reviewed within 24 hours by our AI + human team</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-end">
                  <Button
                    onClick={() => setStep(2)}
                    className="px-8 py-6 h-auto bg-[#00E5FF] hover:bg-[#00E5FF]/90 text-black rounded-xl"
                  >
                    Begin Report
                    <ChevronRight className="size-5 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Threat Type Selection */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="mb-8">
                  <h3 className="text-white mb-2">Select Threat Type</h3>
                  <p className="text-gray-400">Choose the category that best describes the threat</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {threatTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setThreatType(type.id)}
                      className={`p-6 rounded-xl border-2 transition-all text-left ${threatType === type.id
                        ? "border-[#00E5FF] bg-[#00E5FF]/10"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                        }`}
                    >
                      <type.icon
                        className={`size-8 mb-3 ${threatType === type.id ? "text-[#00E5FF]" : "text-gray-400"
                          }`}
                      />
                      <h5 className="text-white mb-2">{type.title}</h5>
                      <p className="text-sm text-gray-400">{type.description}</p>
                    </button>
                  ))}
                </div>

                <div className="flex justify-between pt-6">
                  <Button
                    onClick={() => setStep(1)}
                    variant="outline"
                    className="px-6 py-6 h-auto bg-transparent border border-white/20 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl"
                  >
                    <ChevronLeft className="size-5 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!threatType}
                    className="px-8 py-6 h-auto bg-[#00E5FF] hover:bg-[#00E5FF]/90 text-black rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                    <ChevronRight className="size-5 ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Source & Evidence */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="mb-8">
                  <h3 className="text-white mb-2">Provide Evidence</h3>
                  <p className="text-gray-400">Share details about the suspicious message or activity</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="source" className="text-white mb-2 block">
                      Source (WhatsApp Number, Website, or Social Media Account)
                    </Label>
                    <Input
                      id="source"
                      value={sourceNumber}
                      onChange={(e) => setSourceNumber(e.target.value)}
                      placeholder="e.g., +232 XX XXX XXXX or @username"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#00E5FF] rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="date" className="text-white mb-2 block">
                      Date of Incident
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={incidentDate}
                      onChange={(e) => setIncidentDate(e.target.value)}
                      className="bg-white/5 border-white/20 text-white focus:border-[#00E5FF] rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Message Content or Description
                    </Label>
                    <Textarea
                      id="message"
                      value={messageContent}
                      onChange={(e) => setMessageContent(e.target.value)}
                      placeholder="Copy and paste the suspicious message, or describe what happened in detail..."
                      rows={6}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#00E5FF] rounded-xl resize-none"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      Include any URLs, phone numbers, or specific claims mentioned in the message
                    </p>
                  </div>

                  <div>
                    <Label className="text-white mb-2 block">
                      Upload Screenshots (Optional)
                    </Label>
                    <input
                      type="file"
                      id="file-upload"
                      accept="image/*"
                      multiple
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="file-upload"
                      className="block border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-[#00E5FF]/50 transition-all cursor-pointer"
                    >
                      <Upload className="size-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-400 mb-1">Click to Upload Screenshots</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 10MB each</p>
                    </label>

                    {uploadedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {uploadedFiles.map((file, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-white/5 rounded-lg p-3 border border-white/10"
                          >
                            <div className="flex items-center gap-3">
                              <CheckCircle2 className="size-5 text-[#00E5FF]" />
                              <span className="text-white text-sm">{file.name}</span>
                              <span className="text-gray-500 text-xs">
                                ({(file.size / 1024).toFixed(1)} KB)
                              </span>
                            </div>
                            <button
                              onClick={() => removeFile(index)}
                              className="text-red-400 hover:text-red-300 text-sm"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => setStep(2)}
                      variant="outline"
                      className="px-6 py-6 h-auto bg-transparent border border-white/20 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl"
                    >
                      <ChevronLeft className="size-5 mr-2" />
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(4)}
                      disabled={!sourceNumber || !messageContent}
                      className="px-8 py-6 h-auto bg-[#00E5FF] hover:bg-[#00E5FF]/90 text-black rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue
                      <ChevronRight className="size-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Optional Contact */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="mb-8">
                  <h3 className="text-white mb-2">Contact Information (Optional)</h3>
                  <p className="text-gray-400">
                    Provide contact details only if you want to be notified about the outcome
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                    <p className="text-yellow-200 text-sm flex items-start gap-2">
                      <AlertTriangle className="size-5 flex-shrink-0 mt-0.5" />
                      <span>
                        This field is completely optional. Your report will be processed even if you choose
                        to remain fully anonymous.
                      </span>
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email or Phone Number (Optional)
                    </Label>
                    <Input
                      id="email"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="your.email@example.com or +232 XX XXX XXXX"
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-[#00E5FF] rounded-xl h-12"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      We'll only use this to send you a case update. This information is encrypted and never
                      shared.
                    </p>
                  </div>
                </div>

                {submitError && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                    <p className="text-red-200 text-sm flex items-start gap-2">
                      <AlertTriangle className="size-5 flex-shrink-0 mt-0.5" />
                      <span>{submitError}</span>
                    </p>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  <Button
                    onClick={() => setStep(3)}
                    variant="outline"
                    disabled={isSubmitting}
                    className="px-6 py-6 h-auto bg-transparent border border-white/20 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl"
                  >
                    <ChevronLeft className="size-5 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-8 py-6 h-auto bg-[#00A36C] hover:bg-[#00A36C]/90 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Report
                        <CheckCircle2 className="size-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {step === 5 && (
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center size-20 rounded-full bg-[#00A36C]/20 mb-4">
                  <CheckCircle2 className="size-10 text-[#00A36C]" />
                </div>

                <h3 className="text-white">Report Submitted Successfully</h3>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-400 mb-4">Your case reference number:</p>
                  <div className="text-2xl text-[#00E5FF] mb-2 tracking-wider">{caseId}</div>
                  <p className="text-sm text-gray-500">
                    Save this number to check the status of your report
                  </p>
                </div>

                <div className="space-y-3 text-gray-400">
                  <p>
                    Thank you for helping protect Sierra Leone's digital community. Your report has been
                    added to our central threat database and will be analyzed within 24 hours.
                  </p>
                  <p>
                    Our AI system is already scanning for similar patterns to protect other citizens from
                    this threat.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Button
                    onClick={resetForm}
                    className="px-8 py-6 h-auto bg-[#00E5FF] hover:bg-[#00E5FF]/90 text-black rounded-xl"
                  >
                    Submit Another Report
                  </Button>
                  <Button
                    onClick={() => (window.location.href = "/")}
                    variant="outline"
                    className="px-8 py-6 h-auto bg-transparent border border-white/20 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl"
                  >
                    Return to Home
                  </Button>
                </div>
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </PageTransition>
  );
}
