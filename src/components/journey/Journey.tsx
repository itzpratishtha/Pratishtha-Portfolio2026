import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Layers, Laptop, Award, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { JOURNEY_MILESTONES } from '../../data/journey';

export const Journey: React.FC = () => {
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>(JOURNEY_MILESTONES[0].id);

  const getIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#CCFF00]" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Laptop': return <Laptop className="w-5 h-5 text-emerald-400" />;
      case 'Award': return <Award className="w-5 h-5 text-[#CCFF00]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      default: return <Sparkles className="w-5 h-5 text-[#CCFF00]" />;
    }
  };

  const activeMilestone = JOURNEY_MILESTONES.find((m) => m.id === activeMilestoneId) || JOURNEY_MILESTONES[0];

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-[#0A0C10]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="07"
          tag="CHRONOLOGY & EVOLUTION"
          title="The journey so far."
          subtitle="From writing first lines of foundational logic to architecting full-stack systems and exploring generative AI."
        />

        {/* Interactive Master-Detail Chronology Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Milestone Stepper Rail */}
          <div className="lg:col-span-5 space-y-3 relative">
            {/* Vertical Connector Line */}
            <div className="absolute top-6 bottom-6 left-[22px] w-[2px] bg-white/10 hidden sm:block" />

            {JOURNEY_MILESTONES.map((milestone, idx) => {
              const isActive = milestone.id === activeMilestoneId;

              return (
                <div
                  key={milestone.id}
                  onClick={() => setActiveMilestoneId(milestone.id)}
                  className={`relative flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                    isActive
                      ? 'bg-[#141722] border-[#CCFF00]/50 shadow-[0_0_20px_rgba(204,255,0,0.1)]'
                      : 'bg-[#0E1017]/70 border-white/5 hover:border-white/15 text-[#9CA3AF]'
                  }`}
                >
                  {/* Step Nodal Icon */}
                  <div
                    className={`relative z-10 w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                      isActive
                        ? 'bg-[#CCFF00] border-[#CCFF00] text-[#08090C]'
                        : 'bg-[#08090C] border-white/10 text-[#9CA3AF]'
                    }`}
                  >
                    <span className="font-mono text-xs font-bold">
                      {idx + 1}
                    </span>
                  </div>

                  {/* Text Header */}
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#CCFF00] font-semibold block">
                      {milestone.period}
                    </span>
                    <h4 className={`text-sm font-bold font-display truncate ${isActive ? 'text-[#F9FAFB]' : 'text-[#D1D5DB]'}`}>
                      {milestone.title}
                    </h4>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-[#CCFF00] translate-x-1' : 'opacity-30'}`} />
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Storytelling Spotlight Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeMilestone.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card variant="elevated" className="p-8 sm:p-10 border border-[#CCFF00]/30 shadow-2xl relative">
                
                {/* Header with Icon Badge */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#CCFF00]/10 border border-[#CCFF00]/30">
                      {getIcon(activeMilestone.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#CCFF00] font-bold block">
                        {activeMilestone.period}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#F9FAFB]">
                        {activeMilestone.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Subtitle */}
                <div className="mb-6 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-[#D1D5DB]">
                  Focus: {activeMilestone.subtitle}
                </div>

                {/* Narrative Description */}
                <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed mb-8 font-normal">
                  {activeMilestone.description}
                </p>

                {/* Tags */}
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#6B7280] block mb-3">
                    Key Topics &amp; Competencies Acquired
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeMilestone.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg bg-[#CCFF00]/10 border border-[#CCFF00]/25 text-xs font-mono text-[#CCFF00]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Milestone status indicator */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
                  <span>Timeline Status</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    Achieved &amp; Groundwork Built
                  </span>
                </div>

              </Card>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
