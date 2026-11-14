import React from 'react';
import { Certification } from '../../types';
import { Modal } from '../common/Modal';
import { Badge } from '../common/Badge';
import { ExternalLink, ShieldCheck, Calendar, Building, FileText } from 'lucide-react';

export interface CertificateModalProps {
  cert: Certification | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, isOpen, onClose }) => {
  if (!cert) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={cert.title}
      subtitle={cert.issuer}
      maxWidth="2xl"
    >
      <div className="space-y-6">
        
        {/* Certificate Visual Image Display */}
        <div className="relative aspect-[16/11] rounded-xl bg-gradient-to-br from-[#1A1E29] via-[#0E1017] to-[#08090C] border-2 border-white/10 overflow-hidden flex items-center justify-center shadow-2xl group">
          {cert.imageUrl ? (
            <img
              src={cert.imageUrl}
              alt={cert.title}
              className="w-full h-full object-contain p-2"
            />
          ) : cert.pdfUrl ? (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <FileText className="w-16 h-16 text-[#CCFF00] mb-3" />
              <p className="text-sm font-mono text-[#F9FAFB] font-bold">Official Certificate Document</p>
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#CCFF00] text-[#08090C] font-mono text-xs font-bold"
              >
                <span>Open Certificate PDF</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <div className="relative z-10 flex flex-col items-center p-6 text-center">
              <ShieldCheck className="w-14 h-14 text-[#CCFF00] mb-3" />
              <h4 className="text-lg font-bold font-display text-[#F9FAFB]">
                {cert.title}
              </h4>
              <p className="text-xs font-mono text-[#9CA3AF] mt-1">
                Issued by {cert.issuer}
              </p>
            </div>
          )}
        </div>

        {/* Credential Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center gap-3">
            <Building className="w-4 h-4 text-[#CCFF00] shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-[#6B7280] uppercase block">Issuing Authority</span>
              <span className="text-xs font-medium text-[#F3F4F6]">{cert.issuer}</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center gap-3">
            <Calendar className="w-4 h-4 text-[#CCFF00] shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-[#6B7280] uppercase block">Credential Period / Status</span>
              <span className="text-xs font-medium text-[#F3F4F6]">{cert.yearOrStatus}</span>
            </div>
          </div>
        </div>

        {/* Narrative Description */}
        <div>
          <h5 className="text-xs font-mono uppercase tracking-wider text-[#9CA3AF] mb-2 flex items-center gap-1.5 font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#CCFF00]" />
            <span>Scope &amp; Competency Overview</span>
          </h5>
          <p className="text-xs sm:text-sm text-[#D1D5DB] leading-relaxed bg-[#141722]/60 p-4 rounded-xl border border-white/[0.06]">
            {cert.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {cert.tags.map((tag) => (
            <Badge key={tag} variant="slate" size="sm">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Verification Action */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
          <span className="text-[11px] font-mono text-[#6B7280]">
            Recipient: Pratishtha Somani
          </span>

          <div className="flex items-center gap-3">
            {cert.pdfUrl && (
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#F9FAFB] text-xs font-mono font-medium transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>View PDF</span>
              </a>
            )}

            {cert.verificationUrl && (
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#CCFF00] hover:bg-[#B8FF00] text-[#08090C] text-xs font-mono font-bold transition-all shadow-[0_0_15px_rgba(204,255,0,0.2)]"
              >
                <span>Verify Credential</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </Modal>
  );
};
