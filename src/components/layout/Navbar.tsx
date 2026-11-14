import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command, Send, ArrowUpRight } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Terminal', href: '#terminal', id: 'terminal' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const sectionIds = ['hero', ...navLinks.map((l) => l.id)];
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090C]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo / Monogram */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0E1017] border border-[#CCFF00]/40 flex items-center justify-center font-mono font-extrabold text-sm text-[#F9FAFB] shadow-[0_0_15px_rgba(204,255,0,0.15)] group-hover:border-[#CCFF00] group-hover:scale-105 transition-all">
                P<span className="text-[#CCFF00]">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-tight text-[#F9FAFB] group-hover:text-[#CCFF00] transition-colors">
                  Pratishtha Somani
                </span>
                <span className="text-[10px] font-mono text-[#6B7280]">
                  SDE &middot; PIET
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#0E1017]/80 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 text-xs font-mono transition-colors rounded-full ${
                      isActive
                        ? 'text-[#CCFF00] font-bold'
                        : 'text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-[#CCFF00]/10 rounded-full border border-[#CCFF00]/30 -z-10"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Controls: Command Palette & Let's Talk */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Command Palette Trigger Button */}
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#CCFF00]/40 text-xs font-mono text-[#9CA3AF] hover:text-[#F9FAFB] transition-all cursor-pointer"
                title="Open Command Palette (Ctrl+K)"
              >
                <Command className="w-3.5 h-3.5 text-[#CCFF00]" />
                <span>Search</span>
                <kbd className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-[#D1D5DB]">⌘K</kbd>
              </button>

              {/* Let's Talk CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#CCFF00] hover:bg-[#B8FF00] text-[#08090C] font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:shadow-[0_0_25px_rgba(204,255,0,0.4)]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Let&apos;s Talk</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenCommandPalette}
                aria-label="Search"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#CCFF00]"
              >
                <Command className="w-4 h-4" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#F9FAFB] hover:text-[#CCFF00] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] bg-[#0E1017]/98 border-b border-white/10 p-6 z-30 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between py-2 text-sm font-mono text-[#D1D5DB] hover:text-[#CCFF00] border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#CCFF00] text-[#08090C] font-mono text-xs font-bold"
                >
                  <Send className="w-4 h-4" />
                  <span>Let&apos;s Talk</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
