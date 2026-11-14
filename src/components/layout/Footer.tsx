import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/socials';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../common/Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060709] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#CCFF00]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/[0.06]">
          
          {/* Brand & Monogram Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0E1017] border border-[#CCFF00]/40 flex items-center justify-center font-mono font-extrabold text-base text-[#F9FAFB] shadow-[0_0_20px_rgba(204,255,0,0.15)]">
                P<span className="text-[#CCFF00]">S</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#F9FAFB]">
                  Pratishtha Somani
                </h3>
                <p className="text-xs font-mono text-[#9CA3AF]">
                  Computer Science Engineering &middot; Jaipur, India
                </p>
              </div>
            </div>

            <p className="text-xs font-mono text-[#6B7280] max-w-sm">
              &ldquo;Learn deeply. Build consistently. Make things that matter.&rdquo;
            </p>
          </div>

          {/* Navigation Links in Footer */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-[#9CA3AF]">
            <a href="#about" className="hover:text-[#CCFF00] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#CCFF00] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#CCFF00] transition-colors">Projects</a>
            <a href="#achievements" className="hover:text-[#CCFF00] transition-colors">Achievements</a>
            <a href="#terminal" className="hover:text-[#CCFF00] transition-colors">Terminal</a>
            <a href="#journey" className="hover:text-[#CCFF00] transition-colors">Journey</a>
            <a href="#contact" className="hover:text-[#CCFF00] transition-colors">Contact</a>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="md:col-span-3 flex md:justify-end items-center gap-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-[#CCFF00]/10 border border-white/10 hover:border-[#CCFF00]/30 text-[#9CA3AF] hover:text-[#CCFF00] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-blue-400/10 border border-white/10 hover:border-blue-400/30 text-[#9CA3AF] hover:text-blue-400 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={SOCIAL_LINKS.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-amber-400/10 border border-white/10 hover:border-amber-400/30 text-[#9CA3AF] hover:text-amber-400 transition-all"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              title="Return to top of page"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-[#9CA3AF] hover:text-[#F9FAFB] transition-all flex items-center gap-1.5 text-xs font-mono cursor-pointer ml-2"
            >
              <ArrowUp className="w-4 h-4 text-[#CCFF00]" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Dynamic Copyright and Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6B7280]">
          <div>
            &copy; {currentYear} Pratishtha Somani. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <Sparkles className="w-3.5 h-3.5 text-[#CCFF00]" />
            <span>Designed with curiosity. Built with code.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
