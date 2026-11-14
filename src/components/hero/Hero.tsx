import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { HeroVisual } from './HeroVisual';
import { SOCIAL_LINKS } from '../../data/socials';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from '../common/Icons';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Identity & Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Availability Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/30 w-fit mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00]" />
              </span>
              <span className="text-xs font-mono font-medium text-[#CCFF00] tracking-tight">
                {SOCIAL_LINKS.availability}
              </span>
            </motion.div>

            {/* Name with tracked typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-sm sm:text-base font-mono font-bold tracking-[0.25em] text-[#CCFF00] uppercase mb-2">
                PRATISHTHA SOMANI
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-[#F9FAFB] leading-[1.1] mb-6">
                Building ideas into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] via-[#E2FF4D] to-[#A3D900]">
                  impactful digital
                </span>{' '}
                experiences.
              </h1>
            </motion.div>

            {/* Supporting Bio & Personal Motto */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3 mb-8 max-w-2xl"
            >
              <p className="text-base sm:text-lg text-[#9CA3AF] font-medium leading-relaxed">
                Computer Science Engineering student &middot; Aspiring Software Engineer &middot; Problem Solver &middot; Builder
              </p>
              
              <div className="flex items-center gap-2 text-sm sm:text-base font-mono text-[#E5E7EB]/90 bg-white/[0.03] px-3.5 py-2 rounded-xl border border-white/10 w-fit">
                <Sparkles className="w-4 h-4 text-[#CCFF00]" />
                <span className="italic">&ldquo;{SOCIAL_LINKS.intro}&rdquo;</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={scrollToProjects}
                icon={<ChevronRight className="w-4 h-4" />}
                iconPosition="right"
              >
                View My Work
              </Button>

              <a
                href={SOCIAL_LINKS.resumePdfUrl}
                download="Pratishtha_Somani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none text-base px-7 py-3.5 rounded-xl gap-2.5 tracking-wide font-semibold bg-[#141722] text-[#F3F4F6] border border-white/10 hover:border-[#CCFF00]/40 hover:bg-[#1A1F2E] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-[#CCFF00]" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Coding Profiles & Social Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 pt-6 border-t border-white/[0.08]"
            >
              <span className="text-xs font-mono text-[#6B7280] uppercase tracking-wider mr-2">
                Connect &middot;
              </span>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#CCFF00]/40 text-xs font-mono text-[#9CA3AF] hover:text-[#F9FAFB] transition-all"
              >
                <GithubIcon className="w-4 h-4 group-hover:text-[#CCFF00] transition-colors" />
                <span>GitHub</span>
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#60A5FA]/40 text-xs font-mono text-[#9CA3AF] hover:text-[#F9FAFB] transition-all"
              >
                <LinkedinIcon className="w-4 h-4 group-hover:text-[#60A5FA] transition-colors" />
                <span>LinkedIn</span>
              </a>

              <a
                href={SOCIAL_LINKS.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 text-xs font-mono text-[#9CA3AF] hover:text-[#F9FAFB] transition-all"
              >
                <LeetCodeIcon className="w-4 h-4 text-amber-400" />
                <span>LeetCode</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20">200d</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Interactive 3D Geometric Object */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroVisual />
          </div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs font-mono text-[#6B7280]"
        >
          <span>EXPLORE</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-[#CCFF00]" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
