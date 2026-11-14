import React from 'react';
import { motion } from 'framer-motion';

export interface SectionHeadingProps {
  number: string;
  tag: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  tag,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}
    >
      <div className={`flex items-center gap-2.5 mb-3 font-mono text-xs uppercase tracking-widest text-[#9CA3AF] ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="text-[#CCFF00] font-bold">{number}</span>
        <span className="text-white/20">/</span>
        <span className="text-white/60">{tag}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-[#F9FAFB] leading-[1.15]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#9CA3AF] font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
