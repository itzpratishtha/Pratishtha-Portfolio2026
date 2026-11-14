import React from 'react';
import { Project } from '../../types';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';
import { ExternalLink, CheckCircle, Layers, AlertCircle, Wrench } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

export interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={project.title}
      subtitle={project.tagline}
      maxWidth="3xl"
    >
      <div className="space-y-8">
        
        {/* Actual Project Screenshot or Architecture Preview */}
        <div className="relative aspect-video rounded-xl bg-gradient-to-br from-[#141722] via-[#0E1017] to-[#08090C] border border-white/10 overflow-hidden flex items-center justify-center shadow-2xl group">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="relative z-10 flex flex-col items-center p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#08090C] border border-[#CCFF00]/40 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(204,255,0,0.2)]">
                <Layers className="w-8 h-8 text-[#CCFF00]" />
              </div>
              <h4 className="text-xl font-bold font-display text-[#F9FAFB]">
                {project.title}
              </h4>
              <p className="text-xs font-mono text-[#9CA3AF] mt-1">
                System Architecture Preview
              </p>
            </div>
          )}
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono text-red-400 mb-2 font-semibold">
              <AlertCircle className="w-4 h-4" />
              <span>THE CHALLENGE</span>
            </div>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              {project.problemSolved}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#CCFF00] mb-2 font-semibold">
              <Wrench className="w-4 h-4" />
              <span>PRATISHTHA&apos;S ENGINEERING CONTRIBUTION</span>
            </div>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              {project.myContribution}
            </p>
          </div>
        </div>

        {/* Key Features List */}
        <div>
          <h5 className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-3 font-semibold">
            Core Features &amp; System Capabilities
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#141722]/60 border border-white/[0.06] text-xs font-mono text-[#E5E7EB]"
              >
                <CheckCircle className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Technical Highlights */}
        {project.architectureNotes && (
          <div className="p-5 rounded-xl bg-[#08090C] border border-[#CCFF00]/20">
            <h5 className="text-xs font-mono uppercase tracking-wider text-[#CCFF00] mb-2 flex items-center gap-2 font-semibold">
              <span>Deep-Dive Engineering Notes</span>
            </h5>
            <ul className="space-y-1.5 text-xs font-mono text-[#9CA3AF] list-disc list-inside">
              {project.architectureNotes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div>
          <h5 className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-3 font-semibold">
            Technologies &amp; Architecture Layers
          </h5>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="slate" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="text-[11px] font-mono text-[#6B7280]">
            Verified Source &middot; Pratishtha Somani Repository
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-mono text-[#F3F4F6] transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#CCFF00] hover:bg-[#B8FF00] text-xs font-mono font-bold text-[#08090C] transition-colors shadow-[0_0_20px_rgba(204,255,0,0.25)]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Deployment</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </Modal>
  );
};
