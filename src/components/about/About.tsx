import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Sparkles, Terminal, Code2, ArrowUpRight, Award } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { SOCIAL_LINKS } from '../../data/socials';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="01"
          tag="BIOGRAPHY & PHILOSOPHY"
          title="A little about me."
          subtitle="The curiosity, principles, and craft driving my software engineering journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Editorial Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Narrative Card */}
            <Card variant="surface" className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F9FAFB] mb-4">
                Engineering with precision, thinking in algorithms, and building for humans.
              </h3>

              <div className="space-y-4 text-[#9CA3AF] text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  I am a Computer Science Engineering student at{' '}
                  <span className="text-[#F3F4F6] font-semibold underline decoration-[#CCFF00]/40 underline-offset-4">
                    {SOCIAL_LINKS.college}
                  </span>{' '}
                  (B.Tech 2024–2028, CGPA {SOCIAL_LINKS.cgpa}), with an innate drive for transforming computational logic into robust, intuitive, and scalable digital products.
                </p>

                <p>
                  My engineering foundation is built on{' '}
                  <strong className="text-[#F3F4F6] font-medium">Data Structures &amp; Algorithms</strong> and{' '}
                  <strong className="text-[#F3F4F6] font-medium">Software Engineering</strong> principles,
                  spanning full-stack system architecture, performant backend REST APIs, and integrating modern{' '}
                  <strong className="text-[#CCFF00] font-medium">AI &amp; LLM capabilities</strong>.
                </p>

                <p>
                  From building real-time WebSocket portals and state-driven marketplaces to conquering 450+ algorithmic challenges on LeetCode with a 200+ day streak, I treat code as both an engineering discipline and a creative craft.
                </p>
              </div>

              {/* Core Interest Tags */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap gap-2">
                <Badge variant="lime" dot>Data Structures & Algorithms</Badge>
                <Badge variant="slate">Full-Stack Systems</Badge>
                <Badge variant="blue">LLM Fundamentals & Gemini API</Badge>
                <Badge variant="slate">Relational Database Schemas</Badge>
                <Badge variant="amber">Peer Mentorship & ACM-W</Badge>
              </div>
            </Card>

            {/* Philosophy Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl bg-gradient-to-r from-[#141722] via-[#0E1017] to-[#141722] p-6 sm:p-8 border-l-4 border-[#CCFF00] border-y border-r border-white/10 shadow-xl"
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#CCFF00] mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Personal Philosophy</span>
              </div>
              <blockquote className="text-xl sm:text-2xl font-bold font-display text-[#F9FAFB] tracking-tight italic">
                &ldquo;{SOCIAL_LINKS.philosophy}&rdquo;
              </blockquote>
              <p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] font-mono">
                — A guiding ethos for clean codebases, continuous learning, and software architecture.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Actual Profile Photo & Quick Facts */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Profile Frame with Actual Photo */}
            <Card variant="elevated" className="p-6 relative group overflow-hidden">
              {/* Corner status badge */}
              <div className="absolute top-4 right-4 z-20">
                <Badge variant="emerald" dot>Available for SDE Roles</Badge>
              </div>

              {/* Actual Profile Photo Showcase */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-6 group">
                <img
                  src={SOCIAL_LINKS.profileImageUrl}
                  alt="Pratishtha Somani"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h4 className="text-xl font-bold font-display text-white">Pratishtha Somani</h4>
                  <p className="text-xs font-mono text-[#CCFF00]">Computer Science Engineering &middot; PIET Jaipur</p>
                </div>
              </div>

              {/* Metadata Highlights */}
              <div className="space-y-3 font-mono text-xs text-[#9CA3AF]">
                <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                  <span className="flex items-center gap-2 text-[#6B7280]">
                    <GraduationCap className="w-4 h-4 text-[#CCFF00]" /> Institution
                  </span>
                  <span className="text-[#F3F4F6] text-right font-sans font-medium text-xs">PIET, Jaipur (CGPA: 9.4)</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                  <span className="flex items-center gap-2 text-[#6B7280]">
                    <MapPin className="w-4 h-4 text-[#CCFF00]" /> Location
                  </span>
                  <span className="text-[#F3F4F6] font-sans font-medium text-xs">{SOCIAL_LINKS.location}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/[0.06]">
                  <span className="flex items-center gap-2 text-[#6B7280]">
                    <Award className="w-4 h-4 text-amber-400" /> Recognition
                  </span>
                  <span className="text-amber-400 font-bold">Coder of the Year (2025, 2026)</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="flex items-center gap-2 text-[#6B7280]">
                    <Code2 className="w-4 h-4 text-[#CCFF00]" /> LeetCode
                  </span>
                  <span className="text-[#CCFF00] font-bold">200-Day Badge &middot; 450+ Solved</span>
                </div>
              </div>

              {/* Direct Link to Terminal */}
              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <a
                  href="#terminal"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-[#CCFF00]/10 border border-white/10 hover:border-[#CCFF00]/30 text-xs font-mono text-[#E5E7EB] hover:text-[#CCFF00] transition-all"
                >
                  <Terminal className="w-4 h-4" />
                  <span>Run `whoami` in Developer Terminal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Card>

          </div>

        </div>
      </div>
    </section>
  );
};
