import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { ProjectModal } from './ProjectModal';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../types';
import { GithubIcon } from '../common/Icons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#CCFF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="03"
          tag="ENGINEERING PORTFOLIO"
          title="Featured systems & applications."
          subtitle="Production architectures, full-stack systems, and AI-enabled software solutions built and deployed by Pratishtha."
        />

        {/* Alternating Project Showcases */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card variant="surface" className="p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#CCFF00]/40 transition-all duration-300">
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Visual Mockup & Interactive Container */}
                    <div className={`lg:col-span-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                      <div
                        onClick={() => handleOpenDetails(project)}
                        className="relative aspect-[16/10] rounded-xl bg-gradient-to-br from-[#1E2230] via-[#11131A] to-[#08090C] border border-white/10 overflow-hidden cursor-pointer group flex items-center justify-center shadow-2xl"
                      >
                        {project.imageUrl ? (
                          <>
                            <img
                              src={project.imageUrl}
                              alt={project.title}
                              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#08090C]/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                          </>
                        ) : (
                          <div className="absolute inset-0 bg-[radial-gradient(#ccff00_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
                        )}

                        {/* Hover Overlay Hint */}
                        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-[#CCFF00] bg-[#08090C]/90 px-3 py-1 rounded-lg border border-[#CCFF00]/30 shadow-lg">
                            {project.title}
                          </span>
                          <span className="text-[11px] font-mono text-[#E5E7EB] bg-[#08090C]/90 px-2.5 py-1 rounded-lg border border-white/10 flex items-center gap-1 group-hover:text-[#CCFF00] transition-colors">
                            Inspect Blueprint &rarr;
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Project Editorial Description & Specs */}
                    <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="lime" size="sm">Featured Project 0{index + 1}</Badge>
                        <span className="text-xs font-mono text-[#6B7280]">/</span>
                        <span className="text-xs font-mono text-[#9CA3AF]">{project.category}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#F9FAFB] mb-2">
                        {project.title}
                      </h3>

                      <p className="text-xs font-mono text-[#CCFF00] font-semibold mb-4">
                        {project.tagline}
                      </p>

                      <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed mb-6">
                        {project.shortOverview}
                      </p>

                      {/* Problem Solved Highlight */}
                      <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#F3F4F6] font-semibold block mb-1">
                          Problem Solved:
                        </span>
                        <p className="text-xs text-[#9CA3AF] leading-relaxed">
                          {project.problemSolved}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[#D1D5DB]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap items-center gap-3">
                        <Button
                          variant="primary"
                          size="md"
                          onClick={() => handleOpenDetails(project)}
                          icon={<ArrowUpRight className="w-4 h-4" />}
                          iconPosition="right"
                        >
                          View System Details
                        </Button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#F3F4F6] transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>Code Repository</span>
                        </a>

                        {/* Only render live demo if available */}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#CCFF00]/10 hover:bg-[#CCFF00]/20 border border-[#CCFF00]/30 text-xs font-mono font-medium text-[#CCFF00] transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live App</span>
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects / GitHub Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#141722] via-[#0E1017] to-[#141722] border border-white/10 text-center flex flex-col items-center justify-center"
        >
          <div className="w-12 h-12 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center mb-3">
            <GithubIcon className="w-6 h-6 text-[#CCFF00]" />
          </div>
          <h4 className="text-xl font-bold font-display text-[#F9FAFB] mb-2">
            Looking for more repositories and problem-solving logs?
          </h4>
          <p className="text-xs sm:text-sm text-[#9CA3AF] font-mono max-w-xl mb-6">
            Explore active experiments, algorithmic solutions, and ongoing open-source contributions by Pratishtha.
          </p>
          <a
            href="https://github.com/itzpratishtha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-[#CCFF00] text-[#F3F4F6] hover:text-[#08090C] font-mono text-xs font-bold transition-all border border-white/15"
          >
            <span>Explore All Repositories on GitHub (@itzpratishtha)</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

      </div>

      {/* Deep-dive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
