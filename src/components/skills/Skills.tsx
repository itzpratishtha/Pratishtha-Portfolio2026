import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Layout, Server, Database, Sparkles, Wrench, CheckCircle2, Compass } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { SKILL_CATEGORIES } from '../../data/skills';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming': return <Code2 className="w-5 h-5 text-[#CCFF00]" />;
      case 'cs-fundamentals': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'frontend': return <Layout className="w-5 h-5 text-emerald-400" />;
      case 'backend': return <Server className="w-5 h-5 text-purple-400" />;
      case 'database': return <Database className="w-5 h-5 text-amber-400" />;
      case 'ai-technologies': return <Sparkles className="w-5 h-5 text-[#CCFF00]" />;
      case 'tools': return <Wrench className="w-5 h-5 text-cyan-400" />;
      default: return <Code2 className="w-5 h-5 text-[#CCFF00]" />;
    }
  };

  const filteredCategories = activeTab === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A0C10]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="02"
          tag="TECHNICAL TAXONOMY"
          title="Engineered skills & fundamentals."
          subtitle="A structured overview of core proficiencies and emerging capabilities without arbitrary percentage metrics."
        />

        {/* Legend / Distinction Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#CCFF00] text-[#08090C] font-bold shadow-[0_0_15px_rgba(204,255,0,0.25)]'
                  : 'bg-white/5 text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-white/10 border border-white/10'
              }`}
            >
              All Categories ({SKILL_CATEGORIES.length})
            </button>

            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-[#CCFF00] text-[#08090C] font-bold shadow-[0_0_15px_rgba(204,255,0,0.25)]'
                    : 'bg-white/5 text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Proficiency Status Legend */}
          <div className="flex items-center gap-4 text-xs font-mono text-[#9CA3AF]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
              <span className="text-[#F3F4F6]">Proficient &amp; Core</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Actively Exploring</span>
            </div>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card variant="surface" className="p-6 h-full flex flex-col justify-between hover:border-[#CCFF00]/30 transition-all duration-300 group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#CCFF00]/40 transition-colors">
                          {getCategoryIcon(category.id)}
                        </div>
                        <h3 className="text-lg font-bold font-display text-[#F9FAFB]">
                          {category.name}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-[#6B7280]">
                        {category.skills.length} skills
                      </span>
                    </div>

                    <p className="text-xs text-[#9CA3AF] leading-relaxed mb-6 font-normal">
                      {category.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => {
                        const isProficient = skill.proficiency === 'proficient';
                        return (
                          <div
                            key={skill.name}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                              isProficient
                                ? 'bg-white/[0.04] hover:bg-[#CCFF00]/10 border border-white/10 hover:border-[#CCFF00]/40 text-[#F3F4F6]'
                                : 'bg-blue-500/10 hover:bg-blue-500/15 border border-blue-500/20 text-blue-300'
                            }`}
                          >
                            {isProficient ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00]" />
                            ) : (
                              <Compass className="w-3.5 h-3.5 text-blue-400" />
                            )}
                            <span className="font-medium">{skill.name}</span>
                            {skill.highlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Card Bottom status note */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#6B7280]">
                    <span>Domain Mastery</span>
                    <span className="text-[#CCFF00]/80 group-hover:text-[#CCFF00] transition-colors">
                      Verified Projects &amp; Code
                    </span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CS Fundamentals Callout banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl bg-[#0E1017] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 flex items-center justify-center shrink-0">
              <Cpu className="w-6 h-6 text-[#CCFF00]" />
            </div>
            <div>
              <h4 className="text-base font-bold font-display text-[#F9FAFB]">
                Engineered for High-Concurrence &amp; Algorithmic Rigor
              </h4>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-0.5">
                Deep theoretical groundwork in Computer Science: Memory hierarchies, normalization (3NF/BCNF), IPC &amp; threads, TCP/IP socket architectures.
              </p>
            </div>
          </div>

          <a
            href="#projects"
            className="shrink-0 px-4 py-2 rounded-xl bg-white/5 hover:bg-[#CCFF00]/10 border border-white/10 hover:border-[#CCFF00]/30 text-xs font-mono text-[#CCFF00] transition-colors"
          >
            See System Implementations &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
};
