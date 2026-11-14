import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'lime' | 'emerald' | 'blue' | 'amber' | 'slate' | 'outline';
  size?: 'sm' | 'md';
  dot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'slate',
  size = 'sm',
  dot = false,
  className = ''
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 rounded-full font-mono font-medium tracking-tight',
    md: 'text-xs px-3 py-1 rounded-full font-mono font-medium tracking-tight'
  };

  const variantStyles = {
    lime: 'bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30',
    emerald: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    slate: 'bg-white/[0.04] text-[#9CA3AF] border border-white/[0.08]',
    outline: 'bg-transparent text-[#E5E7EB] border border-white/15'
  };

  const dotColors = {
    lime: 'bg-[#CCFF00]',
    emerald: 'bg-emerald-400 animate-pulse',
    blue: 'bg-blue-400',
    amber: 'bg-amber-400',
    slate: 'bg-slate-400',
    outline: 'bg-white'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]}`} />}
      {children}
    </span>
  );
};
