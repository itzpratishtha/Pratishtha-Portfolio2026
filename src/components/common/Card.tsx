import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'surface' | 'elevated' | 'glass' | 'interactive';
  className?: string;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'surface',
  className = '',
  glow = false,
  ...props
}) => {
  const variantStyles = {
    surface: 'bg-[#0E1017]/90 border border-white/[0.07] backdrop-blur-md',
    elevated: 'bg-[#141722]/90 border border-white/[0.1] backdrop-blur-md shadow-2xl',
    glass: 'bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl',
    interactive: 'bg-[#0E1017]/90 border border-white/[0.07] hover:border-[#CCFF00]/40 transition-colors duration-300 backdrop-blur-md cursor-pointer'
  };

  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden ${variantStyles[variant]} ${glow ? 'shadow-[0_0_40px_rgba(204,255,0,0.06)]' : ''} ${className}`}
      {...props}
    >
      {glow && (
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#CCFF00]/10 rounded-full blur-3xl pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
};
