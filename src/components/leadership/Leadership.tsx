import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Building } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { LEADERSHIP_ROLES } from '../../data/leadership';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#CCFF00]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="06"
          tag="IMPACT & STEWARDSHIP"
          title="Leadership & community engagement."
          subtitle="Empowering peer developers, stewarding institutional alumni bridges, and cultivating inclusive technical environments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LEADERSHIP_ROLES.map((role, idx) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card variant="surface" className="p-6 sm:p-8 h-full flex flex-col justify-between hover:border-[#CCFF00]/30 transition-all duration-300">
                <div>
                  {/* Top Bar with Badge & Period */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <Badge variant={idx === 0 ? 'lime' : 'slate'} size="sm">
                      {role.badge || 'Leadership'}
                    </Badge>
                    <span className="text-xs font-mono text-[#6B7280] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{role.period}</span>
                    </span>
                  </div>

                  {/* Role Title & Organization */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F9FAFB] mb-1">
                    {role.role}
                  </h3>
                  <p className="text-xs font-mono text-[#CCFF00] font-semibold mb-4 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5" />
                    <span>{role.organization}</span>
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6 font-normal">
                    {role.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                    {role.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#D1D5DB] font-normal leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#CCFF00] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-[#6B7280] flex items-center justify-between">
                  <span>Community Commitment</span>
                  <span className="text-white/60">Peer Impact &amp; Growth</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
