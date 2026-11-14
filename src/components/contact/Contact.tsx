import React, { useState } from 'react';
import { Mail, FileText, Send, Copy, Check, AlertCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { SOCIAL_LINKS } from '../../data/socials';
import { GithubIcon, LinkedinIcon } from '../common/Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedState, setSubmittedState] = useState<'idle' | 'success' | 'mailto-opened'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or organization.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message or project brief.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Constructs a standard mailto link that opens the visitor's default email client prefilled
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Pratishtha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n— Sent via Pratishtha Somani Developer Portfolio`
    );

    const mailtoUrl = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;

    setSubmittedState('mailto-opened');
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#CCFF00]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Closing Bold Typographic Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-xs font-mono text-[#CCFF00] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>08 // INITIATE DIALOGUE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display tracking-tight text-[#F9FAFB] leading-[1.1] mb-6">
            Have an idea?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] via-[#E2FF4D] to-[#A3D900]">
              Let&apos;s build something
            </span>{' '}
            meaningful.
          </h2>

          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-xl mx-auto">
            Available for Software Engineering internships, open-source initiatives, and collaborative technical challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Pill Card */}
            <Card variant="surface" className="p-6">
              <span className="text-xs font-mono text-[#6B7280] uppercase tracking-wider block mb-2">
                Primary Contact
              </span>
              
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#08090C] border border-white/10 mb-4">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#CCFF00] shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-[#F9FAFB] truncate">
                    {SOCIAL_LINKS.email}
                  </span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#CCFF00]/10 text-xs font-mono text-[#CCFF00] border border-white/10 hover:border-[#CCFF00]/30 transition-all shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#CCFF00] hover:bg-[#B8FF00] text-[#08090C] font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Mail Client</span>
                </a>
              </div>
            </Card>

            {/* Professional Profiles */}
            <Card variant="surface" className="p-6 space-y-3">
              <span className="text-xs font-mono text-[#6B7280] uppercase tracking-wider block mb-2">
                Verified Channels
              </span>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-blue-400/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display text-[#F9FAFB] group-hover:text-blue-400 transition-colors">
                      LinkedIn
                    </h4>
                    <span className="text-[11px] font-mono text-[#9CA3AF]">
                      linkedin.com/in/pratishtha-somani-5446012b7
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#CCFF00]/40 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-white">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display text-[#F9FAFB] group-hover:text-[#CCFF00] transition-colors">
                      GitHub
                    </h4>
                    <span className="text-[11px] font-mono text-[#9CA3AF]">
                      github.com/itzpratishtha
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-[#CCFF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={SOCIAL_LINKS.resumePdfUrl}
                download="Pratishtha_Somani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 transition-all group text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-display text-[#F9FAFB] group-hover:text-amber-400 transition-colors">
                      Official Resume (PDF)
                    </h4>
                    <span className="text-[11px] font-mono text-[#9CA3AF]">
                      Download Pratishtha_Somani_Resume.pdf
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6B7280] group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </Card>

          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <Card variant="surface" className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F9FAFB] mb-2">
                Send a direct dispatch
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mb-6">
                Fill in the details below. This client-side form verifies your input and opens your default mail client with a pre-filled dispatch directly addressed to Pratishtha.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[#E5E7EB] uppercase tracking-wider mb-2">
                    Your Name / Organization <span className="text-[#CCFF00]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Hiring Manager / Technical Lead"
                    className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border ${
                      errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#CCFF00]'
                    } text-sm text-[#F9FAFB] placeholder-[#6B7280] focus:outline-none transition-colors font-sans`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[#E5E7EB] uppercase tracking-wider mb-2">
                    Your Email Address <span className="text-[#CCFF00]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. recruiter@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border ${
                      errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#CCFF00]'
                    } text-sm text-[#F9FAFB] placeholder-[#6B7280] focus:outline-none transition-colors font-sans`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-[#E5E7EB] uppercase tracking-wider mb-2">
                    Project Brief or Message <span className="text-[#CCFF00]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Discuss an internship opportunity, software development challenge, or project collaboration..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#08090C] border ${
                      errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-white/10 focus:border-[#CCFF00]'
                    } text-sm text-[#F9FAFB] placeholder-[#6B7280] focus:outline-none transition-colors font-sans custom-scrollbar`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Feedback Note */}
                {submittedState === 'mailto-opened' && (
                  <div className="p-4 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-xs font-mono text-[#CCFF00] flex items-center gap-2">
                    <Check className="w-4 h-4 shrink-0" />
                    <span>Your email client has been launched with your message pre-filled. You can also write directly to {SOCIAL_LINKS.email}.</span>
                  </div>
                )}

                {/* Submit CTA */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={<Send className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Send Message via Email Client
                </Button>

                <p className="text-[11px] font-mono text-[#6B7280] text-center pt-2">
                  Client-side validated &middot; Directly creates an email draft addressed to {SOCIAL_LINKS.email}
                </p>

              </form>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
