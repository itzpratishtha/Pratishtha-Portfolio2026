import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, ArrowUpRight, ShieldCheck, Star } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';
import { CertificateModal } from './CertificateModal';
import { CERTIFICATIONS, DUAL_CODER_AWARD, LEETCODE_MILESTONE } from '../../data/achievements';
import { Certification } from '../../types';

export const Achievements: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenCert = (cert: Certification) => {
    setSelectedCert(cert);
    setIsModalOpen(true);
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#0A0C10]/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#CCFF00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number="04"
          tag="HONORS & CREDENTIALS"
          title="Recognition & verified competencies."
          subtitle="Celebrated honors, continuous algorithmic milestones, and certified industry proficiencies."
        />

        {/* 1. FEATURED PROMINENT DUAL-YEAR AWARD: CODER OF THE YEAR 2025 & 2026 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-[#1A1F2E] via-[#0E1017] to-[#12151E] border-2 border-[#CCFF00]/40 shadow-[0_0_50px_rgba(204,255,0,0.12)] overflow-hidden">
            
            {/* Background geometric accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(#ccff00_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Award Details */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CCFF00]/15 border border-[#CCFF00]/40 text-[#CCFF00] font-mono text-xs font-bold uppercase tracking-wider mb-4">
                  <Trophy className="w-4 h-4 text-[#CCFF00]" />
                  <span>PREMIER INSTITUTIONAL HONORS &middot; DUAL YEAR RECOGNITION</span>
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[#F9FAFB] tracking-tight leading-[1.15] mb-4">
                  Coder of the Year{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CCFF00] via-[#E2FF4D] to-[#A3D900]">
                    2025 &amp; 2026
                  </span>
                </h3>

                <p className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{DUAL_CODER_AWARD.designation} &middot; {DUAL_CODER_AWARD.awardingBody}</span>
                </p>

                <p className="text-base text-[#D1D5DB] leading-relaxed max-w-2xl mb-6">
                  {DUAL_CODER_AWARD.description}
                </p>

                {/* Connected Visual Badges for Both Years with Click to Inspect */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => handleOpenCert(CERTIFICATIONS[0])}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black/40 hover:bg-[#CCFF00]/10 border border-[#CCFF00]/30 hover:border-[#CCFF00] font-mono text-xs transition-all cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
                    <span className="text-white/60">Edition I:</span>
                    <strong className="text-[#CCFF00]">Winner 2025 (Citation &amp; Prize)</strong>
                  </button>

                  <span className="text-[#CCFF00] font-mono text-lg font-bold">&harr;</span>

                  <button
                    onClick={() => handleOpenCert(CERTIFICATIONS[1])}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-black/40 hover:bg-[#CCFF00]/10 border border-[#CCFF00]/30 hover:border-[#CCFF00] font-mono text-xs transition-all cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#CCFF00]" />
                    <span className="text-white/60">Edition II:</span>
                    <strong className="text-[#CCFF00]">Winner 2026 (Stage Ceremony)</strong>
                  </button>
                </div>
              </div>

              {/* Award Visual Showcase: Actual Stage Photo */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center">
                <div
                  onClick={() => handleOpenCert(CERTIFICATIONS[1])}
                  className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#CCFF00]/50 shadow-[0_0_40px_rgba(204,255,0,0.2)] group cursor-pointer"
                >
                  <img
                    src={DUAL_CODER_AWARD.image2026}
                    alt="Coder of the Year 2026 Stage Ceremony"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#CCFF00] font-bold">Kalanidhi 2026 Stage Ceremony</span>
                    <span className="text-white/80 bg-black/60 px-2 py-0.5 rounded border border-white/10">Click to View</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#9CA3AF] mt-2">
                  Pratishtha receiving award on stage with Principal Dr. Dinesh Goyal
                </span>
              </div>

            </div>

          </div>
        </motion.div>

        {/* 2. LEETCODE 200-DAY BADGE & CODING MILESTONE SPOTLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-8 rounded-2xl bg-[#0E1017] border border-white/10 hover:border-amber-400/40 transition-colors"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-4 flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1E2433] to-[#0A0C10] border border-amber-400/40 p-1 flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(251,191,36,0.2)]">
                <img
                  src={LEETCODE_MILESTONE.badgeImageUrl}
                  alt="LeetCode 200 Days Badge"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block">
                  Algorithmic Rigor
                </span>
                <h4 className="text-xl font-bold font-display text-white">
                  LeetCode 200-Day Badge
                </h4>
                <span className="text-xs font-mono text-[#CCFF00] font-bold">
                  {LEETCODE_MILESTONE.solvedCount}
                </span>
              </div>
            </div>

            <div className="md:col-span-5">
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                {LEETCODE_MILESTONE.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {LEETCODE_MILESTONE.focusAreas.map((area) => (
                  <Badge key={area} variant="amber" size="sm">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="md:col-span-3 flex md:justify-end">
              <a
                href={LEETCODE_MILESTONE.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-xs font-mono font-bold text-amber-300 transition-colors"
              >
                <span>View LeetCode Profile (@itz_pratishtha)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </motion.div>

        {/* 3. ASYMMETRICAL CERTIFICATION & CREDENTIALS GALLERY */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold font-display text-[#F9FAFB]">
              Verified Credentials &amp; Certifications
            </h3>
            <p className="text-xs font-mono text-[#9CA3AF] mt-1">
              Exact accredited certificates with verified credentials. Click any item to inspect the certificate.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => {
            const isAward = cert.category === 'Award';
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card
                  variant="surface"
                  className={`p-6 h-full flex flex-col justify-between hover:border-[#CCFF00]/40 transition-all duration-300 cursor-pointer group ${
                    isAward ? 'bg-gradient-to-br from-[#141722] to-[#0A0C10] border-[#CCFF00]/25' : ''
                  }`}
                  onClick={() => handleOpenCert(cert)}
                >
                  <div>
                    {/* Thumbnail if available */}
                    {cert.imageUrl && (
                      <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 mb-4 bg-[#08090C] flex items-center justify-center">
                        <img
                          src={cert.imageUrl}
                          alt={cert.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1017] via-transparent to-transparent opacity-60" />
                      </div>
                    )}

                    {/* Category & Status */}
                    <div className="flex items-center justify-between mb-3">
                      <Badge
                        variant={isAward ? 'lime' : cert.category === 'AI & Cloud' ? 'blue' : 'slate'}
                        size="sm"
                      >
                        {cert.category}
                      </Badge>
                      <span className="text-[11px] font-mono text-[#6B7280]">
                        {cert.yearOrStatus}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-bold font-display text-[#F9FAFB] group-hover:text-[#CCFF00] transition-colors mb-1.5">
                      {cert.title}
                    </h4>

                    {/* Issuer */}
                    <p className="text-xs font-mono text-[#9CA3AF] mb-3 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#CCFF00]" />
                      <span>{cert.issuer}</span>
                    </p>

                    {/* Description */}
                    <p className="text-xs text-[#9CA3AF] leading-relaxed mb-4 line-clamp-3">
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#9CA3AF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action trigger */}
                    <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#CCFF00] group-hover:translate-x-1 transition-transform">
                      <span>Inspect Credential</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Certificate Preview Modal */}
      <CertificateModal
        cert={selectedCert}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
