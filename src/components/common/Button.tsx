import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'lime-glow';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'left',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090C] disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5 tracking-wide',
    md: 'text-sm px-5 py-2.5 rounded-xl gap-2 tracking-wide font-semibold',
    lg: 'text-base px-7 py-3.5 rounded-xl gap-2.5 tracking-wide font-semibold'
  };

  const variantStyles = {
    primary: 'bg-[#CCFF00] text-[#08090C] hover:bg-[#B8FF00] shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:shadow-[0_0_25px_rgba(204,255,0,0.4)] active:scale-[0.98]',
    'lime-glow': 'bg-[#CCFF00] text-[#08090C] font-mono hover:bg-[#B8FF00] shadow-[0_0_30px_rgba(204,255,0,0.35)] active:scale-[0.98]',
    secondary: 'bg-[#141722] text-[#F3F4F6] border border-white/10 hover:border-[#CCFF00]/40 hover:bg-[#1A1F2E] active:scale-[0.98]',
    outline: 'bg-transparent text-[#F3F4F6] border border-white/15 hover:border-[#CCFF00] hover:text-[#CCFF00] hover:bg-[#CCFF00]/5 active:scale-[0.98]',
    ghost: 'bg-transparent text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-white/5 active:scale-[0.98]'
  };

  return (
    <motion.button
      whileHover={disabled ? undefined : { y: -2 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </motion.button>
  );
};
